// ==UserScript==
// @name         GitHub CopyCode
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.1
// @description  Copy content of a code-block everywhere on GitHub
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/CopyCode
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://assets-cdn.github.com/favicon.ico
// @include      *github.com*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
    function selectText(element) {
        var range;
        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function addButtons() {
        $("pre").each(function (i, codeBlock) {
            var codeContainer = $("<div></div>");
            var id = "codeButton-" + i;
            $(codeBlock).replaceWith(codeContainer);
            codeContainer.append(codeBlock);

            codeContainer.mouseenter(function () {
                var codeButton = $('<div style="background-color: #000; ' +
                                   'color: #fff; cursor: pointer; display:' +
                                   'inline; font-size: 12pt; opacity: 0.5;' +
                                   'padding: 3px; position: absolute;">Copy' +
                                   '</div>');
                codeButton.attr("id", id);
                codeContainer.append(codeButton);
                codeButton.css('top', codeContainer.position().top);
                codeButton.css('left', codeContainer.position().left +
                               codeContainer.width() - 50);
                codeButton.click(function () {
                    selectText(codeBlock);
                    document.execCommand("copy");
                });
            });

            codeContainer.mouseleave(function () {
                $("#" + id).remove();
            });
        });
    }

    function appendMe() {
        var av=$('<div style="float: right;"><a href="https://github.com/Key' +
                'WeeUsr/Userscripts"><img id="kwu_av" style="opacity: 0.3;" ' +
                'src="https://github.com/identicons/KeyWeeUsr.png" width=' +
                '"24"></img></a></div>');

        av.mouseenter(function () {
            $('#kwu_av').css('opacity', 1.0);
        });

        av.mouseleave(function () {
            $('#kwu_av').css('opacity', 0.3);
        });
        $('.gh-header-actions').append(av);
    }
    addButtons();
    appendMe();
})();
