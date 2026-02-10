// ==UserScript==
// @name         MS Loop Wide Sidebar
// @namespace    plasticsquid
// @version      2026-02-10
// @description  Make the Loop sidebar (slightly) less suckish
// @author       Cary Symes
// @match        https://loop.cloud.microsoft/p/*
// @icon         https://res.cdn.office.net/fluid/prod/loop-app/hashed/assets/favicon/favicon-small.d141cdc47e.png
// @downloadURL  https://github.com/CSymes/ms-loop-sidebar-widener/raw/refs/heads/main/ms-loop-sidebar-widener.user.js
// @updateURL    https://github.com/CSymes/ms-loop-sidebar-widener/raw/refs/heads/main/ms-loop-sidebar-widener.user.js
// @grant        GM_addStyle
// ==/UserScript==

const newWidth = 500; // px
const asideWidth = newWidth + 400; // approximate buffer for the first sidebar

(function () {
    'use strict';

    console.log(`TM: Increasing sidebar width to ${newWidth}px`);

    GM_addStyle(`
        aside:has(> #Sidebar) {
            max-width: ${asideWidth}px;
        }

        #Sidebar {
            width: ${newWidth}px;
        }
    `);
})();
