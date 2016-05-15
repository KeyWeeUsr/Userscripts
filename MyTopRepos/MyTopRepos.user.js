// ==UserScript==
// @name         My Top Repos
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.1
// @description  Show only user's repositories in "Popular repositories" ordered by stars.
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/MyTopRepos
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @include      https://github.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

if (document.getElementById('contributions-calendar')) {
    var username = location.href.replace(/.*?github.com\//, '');
    var repos = 'https://api.github.com/users/' + username + '/repos?page=1';
    var template = document.getElementsByClassName('public source')[0];
    var box = document.getElementsByClassName('boxed-group-inner mini-repo-list')[0];
    box.innerHTML = '';
} else {
    throw new Error("Don't worry, I run only at profile pages!");
}

function getRepos(jsn) {
    var repoList = [];
    for (var i = 0; i < jsn.length; i++) {
        if (!jsn[i].fork) {
            repoList.push([jsn[i].stargazers_count,
                           jsn[i].name,
                           jsn[i].description,
                           jsn[i].html_url.replace('https://github.com', '')]);
        }
    }
    return repoList.sort().reverse();
}

function createHtml(item) {
    var newItem = template.cloneNode(true);
    var old = newItem.childNodes[1].childNodes[5].innerHTML.match(/(?=<svg)(.*)(?=<\/svg>).*/g);
    newItem.childNodes[1].childNodes[5].innerHTML = item[0] + '&nbsp;' + old;
    newItem.childNodes[1].childNodes[3].childNodes[1].title = item[1];
    newItem.childNodes[1].childNodes[3].childNodes[1].innerHTML = item[1];
    newItem.childNodes[1].childNodes[7].innerHTML = item[2];
    newItem.childNodes[1].href = item[3];
    box.appendChild(newItem);
}

//while (document.getElementsByTagName('pre')[0].innerHTML.length > 5) do ajaxes
function getAjax(repoUrl) {
    $.ajax({
        url: repoUrl,
        async: false,
        dataType: "json",
        success: function(returndata) {
            var repoList = getRepos(returndata);
            for (var i = 0; i < 4; i++) {
                createHtml(repoList[i]);
            }
        }
    });
}
getAjax(repos);