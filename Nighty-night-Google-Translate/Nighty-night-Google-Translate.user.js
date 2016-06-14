// ==UserScript==
// @name         Nighty-night Google Translate
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      1.3
// @description  Translate at night comfortably!
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Nighty-night-Google-Translate
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://translate.google.com/favicon.ico
// @include      https://*translate.google.*/*
// @include      https://plus.google.*/u/0/_/notifications/frame*origin=https%3A%2F%2Ftranslate.google.*
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var css = "\
/*TOOLBAR*/\
div#gt-apb-main, div#gt-appbar {\
    background-color: #191919 !important;\
    background: #191919 !important;\
    border: 0;\
}\
div#gb > div > div+div > div > a > span ,span.gb_Qb {\
    background-image: none;\
    display: inline !important;\
}\
div#gb > div > div+div > div > a > span:after {\
    content: 'Google';\
}\
div#gb > div > div+div > div > a {\
    text-decoration: none;\
    font-size: 200%;\
}\
div.gb_je>.gb_R {\
    line-height: 60px;\
}\
\
/*TEXT*/\
div#spelling-correction, div.gt-ex-text, span.gt-syn-span,\
div.goog-toolbar-button, .goog-toolbar-menu-button,\
div.gt-revert-correct-message, span#gt-feedback-caption {\
    color: #777777 !important;\
}\
a, textarea#source {\
    color: #777777 !important;\
}\
\
/*TEXT DEFINITIONS*/\
span.gt-card-ttl-txt, div.gt-def-row, span.gt-rw-span {\
    color: #777777 !important;\
}\
span.gt-cd-cl {\
    text-decoration: underline;\
}\
\
/*TEXT TRANSLATIONS*/\
span.gt-baf-word-clickable {\
    color: #777777 !important;\
}\
\
span.gt-baf-hl {\
    color: #f1f1f1 !important;\
}\
\
/*MENU*/\
div.jfk-button-standard, div.jfk-button-standard:focus,\
div.goog-flat-menu-button {\
    color: #393939;\
    background-image: none !important;\
    background-color: #696969 !important;\
    border-color: #696969;\
}\
div.goog-menuitem-content {\
    color: #777777 !important;\
}\
div.goog-menuitem-highlight,\
div#gt-sl-gms-menu .goog-menuitem-group .goog-menuitem-highlight,\
div#gt-tl-gms-menu .goog-menuitem-group .goog-menuitem-highlight {\
    background-color: #222222 !important;\
    border-color: #222222 !important;\
}\
div.goog-menuitem-emphasize-highlight {\
    background-color: #222222 !important;\
}\
div.goog-option-selected {\
    background-color: #222222 !important;\
}\
input#gt-submit:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div.jfk-button-checked, div.goog-flat-menu-button-hover,\
div.goog-flat-menu-button-open {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div#gt-sl-gms-menu, div#gt-tl-gms-menu {\
    background-color: #333333 !important;\
}\
\
/*BACKGROUNDS*/\
div.gb_Mb, div#gt-ft-res {\
    background-color: #111111 !important;\
    border: 0;\
}\
body, div#gt-text-c, div#gt-text-top, div#gt-lc {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
select#gt-sl, select#gt-tl {\
    background-color: #555555 !important;\
    background: #555555 !important;\
}\
select#gt-sl:hover, select#gt-tl:hover {\
    background:#f8f8f8 !important;\
}\
div.gt-is {\
    background-color: #333333;\
    border-style: none;\
}\
div.gt-is-itm-hover {\
    background-color: #222222;\
}\
\
/*BORDERS*/\
div#gt-src-wrap, div.goog-menuseparator, div.goog-toolbar-separator {\
    border-color: #777777 !important;\
}\
span#result_box, div#gt-res-wrap {\
    border-color: #777777;\
    color: #777777;\
    background: transparent !important;\
}\
.goog-toolbar-menu-button-focused, .goog-flat-menu-button-focused {\
    border: 1px solid transparent !important;\
}\
\
/*BLUE LINKS BUTTONS*/\
button.jfk-button-action, input.jfk-button-action, div.jfk-button-action {\
    color: #393939;\
    background-image: none !important;\
    background-color: #696969 !important;\
    border-color: #696969;\
}\
div.jfk-button-hover {\
    color: #393939;\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
    border-color: #696969;\
}\
\
/*PHRASEBOOK*/\
input#gt-pb-sb, div.pbdel-button {\
    color: #393939;\
    background-image: none !important;\
    background-color: #696969 !important;\
    border-color: #696969;\
}\
div.pbdel-button:hover, button#gt-pb-sbt:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div#pb-tool {\
    background-color: #252525 !important;\
    background: #252525 !important;\
    border: 0;\
}\
div#pb-st-menu, div#pb-ls-menu {\
    background-color: #333333 !important;\
}\
tr.nolabel {\
    background-color: #333333 !important;\
    background: #333333 !important;\
    border-top: 1px solid #777777 !important;\
}\
div#pb-sp-del, #gt-pb-tb, #gt-pb-tb tr {\
    border: 0 !important;\
}\
div#pb-tb-c, table#gt-pb-tb{\
    border-color: #777777;\
    color: #777777 !important;\
    background: transparent !important;\
}\
\
/*INPUTTOOLS*/\
li.ita-kd-menuitem, span.ita-kd-menuitem-inputtool-name {\
    color: #777777 !important;\
}\
span.ita-kd-inputtools-div {\
    color: #393939; background-image: none !important;\
    background-color: transparent !important;\
    border-color: #696969;\
}\
div.ita-hwt-candidate, div.ita-hwt-backspace,\
div.ita-hwt-jfk-standard, div.ita-hwt-jfk-action {\
    color: #393939; background-image: none !important;\
    background-color: #777777 !important;\
    border-color: #696969;\
}\
div.ita-hwt-candidate-hover, div.ita-hwt-jfk-hover,\
div.ita-hwt-backspace:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
li.ita-kd-menuitem-hover {\
    background-color: #222222 !important;\
    color: #222 !important;\
}\
div.ita-hwt-buttons, div.ita-hwt-candidates {\
    border-top: 1px solid #777777 !important;\
}\
div.ita-hwt-buttons {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
ul.ita-kd-dropdown-menu {\
    background-color: #333333 !important;\
}\
div.ita-hwt-ime, div.ita-hwt-candidates {\
    background-color: #696969;\
}\
div.ita-hwt-close {\
    background-color: #393939 !important;\
}\
div.ita-hwt-grip {\
    opacity: 0.1;\
}\
div.ita-hwt-grip:hover, div.ita-hwt-close:hover {\
    background-color: #696969 !important;\
    opacity: 0.5;\
}\
div.ita-hwt-ime-st {\
    background-color: #393939 !important;\
    border-color: #777777;\
}\
button.vk-btn {\
    color: #393939;\
    background-image: none !important;\
    background-color: #696969 !important;\
    border-color: #696969;\
}\
button.vk-sf-h {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div.vk-box {\
    background-color: #333333 !important;\
}\
\
/*APPS*/\
ul.gb_ja, ul.gb_ca {\
    background-color: #333333 !important;\
}\
a.gb_ka {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
span.gb_la {\
    border-bottom: 1px solid #777777 !important;\
}\
div.MNn0h {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
.gb_Z:hover:not(.gb_0) a {\
    border: 1px solid #222222 !important;\
}\
.gb_Z:hover .gb_4 {\
    background: #222222 !important;\
}\
\
/*NOTIFICATIONS*/\
body.Vzc {\
    background-color: transparent !important;\
    background: transparent !important;\
}\
div#gbsfw {\
    border-color: transparent !important;\
}\
div.aac {\
    background-color: #333333 !important;\
}\
div.gb_ga {\
    background-color: #333333 !important;\
}\
div.Kza {\
    background-color: #555555 !important;\
    background: #555555 !important;\
}\
div.Kza:after, div.Kza:before {\
    border-top-color: #666666;\
}\
\
/*USERPANEL*/\
div#gb > div > div > div+div > div+div+div+div > div+div > div > div > div {\
    color: #777777 !important;\
}\
div.gb_R {\
    background-color: #555555 !important;\
    background: #555555 !important;\
}\
div#gb > div >div {\
    background-color: #111111 !important;\
    border: 0;\
}\
div#gb > div > div > div+div > div+div+div+div > div+div > div > div > a {\
    background:#696969 !important;\
    border-color: #666666 !important;\
    color: #444444 !important;\
}\
div#gb > div > div > div+div > div+div+div+div > div+div > div > div\
 > a:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div#gb > div > div > div+div > div+div+div+div > div+div > div+div+a+div {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
