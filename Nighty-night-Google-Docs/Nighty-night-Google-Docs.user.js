// ==UserScript==
// @name         Nighty-night Google Docs
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      1.0
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
// @include      https://*docs.google.*/drawings/*
// @include      https://*.google.*/webstore/wall/widget?container=GOOGLE_DOCUMENT*ref=https%3A%2F%2Fdocs.google.*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var css = "\
img#kwu_av:hover {opacity: 1 !important;}\
\
/*TOOLBAR*/\
div#docs-chrome, div#docs-toolbar-wrapper, div#docs-title-widget div.goog-inline-block, \
div.goog-toolbar {\
    color: #777777 !important;\
    background-color: #0c0c0c !important;\
    background-image: none !important;\
    border: 0;\
    box-shadow: none;\
}\
div#docs-branding-container.docs-branding-documents {\
    background-color: #242424 !important;\
    background: #242424;\
}\
div.docs-icon-folder-solid {\
    background-color: #696969 !important;\
}\
div.jfk-activityIndicator-circle {\
    background-color: #696969;\
}\
div#docs-toolbar {\
    background-color: #191919 !important;\
    border: 0 !important;\
}\
input.goog-toolbar-combo-button-input, input.docs-title-input:focus {\
    color: #333333 !important;\
    border-color: gray !important;\
}\
div.goog-toolbar-menu-button-caption {\
    color: #333333 !important;\
    border-color: gray !important;\
}\
div.goog-toolbar-separator{\
    visibility: hidden;\
}\
div.goog-toolbar-combo-button {\
    background: #696969 !important;\
}\
div#boldButton, div#undoButton, div#redoButton, div#printButton, div#formatPainterButton, \
div#underlineButton, div#textColorButton, div#insertLinkButton, div#insertCommentButton, \
div#alignLeftButton, div#alignCenterButton, div#alignRightButton, div#alignJustifyButton, \
div#addNumberedBulletButton, div#addBulletButton, div#bulletListPresetButton, div#outdentButton, \
div#indentButton, div#clearFormattingButtonButton, div#viewModeButton {\
    background-color: #696969 !important;\
    border: 0;\
    color: #333333 !important;\
}\
\
/*BUTTONS*/\
div.goog-toolbar-button, div.goog-toolbar-menu-button {\
    background-color: #696969 !important;\
    border: 0;\
    color: #333333 !important;\
}\
div.jfk-button-disabled{\
    background:#898989 !important;\
    background-image: none;\
}\
div#picker:ap:1, div.jfk-button, div.jfk-button-mini, div.picker-min-arrow-inner {\
    color: #333333 !important;\
    background-color: #696969 !important;\
    background-image: none !important;\
    border: 0 !important;\
}\
div.jfk-button:hover {\
    color: #333333 !important;\
    background-color: #f8f8f8 !important;\
    background-image: none !important;\
    border: 0 !important;\
}\
div.jfk-button-standard.jfk-button-hover, div.jfk-button-hover {\
    background-color: #f8f8f8 !important;\
    background-image: none !important;\
}\
div.goog-flat-menu-button {\
    color: #333333 !important;\
    background-color: #696969 !important;\
    background-image: none !important;\
    border: 0 !important;\
}\
div.goog-toolbar-combo-button-hover, div.goog-flat-menu-button-hover {\
    background-color: #f8f8f8 !important;\
    background-image: none !important;\
}\
div.jfk-button-standard{\
    background-color:#696969;\
    background-image: none;\
    border: 0 !important;\
}\
\
/*MENUBAR*/\
div.goog-menuseparator {\
	border:0;\
}\
div.goog-menuitem {\
	color: #777777 !important;\
}\
div.goog-menuitem-disabled > div > span, div.goog-menuitem-disabled > div >.goog-menuitem-accel {\
	color: #494949 !important;\
}\
div#docs-menu-shield, div.goog-menu-vertical {\
	background-color: #242424 !important;\
	background: #242424;\
}\
\
/*MODAL SHARE*/\
div.modal-dialog, div.modal-dialog-title, div.modal-dialog-content, div.modal-dialog-bg {\
	color:#777777;\
	background: #393939 !important;\
	background-color: #393939 !important;\
	border-bottom: 0 !important;\
}\
div.modal-dialog-content > body {\
	background-color: #393939 !important;\
	border-top:0;\
}\
span.apc-name {\
	color: #777777 !important;\
}\
div.permissions-list-container, div.permissions-list > td{\
	border: 0 !important;\
}\
textarea.simple-sharing-note-text-area {\
	background-color: #777777 !important;\
}\
div.inviter-role-area > div.goog-flat-menu-button {\
	color: #333333 !important;\
	background-color: #696969 !important;\
	background-image: none !important;\
	border: 0 !important;\
	} \
