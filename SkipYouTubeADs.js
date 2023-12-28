// ==UserScript==
// @name 自動跳過YouTube廣告
// @namespace youtube
// @version 1.0
// @description 在YouTube網頁上自動跳過廣告
// @author Evan小饅頭
// @match *://www.youtube.com/*
// @grant none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    // 设置檢測時間間隔
    var timer = setInterval(skipAd, 1000); // 1000毫秒 = 1秒
})();
