// ==UserScript==
// @name         GitHub Halloween
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.3
// @description  Experience Halloween every day
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Halloween
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://github.com/favicon.ico
// @include      https://*github.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';
(function () {
    var items = document.getElementsByClassName("day");
    var dc;
    var max = 0;
    var second;
    var third;
    var fourth;
    for (var i=0; i<items.length; i++) {
        dc = parseInt($(items[i]).attr('data-count'));
        if (max < dc) {
            max = dc;
        }
    }
    second = Math.round(max / 2.0);
    third = Math.round(second / 2.0);
    for (var i=0; i<items.length; i++) {
        dc = parseInt($(items[i]).attr('data-count'));
        if (dc == max && dc != 0) {
            $(items[i]).attr('fill', '#03001C');
        } else if (second < dc && dc <= max - 1) {
            $(items[i]).attr('fill', '#FE9600');
        } else if (third < dc && dc <= second) {
            $(items[i]).attr('fill', '#FFC501');
        } else if (0 < dc && dc <= third) {
            $(items[i]).attr('fill', '#FFEE4A');
        } else {
            $(items[i]).attr('fill', '#EEEEEE');
        }
    }
var css = '\
ul.legend > li {\
    background-color: #EEEEEE !important;\
}\
ul.legend > li + li {\
    background-color: #FFEE4A !important;\
}\
ul.legend > li + li + li {\
    background-color: #FFC501 !important;\
}\
ul.legend > li + li + li + li {\
    background-color: #FE9600 !important;\
}\
ul.legend > li + li + li + li + li {\
    background-color: #03001C !important;\
}\
\
';
GM_addStyle(css);
})();
/*
Notify me if there's something missing/undesirable.
*/
