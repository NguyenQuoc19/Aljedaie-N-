$(document).ready(function() {
     // reponsive
     let width = $(window).width();

     if(width <= 768) {
        $('.header-left .menu').hide()
        $('.header-right .menu .menu-list li:first a').appendTo($('.icon-hidden'));
        $('.header-left').after($('.header-logo'));
        $('.footer-col').addClass('footer-collaps-btn');
        $('.footer-col:last').removeClass('footer-collaps-btn');
        $('.guide .main-title').after($('.guide .container img'));
        $('.about .main-title').after($('.about  .container img'));
        
        let collaps = document.getElementsByClassName('footer-collaps-btn');
        $('.footer-collaps-btn').on('click', function() {
            if($('.footer-collaps-btn').hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(this).children('menu').css("max-height", "20px");
            }
        })
     }

     if(width <= 540) {
        $('.banner img').attr('src', './asset/image/banner/banner-mb.png');
     }

     $(window).on('resize', function() {location.reload()});
})