// ==UserScript==
// @name         Instagram Full Size
// @namespace    https://tesomayn.com
// @version      2.3.1
// @description  Alt-click an Instagram image or video to open it's full size
// @author       TesoMayn
// @match        *://*.instagram.com/*
// @grant        unsafeWindow
// ==/UserScript==

$(document).ready( function(x) {
    function makeLarge() {
        $('#react-root > section > main > article > div > div > div > a, #react-root > section > main > section > div > div > article > div').each( function(m) {
            $(this).mousedown( function(e) {
                var full = $(this).find('img').attr('src').replace(/e35\/.*\//, '').replace(/[p|s][0-9]\w+/g, '');
                if( e.altKey ) { window.open(full, '_blank'); console.log(full); }
            });
        });
    }
    makeLarge();
    $(window).scroll( function() { makeLarge(); });
});
