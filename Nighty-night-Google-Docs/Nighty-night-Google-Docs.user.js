// ==UserScript==
// @name         Nighty-night Google Docs
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      1.6
// @description  Write at night comfortably!
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Nighty-night-Google-Docs
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://www.google.com/docs/about/favicon.ico
// @include      https://*docs.google.*/document/*
// @include      https://*docs.google.*/sharing/*
// @include      https://*docs.google.*/e/organize*
// @include      https://*docs.google.*/picker*
// @include      https://*docs.google.*/drawings/*
// @include      https://*.google.*/webstore/wall/widget?container=GOOGLE_DOCUMENT*ref=https%3A%2F%2Fdocs.google.*
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function () {
var maincss = "\
img#kwu_av:hover {opacity: 1 !important;}\
\
*:focus {\
    outline: none;\
}\
/*TOOLBAR*/\
div#docs-chrome, div#docs-toolbar-wrapper, \
div#docs-title-widget div.goog-inline-block, div.goog-toolbar {\
    color: #777777 !important;\
    background-color: #0c0c0c !important;\
    background-image: none !important;\
    border: 0;\
    box-shadow: none;\
}\
div.goog-control-hover, div.goog-control-open {\
    background: #444444 !important;\
    border-color: #444444 !important;\
}\
div#docs-branding-container.docs-branding-documents, div.goog-button-hover {\
    background-color: #242424 !important;\
    background: #242424;\
}\
div.docs-icon-folder-solid {\
    background-color: #696969 !important;\
}\
div.jfk-activityIndicator-circle {\
    background-color: #696969 !important;\
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
div#boldButton, div#undoButton, div#redoButton, div#printButton, \
div#formatPainterButton, div#underlineButton, div#textColorButton, \
div#insertLinkButton, div#insertCommentButton, div#alignLeftButton, \
div#alignCenterButton, div#alignRightButton, div#alignJustifyButton, \
div#addNumberedBulletButton, div#addBulletButton, div#bulletListPresetButton, \
div#outdentButton, div#indentButton, div#clearFormattingButtonButton, \
div#viewModeButton {\
    background-color: #696969 !important;\
    border: 0;\
    color: #333333 !important;\
}\
div.goog-menuitem.docs-submenuitem {\
    border: 0 !important;\
}\
div.jfk-button.docs-submenuitem-splitbutton, \
div.jfk-button.docs-submenuitem-splitbutton:hover {\
    background-color: #242424 !important;\
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
div#picker:ap:1, div.jfk-button, div.jfk-button-mini, \
div#docs-chrome > div > div > div > div > div > div > div > div > div {\
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
div.jfk-button-standard {\
    background-color:#696969;\
    background-image: none;\
    border: 0 !important;\
}\
\
/*MENUBAR*/\
div.goog-menuseparator {\
	border:0;\
}\
div.goog-menuitem, .goog-option-selected .goog-menuitem-content {\
	color: #777777 !important;\
}\
div.goog-menuitem-disabled > div > span, \
div.goog-menuitem-disabled > div >.goog-menuitem-accel {\
	color: #494949 !important;\
}\
div#docs-menu-shield, div.goog-menu-vertical {\
	background-color: #242424 !important;\
	background: #242424;\
}\
\
/*MODAL SHARE*/\
div.modal-dialog, div.modal-dialog-title, div.modal-dialog-content, \
div.modal-dialog-bg {\
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
div.link-management-select, div.jfk-button-action, \
button.simple-sharing-primary-button {\
	color: #333333;\
	background: #696969 !important;\
	background-color: #696969 !important;\
	border: 0 !important;\
	background-image: none !important;\
}\
div.inviter-role-area > div.goog-flat-menu-button-hover, \
div.link-management-select:hover {\
	background-color: #f8f8f8 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
div.link-management-url-container {\
	border-color: #696969 !important;\
}\
td.vs-learn-more-text > a, a.ap-learn-more-link, div.share-fmb, \
div.vs-info-text > a, a.simple-sharing-link-sharing-learn-more, \
span.vpc-change-link {\
	color: #777777 !important;\
}\
\
/*MODAL FILE BROWSER*/\
div.picker.modal-dialog {\
	border:0;\
}\
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
	background-color: #333333 !important;\
	border-left: 0;\
}\
div#docs-revisions-sidebar-header {\
	background-color: #191919 !important;\
	border: 0 !important;\
}\
div.docs-revisions-tile {\
	border: 0;\
}\
span.docs-revisions-tile-link, span.docs-revisions-tile-timestamp {\
	color: #777777 !important;\
}\
div.docs-revisions-tile-selected {\
	background-color: #424242 !important;\
}\
div.goog-sa-pane-inner, div.docs-revisions-tile-hover {\
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
div.kix-findselectionprovider-underlay-match, \
div.kix-findandreplaceoverlayprovider-match, div.kix-selection-overlay {\
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
	background-color: #333333 !important;\
	border: 0 !important;\
    color: #888888 !important;\
}\
div.ac-active {\
    background-color: #242424 !important;\
}\
div.goog-menuitem-content {\
    color: #777777 !important;\
}\
div.goog-menuitem-highlight {\
	background: #242424 !important;\
	border: 0;\
}\
\
/*IMAGE*/\
div.goog-slider-thumb, div.docs-rotationhandle-stick, \
div.docs-rotationhandle-circle, div.docs-squarehandleselectionbox-handle {\
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
div.docs-link-insertlinkbubble-suggestionholder, \
div.docs-link-linksuggestiongroup {\
	background-color: #333333 !important;\
	border: 0 !important;\
}\
div.jfk-bubble-arrowimplbefore, div.jfk-bubble-arrowimplafter {\
	border-color: #333333 transparent !important;\
}\
\
/*COMMENTS*/\
div.docos-anchoreddocoview-arrow-outer, \
div.docos-anchoreddocoview-arrow-inner {\
	border-right: 20px solid #393939 !important;\
}\
div.docos-streampane-content, div.docos-streampane-header {\
	border:0;\
	background-color:#333333;\
	color: #666666 !important;\
}\
div.docos-streampane-header .docos-new-comment-button, \
div.docos-streampane-header jfk-button {\
	background-color: #696969;\
	color: #333333 !important;\
}\
div.docs-docos-activitybox {\
	border: 0;\
}\
div.docos-streamdocoview {\
	border-top-color: #595959 !important;\
}\
div.docos-streamrootreplyview, div.docos-streamrootreplyview:hover, \
div.docos-streamreplyview, div.docos-streamdocoview-inputcontainer, \
div.docos-overflowmenu-vertical, div.docos-actionmenu-vertical {\
	background-color: #494949 !important;\
}\
div.docos-anchoredreplyview-author, div.docos-streamdocoview-authorname, \
div.docos-streamdocoview-body, span.docos-streamreplyview-body, \
span.docos-replyview-quote {\
	color: #777777 !important;\
}\
div.docos-docoview-reopen, div.docos-docoview-comment, \
div.docos-docoview-resolve, div.docos-replyview-edit, \
div.docos-replyview-edit:hover, div.docos-replyview-delete, \
div.docos-replyview-delete:hover, div.docos-showrepliesbutton-collapsed {\
	color: #777777 !important;\
}\
div.docos-anchoredreplyview, div.docos-anchoreddocoview-input-pane, \
div.docos-showrepliesbutton {\
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
div.docos-anchoredreplyview .docos-anchoredreplyview-body, \
div.docos-streamreplyview-author {\
	color: #777777 !important;\
}\
div.docos-enable-new-header>.docs-docos-caret-inner, \
div.docs-docos-caret-outer {\
	border-color: #333333 transparent !important;\
}\
\
/*SPECIAL CHARS*/\
div.ita-cp-search, div.ita-cp-search.ita-cp-focus, div.ita-cp-hwt, \
input.ita-cp-input, input.label-input-label {\
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
/*RESEARCH - NEW EXPLORE SIDEBAR (Ctrl+Alt+Shift+I)*/\
div.docs-explore-sidebar-title {\
	background-color: #333333;\
	border: 0;\
}\
div.docs-explore-sidebar, div.docs-dictionary-sidebar {\
	background-color: #393939;\
}\
div.goog-sa-searchbox-back-button.jfk-button-disabled, \
div.goog-sa-searchbox-back-button, \
div.goog-sa-searchbox-fwd-button.jfk-button-disabled, \
div.goog-sa-searchbox-fwd-button, \
div.goog-sa-searchbox.goog-sa-component-online .goog-sa-searchbox-selectormenu {\
	background-color: #898989 !important;\
	background: #898989 !important;\
	border: 1px solid #777777 !important;\
	border-right: none !important;\
}\
div.goog-sa-searchbox-container, div.goog-sa-searchbox-selectormenu, \
div.docs-explore-widget {\
	border-color: #777777 !important;\
	background-color: #595959 !important;\
}\
div.goog-sa-settings-controls, div.goog-sa-settings-toggle-content, \
div.goog-sa-pane-search {\
	border-color: #777777 !important;\
}\
div.goog-sa-welcome-content>a, div.goog-sa-snippet-title-link, \
div.goog-sa-component-active, .goog-sa-personal.goog-sa-component-active.goog-sa-component-online \
.goog-sa-snippet-title-link, .goog-sa-personal .goog-sa-snippet-title-link, \
div.goog-sa-pane-title, .goog-sa-content.goog-sa-common-heading \
.goog-sa-content-link, div.docs-explore-topicitem-title, \
div.docs-explore-topicitem-generator-text, div.docs-explore-card-more-button, \
div.docs-explore-card-title-heading, div.docs-explore-tabbar-tab-label, \
div.docs-explore-serp-webresult-snippet, div.docs-explore-emptylist-title, \
div.docs-explore-emptylist-body, div.docs-explore-sidebar-title-heading, \
div.docs-dictionary-titlebar-heading {\
	color: #777777 !important;\
}\
div.docs-explore-searchbar-suggestion-itemview-title, \
span.docs-explore-widget-text {\
    color: #000000 !important;\
}\
div.goog-sa-previewpane-closestrip, div.goog-sa-previewpane, \
div.goog-sa-pane-attribution, div.docs-explore-card, \
div.docs-explore-nuggetscardview-container, div.docs-explore-searchbar-ac-active, \
div.docs-explore-serp-webresultsview-card-container {\
	background-color: #393939 !important;\
	border-color: #777777 !important;\
}\
div.goog-sa-component-online.goog-sa-component-active.goog-sa-sectiongroup-heading, \
div.goog-sa-snippet .goog-sa-button-bar, div.goog-sa-button-bar, \
div.goog-sa-personal.goog-sa-component-active .goog-sa-button-bar, \
div.docs-explore-searchbar-ac-renderer {\
	background-color: #595959 !important;\
	border-color: #777777 !important;\
}\
div.goog-sa-sectiongroup-heading {\
	border: 0 !important;\
}\
div.goog-sa-common-heading {\
	background-color: transparent;\
}\
div.goog-sa-scrollfloater > div, div.docs-explore-serp-webresultscard-header, \
div.docs-explore-serp-webresultscard-content, \
div.docs-explore-serp-webresultscard, \
div.docs-explore-serp-webresultscard-allresults {\
	background-color: #393939 !important;\
	border-color: #777777 !important;\
}\
a.goog-sa-common-heading, .goog-sa-content-link, a.goog-sa-snippet-title-link,\
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
div.docs-explore-tabbar-tab-selected {\
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
	background: #242424 !important;\
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
/*KBSHORTCUTS*/\
div.apps-shortcutshelppopup-ac-renderer {\
	background-color: #333333 !important;\
	border: 0 !important;\
}\
h3.apps-shortcutshelppopup-search-label, \
h3.apps-shortcutshelppopup-content-header, \
h2.apps-shortcutshelppopup-dialog-title {\
	color: #777777 !important;\
}\
table.apps-shortcutshelppopup-content {\
	background-color: #393939;\
	color: #757575 !important;\
}\
td.apps-shortcutshelppopup-content-element, \
a.apps-shortcutshelppopup-help-center-link {\
	color: #757575 !important;\
	border: 0;\
}\
div.apps-shortcutshelppopup{\
	background-color:#242424 !important;\
    box-shadow: none;\
}\
div.apps-shortcutshelppopup-header, div.apps-shortcutshelppopup-container {\
	border: 0 !important;\
}\
\
/*USERPANEL*/\
div.gb_ga {\
	background: #242424 !important;\
}\
div#gb > div > div > div > div > div > div {\
	background: none !important;\
}\
div#gb > div > div > div > div > div > div > div > div, a.gb_b {\
	color: #888888 !important;\
}\
div#gb > div > div > div > div > div > div > div > a {\
	background-color: #393939 !important;\
	border: 0;\
	color: #333333 !important;\
}\
div#gb > div > div > div > div > div > div > div > a:hover {\
    color: #333333 !important;\
    background-color: #f8f8f8 !important;\
    background-image: none !important;\
    border: 0 !important;\
}\
div#gb > div > div > div > div > div > div {\
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
textarea.jfk-textinput, textarea.jfk-textinput:focus, input.jfk-textinput, \
input.jfk-textinput:focus, div.inviter-recipient-area {\
	background-color: #595959 !important;\
	border: 0;\
	color: #333333 !important;\
    outline: none;\
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
.navigation-widget-container > div > div > div[role=menuitem] > div {\
    color: #777777 !important;\
}\
\
/*CONTAINERS*/\
div.webstore-widget {\
	color:#777777;\
	background: #393939 !important;\
	background-color: #393939 !important;\
	border-bottom: 0 !important;\
}\
\
";
var webstorecss = "\
/*WEBSTORE*/\
*:focus {\
    outline: none;\
}\
body > div > div > div > div > span[role=button] {\
	color: #777777;\
	background: #696969 !important;\
	background-color: #696969 !important;\
	border: 0 !important;\
	background-image: none !important;\
}\
body > div > div > div > div > div > div > div > div > a > div > div {\
	background-color: #696969 !important;\
	border: 0 !important;\
}\
body > div > div > div > div > div > input#searchbox-input {\
	color: #777777 !important;\
	background-color: #595959 !important;\
	border: 0;\
}\
body > div > div > div {\
	background-color: #333333 !important;\
	border: 0 !important;\
}\
body > div > div > div > div > div[role=listbox] {\
    background: #333333 !important;\
}\
body > div > div > div > div > span[role=button]:hover {\
	background-color: #f8f8f8 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
body > div > div > div > div > div > div > div > div > div {\
	color: #777777 !important;\
}\
body > div > div > div > div > div > div:hover {\
	background-color: #e3e3e3 !important;\
	background-image: none !important;\
	border: 0 !important;\
}\
\
";
var opencss = "\
/*MODAL OPEN*/\
*:focus {\
    outline: none;\
}\
body {\
    background-color: #393939 !important;\
}\
div[role=button] {\
	color: #333333 !important;\
	background-color: #696969 !important;\
	background-image: none;\
	border: 0 !important;\
}\
div[role=button]:hover {\
	color: #333333 !important;\
	background-color: #f8f8f8 !important;\
	background-image: none;\
	border: 0 !important;\
	box-shadow: none !important;\
	-webkit-box-shadow: none !important;\
}\
div#doclist > div > div > div > div > div > div > div > \
div > div > div > div[role=listbox], \
div#doclist > div > div > div > div > div+div > div > \
div > div > div, div[role=menu] {\
	background-color: #393939 !important;\
}\
div#doclist > div > div > div > div > div > div > div > div+div, \
div#doclist > div > div > div > div > div > div > div > div > div > div+div, \
input {\
	background-color: #393939 !important;\
    border-color: #777777 !important;\
    color: #777777 !important;\
}\
div[role=tab], div[role=heading], div[role=status] {\
	color: #777777 !important;\
	border-color: #777777 !important;\
}\
div#doclist > div > div > div > div > div, div[target=layout] {\
	background-color: #393939 !important;\
	background-image: none;\
	border: 0 !important;\
	box-shadow: none !important;\
	-webkit-box-shadow: none !important;\
}\
div[role=option] > div, div[role=option] > div > div, \
div#doclist > div > div > div > div > div > div > div > div > div > div > \
div > div > div > div > div > div > div > div+div {\
	background-color: #696969 !important;\
	border: 0 !important;\
}\
div#doclist > div > div > div > div > div > div > div > div > div > div > \
div > div > div > div > div > div+div, div[data-target=layout] {\
    background-color: #393939 !important;\
    border:0 !important;\
}\
div#doclist > div > div > div > div > div > div > div > div > div > label, \
div[role=menuitem] > div, div[role=menuitemradio] > div, \
a.picker-actionpane-notice-link {\
	color: #777777 !important;\
	border: 0 !important;\
}\
div[role=presentation] > div[role=option] {\
    background-color: none !important;\
}\
\
";
var movecss = "\
*:focus {\
    outline: none;\
}\
div[role=button] {\
	color: #333333 !important;\
	background-color: #696969 !important;\
	background-image: none;\
	border: 0 !important;\
}\
div[role=button]:hover {\
	color: #333333 !important;\
	background-color: #f8f8f8 !important;\
	background-image: none;\
	border: 0 !important;\
	box-shadow: none !important;\
	-webkit-box-shadow: none !important;\
}\
input {\
	background-color: #393939 !important;\
    border-color: #777777 !important;\
    color: #777777 !important;\
}\
div#doclist > div > div+div > div {\
    background-color: #393939 !important;\
}\
div[role=heading], div[role=status] {\
	color: #777777 !important;\
	border-color: #777777 !important;\
}\
div[role=menuitem] > div > div, div[role=menuitem] > div > div > a {\
    color: #777777 !important;\
}\
div[role=menu], div[role=menuitem] > div, div[role=menuitem] > div > \
div+div+div > div {\
	background-color: #393939 !important;\
}\
div[role=menuitem]>div:hover, div[role=menuitem] > div > div+div+div > \
div:hover {\
	background-color: #242424 !important;\
}\
div[role=group] {\
    border-color: #777777 !important;\
}\
\
";

if (/webstore/i.test(window.location.href)) {
    GM_addStyle(webstorecss);
} else if (/picker.*?kix-fileopen/i.test(window.location.href) ||
          (/picker.*?kix&/i.test(window.location.href))) {
    GM_addStyle(opencss);
} else if (/picker.*?kix-move/i.test(window.location.href)) {
    GM_addStyle(movecss);
} else if (/picker.*?profilePhoto=true/i.test(window.location.href)) {
    GM_addStyle(opencss);
} else {
    GM_addStyle(maincss);
    var panel=document.body;
    var av='<div style="position: absolute; left: 48.5vw; top: 1vh;"><a \
href="https://github.com/KeyWeeUsr/Userscripts"><img id="kwu_av" style="opacity: 0.3;"\
src="https://github.com/identicons/KeyWeeUsr.png" width="24"></img></a></div>';
    panel.insertAdjacentHTML('beforeend', av);
}
})();

/*
Missing:
1) File -> Organise -> arrow, borders
2) Docs Help
3) Report a problem
Notify me if there's something missing/undesirable.
*/
