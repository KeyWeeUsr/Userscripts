// ==UserScript==
// @name         Nighty-night Google Translate
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.8
// @description  Translate at night comfortably!
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Nighty-night-Google-Translate
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @include      https://*translate.google.*/*
// @include      https://plus.google.*/u/0/_/notifications/frame*origin=https%3A%2F%2Ftranslate.google.*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var css = "\
/*TEXT*/\
div#spelling-correction, div.gb_nb, div.gt-ex-text, span.gt-syn-span, div.goog-toolbar-button,\
.goog-toolbar-menu-button, div.gt-revert-correct-message {\
    color: #777777;\
}\
a, textarea#source {\
    color: #777777 !important;\
}\
\
/*TEXT DEFINITIONS*/\
span.gt-card-ttl-txt, div.gt-def-row, span.gt-rw-span {\
    color: #777777 !important;\
}\
\
/*TEXT TRANSLATIONS*/\
div.gt-baf-word-clickable {\
    color: #777777 !important;\
}\
\
/*MENU*/\
div.jfk-button-standard, div.goog-flat-menu-button {\
    color: #393939;\
    background-image: none !important;\
    background-color: #696969 !important;\
    border-color: #696969;\
}\
div.goog-menuitem-content {\
    color: #777777 !important;\
}\
input#gt-submit:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
}\
div.jfk-button-checked, div.goog-flat-menu-button-hover, div.goog-flat-menu-button-open {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
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
a.gb_pb {\
    background:#696969 !important;\
    border-color: #666666 !important;\
    color: #444444 !important;\
}\
a.gb_pb:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
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
\
/*INPUTTOOLS*/\
li.ita-kd-menuitem, span.ita-kd-menuitem-inputtool-name {\
    color: #777777 !important;\
}\
div.ita-hwt-candidate, span.ita-kd-inputtools-div, div.ita-hwt-jfk-standard,\
div.ita-hwt-jfk-action {\
    color: #393939; background-image: none !important;\
    background-color: #696969 !important; border-color: #696969;\
}\
div.ita-hwt-candidate-hover, div.ita-hwt-jfk-hover, div.ita-hwt-backspace:hover {\
    background-color: #f1f1f1 !important;\
    background-image: none !important;\
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
div.ita-hwt-grip, div.ita-hwt-close {\
    background-color: #999999 !important;\
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
\
/*NOTIFICATIONS*/\
div#gbsfw {\
    border-color: #777777 !important;\
}\
div.aac {\
    background-color: #333333 !important;\
}\
div.gb_ga {\
    background-color: #333333 !important;\
}\
div.gb_qb {\
    background-color: #222222 !important;\
    background: #222222 !important;\
}\
\
/*USERPANEL*/\
div.gb_R {\
    background-color: #555555 !important;\
    background: #555555 !important;\
}\
div.gb_T {\
    background-color: black !important;\
    border: 0;\
}\
\
\
\
/*sort borders & bgs into categories!*/\
\
\
/*Borders*/\
div#gt-src-wrap {border-color: #777777 !important;}\
div#pb-tb-c, span#result_box, div#gt-res-wrap {border-color: #777777; color: #777777;\
background: transparent !important;}\
div.cd-exp-ar:after {border-top: 16px solid #222222;}\
div.cd-exp-ar:before {border-top:16px solid #696969;}\
div.gb_cb {border-bottom-color: #333333 !important;}\
div.Kza:after, div.Kza:before {border-top-color: #666666;}\
div#pb-sp-del, #gt-pb-tb, #gt-pb-tb tr {border: 0 !important;}\
tr.nolabel {border-top: 1px solid #777777 !important;}\
\
/*Backgrounds*/\
select#gt-sl, select#gt-tl, div.Kza, tr.nolabel {background-color: #555555 !important;\
background: #555555 !important;}\
select#gt-sl:hover, select#gt-tl:hover {background:#f8f8f8 !important;}\
div#gt-ft-res, div.gb_Lb {background-color: black !important; border: 0;}\
div#pb-tool, div#gt-apb-main, div#gt-appbar {background-color: black !important;\
background: black !important; border: 0;}\
div.MNn0h, a.gb_ka, div#gt-text-c, div#gt-text-top, body,\
div#gt-lc {background-color: #222222 !important; background: #222222 !important;}\
div#pb-st-menu,div#pb-ls-menu, div#gt-sl-gms-menu,\
div#gt-tl-gms-menu {background-color: #333333 !important;}\
div.cd-exp-ar {background-color: #696969;}\
\
/*Miscellaneous*/\
div.contentframe {color: inherit; background: 0; background-color: transparent;}\
div#t-new-user {display: none;}\
span.gt-cd-cl {text-decoration: underline;}\
a.gb_Nb {text-decoration: none; font-size: 250%;}\
span.gb_Pb {background-image: none; display: inline !important; left:-10px;}\
span.gb_Pb:after {content: 'Google';}\
div.gb_Td>.gb_R {line-height: 60px;}\
img#kwu_av:hover {opacity: 1 !important;}\
body.Vzc {background-color: transparent !important; background: transparent !important;}\
\
\
/*TRASH?*/\
a.gb_Ca {color: #393939; background-image: none !important; background-color: #696969 !important; border-color: #696969;}\
div#gbqfqw, input#gbqfq {color: #393939; background-image: none !important; background-color: #696969 !important; border-color: #696969;}\
button.gbqfb {background:#696969 !important; border-color: #666666 !important; color: #444444 !important;}\
button.gbqfb:hover {background-color: #f1f1f1 !important; background-image: none !important; }\
"
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
