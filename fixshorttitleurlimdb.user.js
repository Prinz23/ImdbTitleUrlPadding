// ==UserScript==
// @name        imdb.com - Title id padding fix
// @namespace   Violentmonkey Scripts
// @match       https://www.imdb.com/title/tt*
// @run-at      document-start
// @homepageURL https://github.com/Prinz23/ImdbTitleUrlPadding
// @downloadURL https://github.com/Prinz23/ImdbTitleUrlPadding/raw/master/fixshorttitleurlimdb.user.js
// @grant       none
// @version     1.1
// @author      Prinz23
// @description fixes imdb title urls that have not enough 0 padding
// ==/UserScript==

var url = window.location.href
var imdbid = url.match(/\/tt(\d+)/)

if (imdbid && imdbid[1].length < 7) {
    window.location.href = window.location.href.replace('/tt' + imdbid[1], '/tt' + imdbid[1].padStart(7, '0'));
}
