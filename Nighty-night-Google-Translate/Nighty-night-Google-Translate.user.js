// ==UserScript==
// @name         Nighty-night Google Translate
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.5
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
/*Text,Buttons,Inputs*/\
div#spelling-correction, div.gb_nb, div.gt-ex-text, span.gt-syn-span, div.goog-toolbar-button,\
.goog-toolbar-menu-button {color: #777777;}\
li.ita-kd-menuitem, span.ita-kd-menuitem-inputtool-name, div.goog-menuitem-content, span.gt-card-ttl-txt,\
span.gt-rw-span, div.gt-def-row, a, div.gt-baf-word-clickable, textarea#source {color: #777777 !important;}\
div#gbqfqw, input#gbqfq, input#gt-pb-sb, button.jfk-button-action, button.vk-btn,\
span.ita-kd-inputtools-div, div.goog-flat-menu-button, input.jfk-button-action, div.jfk-button-standard,\
a.gb_Ca{color: #444444; background-image: none; background-color: #696969 !important; border-color: #696969;}\
button.gbqfb, a.gb_pb {background:#696969 !important; border-color: #666666 !important;\
color: #444444 !important;}\
input#gt-submit:hover, button.gbqfb:hover, a.gb_pb:hover {background-color: #f8f8f8 !important;}\
\
/*Borders*/\
div#gbsfw, div#gt-src-wrap {border-color: #777777 !important;}\
div#pb-tb-c, span#result_box, div#gt-res-wrap {border-color: #777777; color: #777777;background: transparent\
 !important;}\
div.cd-exp-ar:after {border-top: 16px solid #222222;}\
div.cd-exp-ar:before {border-top:16px solid #696969;}\
div.gb_ab {border-bottom-color: #333333 !important;}\
div.Kza:after, div.Kza:before {border-top-color: #666666;}\
\
/*Backgrounds*/\
select#gt-sl, select#gt-tl, div.Kza, div.gb_R {background-color: #555555 !important;\
background: #555555 !important;}\
select#gt-sl:hover, select#gt-tl:hover {background:#f8f8f8 !important;}\
div#gt-ft-res, div.gb_Lb, div.gb_T {background-color: black !important; border: 0;}\
div#pb-tool, div#gt-apb-main, div#gt-appbar {background-color: black !important; background: black !important;\
 border: 0;}\
div.MNn0h, a.gb_ka, div.gb_qb, div#gt-text-c, div#gt-text-top, body, div#gt-lc\
{background-color: #222222 !important; background: #222222 !important;}\
div#pb-st-menu,div#pb-ls-menu,ul.ita-kd-dropdown-menu, div#gt-sl-gms-menu, div#gt-tl-gms-menu, div.vk-box,\
div.aac, ul.gb_ja, ul.gb_ca, div.gb_ga {background-color: #333333 !important;}\
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
