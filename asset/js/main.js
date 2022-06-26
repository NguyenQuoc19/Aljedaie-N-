$(document).ready(function() {
     // reponsive
     let width = $(window).width();

     if(width <= 540) {
         $('.header-right .menu .menu-list li:first a').appendTo($('.icon-hidden'));
     }
})