div.ia-invite-controls-area {\
	background-color: #393939 !important;\
}\
div.link-management-select, div.jfk-button-action, button.simple-sharing-primary-button {\
	color: #333333;\
	background: #696969 !important;\
	background-color: #696969 !important;\
	border: 0 !important;\
	background-image: none !important;\
}\
div.inviter-role-area > div.goog-flat-menu-button-hover, div.link-management-select:hover {\
	background-color: #f8f8f8 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
div.link-management-url-container {\
	border-color: #696969 !important;\
}\
td.vs-learn-more-text > a, a.ap-learn-more-link, div.share-fmb, div.vs-info-text > a, \
a.simple-sharing-link-sharing-learn-more, span.vpc-change-link {\
	color: #777777 !important;\
}\
\
/*MODAL OPEN IMAGE*/\
div.d-u-F, div.d-u-Q {\
	color: #333333 !important;\
	background-color: #696969 !important;\
	background-image: none;\
	border: 0 !important;\
}\
div.pg-rg-Zb-Ef, div.d-u-F.d-u-v, div.d-u-Q.d-u-v {\
	color: #333333 !important;\
	background-color: #f8f8f8 !important;\
	background-image: none;\
	border: 0 !important;\
	box-shadow: none !important;\
	-webkit-box-shadow: none !important;\
}\
div.pg-vg-Ef, div.Pl-pf-Jd-qe, div.Pl-Rl-Zb-Ef, div.Pl-Ul-Ef, div.Pl-Sl-hc,\
div.Jd-Od-nc-w {\
	background-color: #393939 !important;\
	background-image: none;\
	border: 0 !important;\
	box-shadow: none !important;\
	-webkit-box-shadow: none !important;\
}\
td.mg-Fc-Zf-nn-ff {\
	border-color: #333333 !important;\
}\
div.a-kb, div.Pl-Rt-qe {\
	background-color: #242424 !important;\
}\
/*blue strip*/\
div.Pl-Pt .Pl-Yn-ub-v .Pl-Yn-ub-tb {\
	background-color: #242424 !important;\
}\
div.pg-sh-Dg, div.pg-Xg, div.a-ub, div.a-ub-T, div.a-qk, div.a-qk-w, div.a-qk-v,\
label.Pl-Fm-Pe {\
	color: #777777 !important;\
	border-color: #777777 !important;\
}\
.Pl-fr-tm-E .Pl-fr-tm-Ae, input.pg-ih-w, div.pg-rg-Zb-wc {\
	border-color: #777777 !important;\
}\
div.Pd-ke-ve-Oc-Kc, div.Pl-Eq-tm-Eq-le, input.Pl-Vm-Qc-qb, input.Pl-Fm-Qc {\
	background-color: #777777 !important;\
	border: 0 !important;\
}\
div.pg-eb-Kc {\
	color: #777777 !important;\
	border: 0 !important;\
}\
div.Pd-ke-he-f-Kc {\
	background-color: #595959 !important;\
	color: #777777;\
}\
div.picker.modal-dialog {\
	border:0;\
}\
div.Pl-Ql-pf Pl-Rl-Zb-Ef {\
	border-bottom: 2px solid #777777 !important;\
}\
div.Pd-ke-he-cb-Kc {\
	background-color: #595959 !important;\
	border: 0;\
}\
div.oe-pe-td .Jd-If-pe-Kc, div.oe-pe-Qb .Jd-If-pe-Kc {\
	background-color: #595959 !important;\
	border: 0;\
}\
\
/*MODAL FILE BROWSER*/\
div.goog-tree-root {\
	border: 0 !important;\
}\
div.folder-creation-link, div.folder-creation-link:hover {\
	color: #777777 !important;\
}\
div.folders-popup-summary{\
	background: transparent !important;\
}\
div.folders-popup{\
	background-color: #757575;\
}\
\
/*REVISIONS*/\
div.docs-revisions-default-color {\
	background-color: #222222 !important;\
}\
div#docs-revisions-sidebar {\
	background-color: #555555 !important;\
	border-left: 0;\
}\
div#docs-revisions-sidebar-header {\
	background-color: #191919 !important;\
	border: 0 !important;\
}\
div.docs-revisions-tile {\
	border: 0;\
}\
span.docs-revisions-tile-link {\
	color: #777777 !important;\
}\
div.docs-revisions-tile-selected {\
	background-color: #424242 !important;\
}\
div.goog-sa-pane-inner {\
	background-color: #242424 !important;\
	background: #242424;\
}\
\
/*PUBLISH*/\
div.modal-dialog > a {\
	color: #777777 !important;\
}\
hr.pub-dialog-sep {\
	border-top-color: #777777 !important;\
}\
div.goog-tab-hover, div.goog-tab.pub-dialog-tab.goog-tab-selected {\
	border: 0 !important;\
	background: #696969 !important;\
}\
\
/*MAIL ATTACHMENT*/\
textarea.email-attach-medium-text-area {\
	background-color: #595959 !important;\
	border-color: #777777 !important;\
}\
\
/*PAGE SETTINGS*/\
div.goog-menu {\
	background: #333333 !important;\
}\
\
/*DOCUMENT*/\
a, a:link, a:hover, a:visited {\
	color: #777777 !important;\
}\
body {\
	background-color: #393939 !important;\
	color: #777777 !important;\
}\
.docs-bubble-link, .docs-bubble a {\
	color: #777777 !important;\
}\
div#docs-editor, div#docs-editor-container {\
	background-color: black !important;\
}\
div#kix-appview {\
	background-color: #151515 !important;\
}\
div#docs-equationtoolbar {\
	background: #0c0c0c !important;\
	border: 0 !important;\
}\
div.kix-page-paginated {\
	box-shadow: none !important}\
