$(document).ready(function() {
     // reponsive
     let width = $(window).width();

     if(width <= 768) {
        $('.header-left .menu').hide()
        $('.header-right .menu .menu-list li:first a').appendTo($('.icon-hidden'));
        $('.header-left').after($('.header-logo'));
        $('.footer-col').addClass('footer-collaps-btn');
        $('.footer-col:last').removeClass('footer-collaps-btn');
        
        let collaps = document.getElementsByClassName('footer-collaps-btn');
        $('.footer-collaps-btn').on('click', function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        })
     }

     $(window).on('resize', function() {location.reload()});
})