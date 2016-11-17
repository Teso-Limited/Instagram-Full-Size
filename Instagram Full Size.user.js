// ==UserScript==
// @name         Instagram Full Size
// @namespace    https://tesomayn.com
// @version      3.0.0
// @description  Middle Mouse Click Any Image To Open Full Size
// @author       TesoMayn
// @match        *://*.instagram.com/*
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==
$(document).ready( function() {
    $(window).on('load scroll', function() {
        $("body > span > section > main > article > header > div > img").on('mousedown', function(d) {
            if( (d.which == 2) ) {
                var dp = $(this).attr('src').replace(/[p|s][0-9]\w+/g, '');
                window.open(dp, '_blank');
            }
            d.preventDefault();
        });

        $("body > span > section > main > article > div > div > div > a").on('mousedown', function(e) {
            if( (e.which == 2) ) {
                var full = $(this).find('img').attr('src').replace(/e35\/.*\//, '').replace(/[p|s][0-9]\w+/g, '');
                window.open(full, '_blank');
            }
            e.preventDefault();
        });
    });
    console.log('Instagram Full-Size v'+GM_info.script.version+' Initialized');
});
