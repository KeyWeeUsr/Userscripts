// ==UserScript==
// @name         Top Repos
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.4
// @description  Show star-ordered user's repositories in "Popular repositories"
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/TopRepos
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://assets-cdn.github.com/favicon.ico
// @include      https://github.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/TopRepos/emoji.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

var defaultEmoji = defaultEmoji;
function appendMe() {
    var av = $('<div><a href="https://github.com/Key' +
        'WeeUsr/Userscripts"><img id="kwu_av" style="opacity: 0.3;" ' +
        'src="https://github.com/identicons/KeyWeeUsr.png" width=' +
        '"24"></img></a></div>');
    av.css('position', 'absolute');
    av.css('left', $('.tabnav').position().left + $('.tabnav').width() + 5);
    av.css('top', $('.tabnav').position().top);
    av.mouseenter(function() {
        $('#kwu_av').css('opacity', 1.0);
    });

    av.mouseleave(function() {
        $('#kwu_av').css('opacity', 0.3);
    });
    $('body').prepend(av);
}

function checkAv() {
    if (document.getElementById('contributions-calendar')) {
        appendMe();
    }
    if (document.getElementById('kwu_av') !== null) {
        run();
        clearInterval(tabCheck);
    }
}

function run() {
    var page = 1;
    var repoList = [];
    var image = '<img class="emoji" title="$key$" alt="$key$" src=\
"$url$" height="20" width="20" align="absmiddle">';
    var template = document.getElementsByClassName('public source')[0];
    var box = document.getElementsByClassName('boxed-group-inner mini-repo-list')[0];

    var username = location.href.replace(/.*?github.com\//, '');
    var repos = 'https://api.github.com/users/' + username + '/repos?page=';
    var repoPages = 'https://api.github.com/users/' + username +
        '/repos?callback=getPages';

    try {
        box.innerHTML = '';
    } catch (e) {}
    $.ajaxSetup({
        async: false
    });

    Array.prototype.extend = function(extendArray) {
        if (extendArray.constructor !== Array) {
            throw new Error();
        }
        extendArray.forEach(function(item) {
            this.push(item);
        }, this);
    };

    function commifyInt(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    function emojify(desc) {
        var _desc = desc;
        var emoji = desc.match(/:(\w*?):/g);
        try {
            for (var i = 0; i < emoji.length; i++) {
                //image
                var emojiTag = image;
                emojiTag = emojiTag.replace('$key$', emoji[i].slice(1, -1));
                emojiTag = emojiTag.replace('$key$', emoji[i].slice(1, -1));
                emojiTag = emojiTag.replace('$url$',
                    defaultEmoji[emoji[i].slice(1, -1)]);
                desc = desc.replace(emoji[i], emojiTag);
            }
            return desc;
        } catch (e) {
            return _desc;
        }
    }

    function getTotal(repoPages) {
        // dont change function name (slice! --------v)
        var pages = $.getJSON(repoPages);
        try {
            pages = JSON.parse(pages.responseText.slice(13, -2)).meta.Link[1][0];
            pages = pages.replace(/(.*?callback=getPages&page=)/, '');
        } catch (e) {
            // return page==1 if no next page exists
            pages = 1;
        }
        return parseInt(pages);
    }
    var pages = getTotal(repoPages);

    function getRepos(jsn) {
        var tempRepoList = [];
        for (var i = 0; i < jsn.length; i++) {
            if (!jsn[i].fork) {
                tempRepoList.push([jsn[i].stargazers_count,
                    jsn[i].name,
                    jsn[i].description,
                    jsn[i].html_url.replace('https://github.com', '')
                ]);
            }
        }
        repoList.extend(tempRepoList);
    }

    function getAjax(repoUrl, page) {
        $.ajax({
            url: repoUrl + page,
            dataType: "json",
            success: function(returndata) {
                getRepos(returndata);
            }
        });
    }

    function createHtml(item) {
        var newItem = template.cloneNode(true);
        var rgx = /(?=<svg)(.*)(?=<\/svg>).*/g;
        var old = newItem.childNodes[1].childNodes[5].innerHTML.match(rgx);
        newItem.childNodes[1].childNodes[5].innerHTML = commifyInt(item[0]) +
            '&nbsp;' + old;
        newItem.childNodes[1].childNodes[3].childNodes[1].title = item[1];
        newItem.childNodes[1].childNodes[3].childNodes[1].innerHTML = item[1];
        newItem.childNodes[1].childNodes[7].innerHTML = emojify(item[2]);
        newItem.childNodes[1].href = item[3];
        if (!item[2]) {
            newItem.childNodes[1].childNodes[5].style.marginTop = '6px';
        }
        box.appendChild(newItem);
    }

    for (var i = 1; i <= pages; i++) {
        getAjax(repos, i);
        if (i == pages) {
            repoList.sort(function compare(a, b) {
                return a[0] - b[0];
            }).reverse();
            for (var j = 0; j < 5; j++) {
                try {
                    createHtml(repoList[j]);
                } catch (e) {
                    /*pass if less than 5 own repos*/
                }
            }
        }
    }
}
var tabCheck = setInterval(checkAv, 250);
