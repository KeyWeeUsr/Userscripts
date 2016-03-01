// ==UserScript==
// @name         Nighty-night Google Docs
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.3
// @description  Write at night comfortably!
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Nighty-night-Google-Docs
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @include      https://*docs.google.*/document/*
// @include      https://*docs.google.*/sharing/*
// @include      https://*docs.google.*/e/organize*
// @include      https://*docs.google.*/picker*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var css = "\
/*TOOLBAR*/\
div.goog-menu-vertical, div#docs-menu-shield, div#docs-branding-container.docs-branding-documents, \
div.goog-sa-pane-inner {background-color: #242424 !important; background: #242424;}\
div.docs-icon-folder-solid {background-color: #696969 !important;}\
div.goog-sa-snippet-title-link, div.goog-sa-welcome-content>a, span.docs-revisions-tile-link, a.gb_b\
{color: #777777 !important;}\
div.gb_ga {background: #242424 !important;}\
div.gb_ob {background: none !important;}\
div#docs-chrome, div#docs-toolbar-wrapper, div#docs-title-label div.goog-inline-block, \
input.docs-title-input {color: #777777 !important; background-color: #0c0c0c !important; \
background-image: none !important; border: 0;box-shadow: none;}\
div.goog-menuitem {color: #777777 !important;}\
div.goog-menuitem-disabled > div > span, div.goog-menuitem-disabled > div >.goog-menuitem-accel\
{color: #333333 !important;}\
div.goog-menuseparator {border:0;}\
textarea.simple-sharing-note-text-area, td.goog-palette-cell{background-color: #777777 !important;}\
div#docs-toolbar, div.goog-toolbar, div.ac-renderer, div.apps-shortcutshelppopup-ac-renderer,\
div#docs-revisions-sidebar-header {background-color: #191919 !important; border: 0 !important;}\
\
/*BUTTONS*/\
button.simple-sharing-primary-button, div.jfk-button-action, button.goog-buttonset-action \
{color: #cccccc; background: #696969 !important; background-color: #696969 !important; \
border: 0 !important; background-image: none !important;}\
div.goog-toolbar-separator{visibility: hidden;}\
div.mg-wh .d-u, div.jfk-button-standard{background-color:#696969;background-image: none;}\
div.jfk-button-disabled{background:#898989 !important;background-image: none;}\
a.gb_nb.gb_nb, div#boldButton, div#undoButton, div#redoButton, div#printButton, \
div#formatPainterButton, div#underlineButton, div#textColorButton, div#insertLinkButton, \
div#insertCommentButton, div#alignLeftButton, div#alignCenterButton, div#alignRightButton, \
div#alignJustifyButton, div#addNumberedBulletButton, div#addBulletButton, div#bulletListPresetButton, \
div#outdentButton, div#indentButton, div#clearFormattingButtonButton, div#viewModeButton, \
div.inviter-recipient-area, div.goog-toolbar-button, div.goog-toolbar-menu-button, \
input.jfk-textinput, input.jfk-textinput:focus {background-color: #696969 !important; border: 0; \
color: #333333 !important;}\
div.goog-flat-menu-button, div.inviter-role-area > div.goog-flat-menu-button \
{background-color: #696969 !important; background-image: none !important; border: 0 !important;} \
div.goog-flat-menu-button-hover, div.inviter-role-area > div.goog-flat-menu-button-hover, \
div.jfk-button-hover {background-color: #f8f8f8 !important; background-image: none !important; \
border: 0 !important;} \
div.goog-toolbar-menu-button-caption, input.goog-toolbar-combo-button-input, \
input.docs-title-input:focus, input.hsv-input, {color: #333333 !important; \
border-color: gray !important;}\
div.docs-userdictionarydialog-row-container:hover, div#docs-spellcheckslidingdialog-suggestion-list, \
div.goog-menuitem-highlight, div#docs-docos-commentsbutton, span#docs-titlebar-share-client-button > \
div.jfk-button-action {background: #999999; border: 0;}\
div.mg-nb-kb.mg-jf-nb-kb, div.mg-Jg-Kc .d-u, div.mg-Tj-kb-u {background: #696969 !important;\
border: 0;}\
\
/*RULER*/\
div.kix-ruler-contributed-dragger-container, div#kix-ruler {border:0; background-color: #191919\
!important;}\
div.kix-ruler-background-inner {background-color: #555555 !important;}\
\
/*DOCUMENT*/\
body {background-color: transparent; color: #777777;}\
div#docs-editor, div#docs-editor-container {background-color: black !important;}\
div.kix-findselectionprovider-underlay-match, div.kix-findandreplaceoverlayprovider-match, \
div.kix-selection-overlay { background-color: #444444 !important; border-color: #444444;}\
div.kix-page-paginated {box-shadow: none !important}\
div.kix-print-block, div.kix-page-content-wrapper {background-color: #555555 !important;}\
div.docs-squarehandleselectionbox-border{border-color: #777777;}\
div.goog-slider-thumb, div.docs-rotationhandle-stick, div.docs-rotationhandle-circle, \
div.docs-squarehandleselectionbox-handle{background-color: #777777; background-image: none;}\
div.docs-reference-pane-container, div.docs-image-effect-sidebar, div.docs-image-effect-sidebar-scroll \
{background-color:#333333; border:0;}\
div.docs-docos-activitybox, div.docs-userdictionarydialog-button-add-container, \
div.docs-userdictionarydialog-row-container, div.kix-documentmetricsdialog-row{border:0;}\
div#docs-revisions-sidebar {background-color: #555555 !important; border-left: 0;}\
div.docs-revisions-tile {border: 0;}\
div.docs-revisions-tile-selected {background-color: #424242 !important;}\
\
/*BUBBLES*/\
div.docos-streampane-header, div.docos-streampane-content, div.docs-userdictionarydialog-list-container, \
div.docs-image-effect-recolor-tile, div.docs-image-effect-adjustment-tile, div.docs-slidingdialog, \
div.docs-bubble, span.docs-bubble-link {border:0;background-color:#333333;color: #666666 !important;}\
td.docs-spellcheckslidingdialog-replacement-input-container, table.docs-findinput-container, \
table.docs-findinput-container-focus {background-color: #777777 !important; border: 0;}\
\
/*MODALS*/\
div:focus {outline: none;}\
div.Jd-Od-Pe-cb, div.Jd-Od-Pe, div.Jd-Od-Pe-hf:hover, div.modal-dialog, div.modal-dialog-title,\
div.modal-dialog-content, div.modal-dialog-bg, div.data-dialog {color:#777777; background: #393939\
!important; background-color: #393939 !important; border-bottom: 0;}\
h3.apps-shortcutshelppopup-search-label, h3.apps-shortcutshelppopup-content-header, \
div.mg-og-Zb-Jh, h2.apps-shortcutshelppopup-dialog-title {color: #777777 !important;}\
div.apps-shortcutshelppopup{background-color:#242424 !important;}\
div.docs-preferencesdialog-list-body, table.apps-shortcutshelppopup-content {background-color:\
#393939; color: #757575 !important;}\
td.apps-shortcutshelppopup-content-element, a.apps-shortcutshelppopup-help-center-link {color: #757575 \
!important; border: 0;}\
div.ac-active{background-color: #696969 !important}\
div.folders-popup-summary{background: transparent !important;}\
div.folders-popup{background-color: #757575;}\
div.docs-preferencesdialog-list-body::-webkit-scrollbar-thumb, div.apps-shortcutshelppopup-header, \
div.goog-tree-root {border: 0 !important;}\
label.mg-gh-Pe, div.mg-og-Zb-pg-Yb-qg .a-kb-u, div.mg-og-Zb-pg-Yb-qg .a-pg, div.folder-creation-link,\
div.folder-creation-link:hover, span.modal-dialog-title-text {color: #777777 !important;}\
textarea#alt-text-dialog-description {background-color: #696969 !important; border: 0;}\
div.Jd-Od-nc-w, div.mg-tg-Ef, div.mg-pf-Jd-qe, div.modal-dialog-content > body {background-color:\
#393939 !important; border-top:0;}\
div.Jd-ue-Je-Nf Jd-Be-Ce, div.a-pg-w {border-bottom: 2px solid #777777 !important;}\
div.mg-ng-pf .mg-og-Zb-Ef {border-bottom: 0 !important; box-shadow: none !important;}\
div.Pd-ke-he-f-Kc {background-color: #595959 !important; color: #777777;}\
div.mg-Zb-og-Xf-kb, div.mg-gl-Ug-gl-le, div.mg-ng-pf .mg-nb-kb.mg-Kj-nb-kb, input.mg-gh-Qc,\
input.mg-wh-Qc-qb, div.oe-pe-td .Jd-If-pe-Kc, div.Pd-ke-he-cb-Kc {background-color: #595959 !important;\
border: 0;}\
div.mg-qh-Bg, div.mg-eb-Kc {border-top: 0 !important;}\
div.picker.modal-dialog {border:0;}\
div.a-kb-u-v, div.a-pg-v {border-bottom-color: #777777 !important;}\
div.mg-Hl-Ug-E .mg-Hl-Ug-Ae {border: 5px #777777 solid;}\
div.mg-og-Zb-pg-Yb-qg .mg-og-Zb-wc {border-left-color: #777777 !important}\
\
"
GM_addStyle(css);})();
/*
Missing:
1) Help modal
2) Input placeholder color stucked at initial
3) Webstore modal
4) Comments
5) Research panel
*/