div.kix-print-block, div.kix-page-content-wrapper {\
	background-color: #555555 !important;\
}\
td.kix-documentmetricsdialog-row {\
	border-bottom-color: #777777 !important;\
}\
\
/*FIND-REPLACE*/\
div.kix-findselectionprovider-underlay-match, div.kix-findandreplaceoverlayprovider-match, \
div.kix-selection-overlay {\
	background-color: #444444 !important;\
	border-color: #444444;\
}\
table.docs-findinput-container, table.docs-findinput-container-focus {\
	background-color: #777777 !important;\
	border: 0;\
}\
\
/*TABLES*/\
td.goog-palette-cell {\
	background-color: #999999 !important;\
}\
td.goog-palette-cell:hover {\
	background-color: #FFFFFF !important;\
}\
div.kix-equation-toolbar-palette-item {\
	border: 0 !important;\
}\
div.goog-dimension-picker-unhighlighted {\
	background-color: #777777 !important;\
}\
\
/*COMPACT TOOLBAR*/\
div.ac-renderer {\
	background-color: #191919 !important;\
	border: 0 !important;\
}\
div.goog-menuitem-highlight {\
	background: #696969 !important;\
	border: 0;\
}\
\
/*IMAGE*/\
div.goog-slider-thumb, div.docs-rotationhandle-stick, div.docs-rotationhandle-circle, \
div.docs-squarehandleselectionbox-handle{\
	background-color: #777777;\
	background-image: none;\
}\
div.docs-squarehandleselectionbox-border{\
	border-color: #777777;\
}\
div.docs-image-effect-sidebar, div.docs-image-effect-sidebar-scroll {\
	background-color:#333333;\
	border:0;\
}\
div.docs-image-effect-recolor-tile, div.docs-image-effect-adjustment-tile {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
\
/*BUBBLES*/\
div.docs-bubble, span.docs-bubble-link, div.jfk-bubble {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
div.docs-link-insertlinkbubble-suggestionholder, div.docs-link-linksuggestiongroup {\
	background-color: #333333 !important;\
	border: 0 !important}\
div.jfk-bubble-arrowimplbefore, div.jfk-bubble-arrowimplafter {\
	border-color: #333333 transparent !important;\
}\
\
/*COMMENTS*/\
div.docos-anchoreddocoview-arrow-outer, div.docos-anchoreddocoview-arrow-inner {\
	border-right: 20px solid #393939 !important}\
div.docos-streampane-content, div.docos-streampane-header {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
div.docos-streampane-header .docos-new-comment-button, div.docos-streampane-header jfk-button {\
	background-color: #696969;\
	color: #333333 !important;\
}\
div.docs-docos-activitybox {\
	border: 0;\
}\
div.docos-streamdocoview {\
	border-top-color: #595959 !important;\
}\
div.docos-streamrootreplyview, div.docos-streamrootreplyview:hover, div.docos-streamreplyview, \
div.docos-streamdocoview-inputcontainer, div.docos-overflowmenu-vertical, \
div.docos-actionmenu-vertical {\
	background-color: #494949 !important;\
}\
div.docos-anchoredreplyview-author {\
	color: #777777 !important}\
div.docos-docoview-reopen, div.docos-docoview-comment, div.docos-docoview-resolve,  \
div.docos-replyview-edit, div.docos-replyview-edit:hover, div.docos-replyview-delete, \
div.docos-replyview-delete:hover, div.docos-showrepliesbutton-collapsed {\
	color: #777777 !important}\
div.docos-anchoredreplyview, div.docos-anchoreddocoview-input-pane, div.docos-showrepliesbutton {\
	background-color: #393939 !important;\
	background: #393939 !important;\
	color: #777777 !important;\
}\
textarea.docos-input-textarea {\
	background-color: #777777 !important;\
}\
div.docos-anchoredreplyview, div.docos-showrepliesbutton {\
	border-bottom-color: #595959 !important;\
}\
div.docos-anchoredreplyview .docos-anchoredreplyview-body {\
	color: #777777 !important;\
}\
div.docs-docos-caret-outer, div.docs-docos-caret-inner {\
	border-color: #333333 transparent !important;\
}\
\
/*SPECIAL CHARS*/\
div.ita-cp-search, div.ita-cp-search.ita-cp-focus, div.ita-cp-hwt, input.ita-cp-input, \
input.label-input-label {\
	background-color: #777777 !important;\
	border-color: #777777 !important;\
}\
div.goog-char-picker-hovercard {\
	border-color: #393939 !important;\
	background-color: #494949 !important;\
}\
\
/*ALT TEXT*/\
textarea#alt-text-dialog-description {\
	background-color: #696969 !important;\
	border: 0 !important;\
}\
\
/*SPELL-CHECK*/\
label.docs-spellcheckslidingdialog-title-text {\
	color: #666666 !important;\
}\
div.docs-slidingdialog {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
td.docs-spellcheckslidingdialog-replacement-input-container {\
	background-color: #777777 !important;\
	border: 0;\
}\
div#docs-spellcheckslidingdialog-suggestion-list {\
	background: #595959 !important;\
	border: 0;\
}\
\
/*RESEARCH*/\
div.docs-reference-pane-container {\
	background-color: #333333;\
	border: 0;\
}\
div.goog-sa-pane-search {\
	background-color: #393939;\
}\
div.goog-sa-searchbox-back-button.jfk-button-disabled, div.goog-sa-searchbox-back-button, \
div.goog-sa-searchbox-fwd-button.jfk-button-disabled, div.goog-sa-searchbox-fwd-button, \
div.goog-sa-searchbox.goog-sa-component-online .goog-sa-searchbox-selectormenu, {\
	background-color: #898989 !important;\
	background: #898989 !important;\
	border: 1px solid #777777 !important;\
	border-right: none !important;\
}\
div.goog-sa-searchbox-container, div.goog-sa-searchbox-selectormenu {\
	border-color: #777777 !important;\
	background-color: #595959 !important;\
}\
div.goog-sa-settings-controls, div.goog-sa-settings-toggle-content, div.goog-sa-pane-search {\
	border-color: #777777 !important;\
}\
div.goog-sa-welcome-content>a, div.goog-sa-snippet-title-link, div.goog-sa-component-active, \
.goog-sa-personal.goog-sa-component-active.goog-sa-component-online .goog-sa-snippet-title-link, \
.goog-sa-personal .goog-sa-snippet-title-link, div.goog-sa-pane-title, \
.goog-sa-content.goog-sa-common-heading .goog-sa-content-link {\
	color: #777777 !important;\
}\
div.goog-sa-previewpane-closestrip, div.goog-sa-previewpane, div.goog-sa-pane-attribution {\
	background-color: #393939 !important;\
	border-color: #777777 !important;\
}\
div.goog-sa-component-online.goog-sa-component-active.goog-sa-sectiongroup-heading, \
div.goog-sa-snippet .goog-sa-button-bar, div.goog-sa-button-bar, \
div.goog-sa-personal.goog-sa-component-active .goog-sa-button-bar {\
	background-color: #595959 !important;\
	border-color: #777777 !important;\
}\
div.goog-sa-sectiongroup-heading {\
	border: 0 !important;\
}\
div.goog-sa-common-heading {\
	background-color: transparent;\
}\
div.goog-sa-scrollfloater > div {\
	background-color: #393939 !important;\
	border-color: #777777 !important;\
}\
a.goog-sa-common-heading, .goog-sa-content-link, a.goog-sa-snippet-title-link, \
a.goog-sa-snippet-title-link:hover, a.goog-sa-link {\
	color: #777777 !important;\
	text-decoration: underline !important;\
}\
div.goog-sa-component-online.goog-sa-component-focus.goog-sa-searchbox .goog-sa-searchbox-selectormenu, \
div.goog-sa-component-online.goog-sa-component-active.goog-sa-snippet {\
	border-color: #777777 !important;\
}\
div.goog-sa-sneakpeek, div.goog-sa-sneakpeek:last-child {\
	background-color: #595959 !important;\
	border-top-color: #494949 !important;\
	border-bottom-color: #494949 !important;\
}\
\
/*DEFINITION*/\
div.goog-sa-definition {\
	border-color: #777777 !important;\
}\
\
/*PREFS*/\
div.docs-preferencesdialog-list-body {\
	background-color: #393939;\
	color: #757575 !important;\
}\
div.docs-preferencesdialog-list-body::-webkit-scrollbar-thumb {\
	border: 0 !important;\
}\
\
/*USER DICTIONARY*/\
div.docs-userdictionarydialog-row-container {\
	border: 0;\
}\
div.docs-userdictionarydialog-row-container:hover {\
	background: #696969 !important;\
	border: 0;\
}\
div.docs-userdictionarydialog-list-container {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
div.docs-userdictionarydialog-button-add-container {\
	border: 0}\
div.modal-dialog-buttons > button, button.goog-buttonset-action {\
	color: #333333 !important;\
	background: #696969 !important;\
	background-color: #696969 !important;\
	border: 0 !important;\
	background-image: none !important;\
}\
div.modal-dialog-buttons > button:hover, button.goog-buttonset-action:hover {\
	background-color: #f8f8f8 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
\
/*WEBSTORE*/\
span.g-aa-ca {\
	color: #333333;\
	background: #696969 !important;\
	background-color: #696969 !important;\
	border: 0 !important;\
	background-image: none !important;\
}\
span.g-aa-ca-l {\
	background-color: #f8f8f8 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
div.a-d-Ec {\
	background-color: #696969 !important;\
	border: 0 !important;\
}\
div.webstore-widget {\
	color:#777777;\
	background: #393939 !important;\
	background-color: #393939 !important;\
	border-bottom: 0 !important;\
}\
input.h-n-j-Qc-lc {\
	color: #777777 !important;\
	background-color: #595959 !important;\
	border: 0;\
}\
div.O-j {\
	background-color: #494949 !important;\
	border: 0 !important;\
}\
\
/*KBSHORTCUTS*/\
div.apps-shortcutshelppopup-ac-renderer {\
	background-color: #191919 !important;\
	border: 0 !important;\
}\
h3.apps-shortcutshelppopup-search-label, h3.apps-shortcutshelppopup-content-header, \
h2.apps-shortcutshelppopup-dialog-title {\
	color: #777777 !important;\
}\
table.apps-shortcutshelppopup-content {\
	background-color: #393939;\
	color: #757575 !important;\
}\
td.apps-shortcutshelppopup-content-element, a.apps-shortcutshelppopup-help-center-link {\
	color: #757575 !important;\
	border: 0;\
}\
div.apps-shortcutshelppopup{\
	background-color:#242424 !important;\
}\
div.apps-shortcutshelppopup-header {\
	border: 0 !important;\
}\
\
/*USERPANEL*/\
div.gb_qb {\
	background: none !important;\
}\
div.gb_ga {\
	background: #242424 !important;\
}\
div.gb_nb, a.gb_b, #gb div.gb_eb.gb_eb a {\
	color: #888888 !important;\
}\
a.gb_pb.gb_pb {\
	background-color: #696969 !important;\
	border: 0;\
	color: #333333 !important;\
}\
a.gb_pb.gb_pb:hover {\
    color: #333333 !important;\
    background-color: #f8f8f8 !important;\
    background-image: none !important;\
    border: 0 !important;\
}\
div.gb_cb {\
	border-bottom-color: #242424 !important;\
}\
\
/*RULER*/\
div.kix-ruler-contributed-dragger-container, div#kix-ruler {\
	border:0;\
	background-color: #191919 !important;\
}\
div.kix-ruler-background-inner {\
	background-color: #555555 !important;\
}\
\
/*INPUTS*/\
input.docs-title-input {\
	color: #777777 !important;\
	background-color: #0c0c0c !important;\
	background-image: none !important;\
	border: 0;\
	box-shadow: none;\
}\
textarea.jfk-textinput, input.jfk-textinput, input.jfk-textinput:focus, div.inviter-recipient-area {\
	background-color: #595959 !important;\
	border: 0;\
	color: #333333 !important;\
}\
input.hsv-input {\
	color: #333333 !important;\
	background-color: #595959 !important;\
	border-color: gray !important;\
}\
/*NAVIGATION*/\
div.docs-icon-close-thin {\
    background-color: #777777 !important;\
}\
div.navigation-widget-hat {\
    border-bottom: solid 1px #777777;\
}\
div.navigation-item-level-0 {\
    color: #777777 !important;\
}\
\
"
GM_addStyle(css);
var panel=document.body;
var av='<div style="position: absolute; left: 48.5vw; top: 1vh;"><a \
href="https://github.com/KeyWeeUsr/Userscripts"><img id="kwu_av" style="opacity: 0.3;"\
src="https://github.com/identicons/KeyWeeUsr.png" width="24"></img></a></div>';
panel.insertAdjacentHTML('beforeend', av);
})();
/*
Missing:
1) Help modal
2) Report modal
Notify me if there's something missing/undesirable.
*/
