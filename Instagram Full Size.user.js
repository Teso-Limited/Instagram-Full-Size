// ==UserScript==
// @name         Instagram Full Size
// @namespace    https://tesomayn.com
// @version      2.3.0
// @description  Alt-click an Instagram image to open it's full size
// @author       TesoMayn
// @match        *://*.instagram.com/*
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// ==/UserScript==

$(document).ready( function(x) {
    function makeLarge() {
        $('#react-root > section > main > article > div > div > div > a, #react-root > section > main > section > div > div > article > div').each(function(m) {
            $(this).mousedown(function(e) {
                var full = $(this).find('img').attr('src');
                full = full.replace(/e35\/.*\//, '');
                full = full.replace(/[p|s][0-9]\w+/g, '');

                if( e.altKey ) { window.open(full, '_blank'); console.log(full); }
            });
        });
    }
    makeLarge();
    $(window).scroll( function() { makeLarge(); });
});