div#gb > div > div > div+div > div+div+div+div > div+div > div > a:focus {\
    outline: none;\
}\
\
/*SHARE*/\
div.jfk-bubble {\
    background-color: #393939;\
    border-color: #777777 !important;\
}\
div.share-panel{\
    background: none;\
}\
div.share-panel>h3 {\
    color: #777777 !important;\
}\
\
/*ARROWS*/\
div.cd-exp-ar {\
    background-color: #696969;\
}\
div.cd-exp-ar:after {\
    border-top: 16px solid #222222;\
}\
div.cd-exp-ar:before {\
    border-top:16px solid #696969;\
}\
div.jfk-bubble-arrowimplafter {\
    border-color: #777777 transparent !important;\
}\
div#gb > div > div > div+div > div+div+div+div > div > div+div,\
div#gb > div > div > div+div > div+div > div > a+div+div {\
    border-bottom-color: #333333 !important;\
}\
\
/*Miscellaneous*/\
div.contentframe {\
    color: inherit;\
    background: 0;\
    background-color: transparent;\
}\
div#t-new-user {\
    display: none;\
}\
div.gt-baf-sep {\
    border-bottom: 1px solid #777777 !important;\
}\
img#kwu_av:hover {\
    opacity: 1 !important;\
}\
\
";
GM_addStyle(css);
var panel=document.getElementById('gt-lang-right');
var av='<a href="https://github.com/KeyWeeUsr/Userscripts"><img id="kwu_av"\
src="https://github.com/identicons/KeyWeeUsr.png" width="28" style="position:\
relative; opacity: 0.3; float: right; right: 4px;"></img></a>';
panel.insertAdjacentHTML('afterbegin', av);
})();
/*
Notify me if there's something missing/undesirable.
*/
