// ==UserScript==
// @name         Instagram Full Size
// @namespace    https://tesomayn.com
// @version      2.2.3
// @description  CTRL click an Instagram image to open it's full size
// @author       TesoMayn
// @match        *://*.instagram.com/*
// @grant        none
// ==/UserScript==

$(document).ready( function() {
    function makeLarge() {
        $('#react-root > section > main > article > div > div > div > a, #react-root > section > main > section > div > div > article > div').each(function(m) {
            $(this).click( function(e) {
                var full = $(this).find('img').attr('src');
                full = full.replace(/e35\/.*\//, '');

                if( full.indexOf('s640x640') !== -1 ) { full = full.replace('/s640x640', ''); }
                if( full.indexOf('p750x750') !== -1 ) { full = full.replace('/p750x750', ''); }

                if(e.ctrlKey) { e.preventDefault(); window.open(full, '_blank'); console.log(full); }
            });
        });
    }
    makeLarge();
    $(window).scroll(function () { makeLarge(); });
});
