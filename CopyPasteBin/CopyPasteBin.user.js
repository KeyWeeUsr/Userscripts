// ==UserScript==
// @name         CopyPasteBin
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.1
// @description  Copy content of a PasteBin snippet with a single click
// @author       Peter Badida
// @copyright    2017+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/CopyPasteBin
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://pastebin.com/favicon.ico
// @include      *pastebin.com*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
    function selectText(element) {
        var range;

        // select raw textarea contents
        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            range = document.createRange();
            range.selectNode(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        // copy to clipboard
        document.execCommand('copy');
    }

    function addButton() {
        var codeContainer = document.getElementById("code_buttons").children[0];

        // create COPY button on mouse enter
        var codeButton = document.createElement("a");
        codeButton.setAttribute("id", "cpb_button");
        codeButton.setAttribute("class", "buttonsm");
        codeButton.innerHTML = "copy";
        codeButton.style = "cursor: pointer; display: inline; font-style: italic;";

        // insert COPY button in front of the right side buttons
        codeContainer.insertBefore(codeButton, codeContainer.children[0]);
        codeButton.addEventListener("click", function () {
            selectText(document.getElementById("paste_code"))
        });
    }

    function appendMe() {
        var av_style = "opacity: 0.3; border-radius: 10px;"
        var av_cont_style = "margin: 2px 10px -2px 0px;"
        var av = $('<li style="' + av_cont_style + '">' +
                   '<div style="float: right;"><a href="' +
                   'https://github.com/KeyWeeUsr/Userscripts">' +
                   '<img id="kwu_av" style="' + av_style + '" ' +
                   'src="https://github.com/identicons/KeyWeeUsr.png" ' +
                   'width="24"></img></a></div></li>');

        av.mouseenter(function () {
            $('#kwu_av').css('opacity', 1.0);
        });

        av.mouseleave(function () {
            $('#kwu_av').css('opacity', 0.3);
        });
        $('.pagehead-actions').prepend(av);
    }

    // run
    addButton();
    if (!document.getElementById('kwu_av')){
        appendMe();
    }
})();
