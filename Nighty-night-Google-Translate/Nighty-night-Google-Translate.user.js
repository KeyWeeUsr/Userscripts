// ==UserScript==
// @name         Nighty-night Google Translate
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.1
// @description  Translate at night comfortably!
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Nighty-night-Google-Translate
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @include      https://*translate.google.*/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var css = "\
/*Text,Buttons,Inputs*/\
div.gt-ex-text, span.gt-syn-span, div.goog-toolbar-button, .goog-toolbar-menu-button {color: #777777;}\
li.ita-kd-menuitem, span.ita-kd-menuitem-inputtool-name, div.goog-menuitem-content, span.gt-card-ttl-txt,\
span.gt-rw-span, div.gt-def-row, a, div.gt-baf-word-clickable, textarea#source {color: #777777 !important;}\
button.jfk-button-action, button.vk-btn, span.ita-kd-inputtools-div, div.goog-flat-menu-button,\
input.jfk-button-action, div.jfk-button-standard{color: #444444; background-image: none; background-color:\
#696969 !important; border-color: #696969;}\
\
/*Borders*/\
div#gt-src-wrap {border-color: #777777 !important;}\
div#pb-tb-c, span#result_box, div#gt-res-wrap {border-color: #777777; color: #777777;background: transparent\
 !important;}\
div.cd-exp-ar:after {border-top: 16px solid #222222;}\
div.cd-exp-ar:before {border-top:16px solid #696969;}\
\
/*Backgrounds*/\
div.gb_R {background-color: #555555 !important;}\
div#gt-ft-res, div.gb_Jb, div.gb_T {background-color: black !important; border: 0;}\
div#pb-tool, div#gt-apb-main, div#gt-appbar {background-color: black !important; background: black !important;\
 border: 0;}\
div#gt-text-c, div#gt-text-top, body, div#gt-lc {background-color: #222222 !important; background: #222222\
 !important;}\
div#pb-st-menu,div#pb-ls-menu,ul.ita-kd-dropdown-menu, div#gt-sl-gms-menu, div#gt-tl-gms-menu, div.vk-box\
 {background-color: #333333;}\
div.cd-exp-ar {background-color: #696969;}\
\
/*Miscellaneous*/\
div#t-new-user {display: none;}\
span.gt-cd-cl {text-decoration: underline;}\
a.gb_Lb {text-decoration: none; font-size: 250%;}\
span.gb_Nb {background-image: none; display: inline !important; left:-10px;}\
span.gb_Nb:after {content: 'Google';}\
div.gb_Td>.gb_R {line-height: 60px;}\
div.gb_Jb {padding: 0 20px 0 24px; width: 80%;}\
\
"
GM_addStyle(css);})();
/*
Missing:
1) Notifications
2) User panel
*/
