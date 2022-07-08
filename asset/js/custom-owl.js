
$(document).ready(function () {
    $(".logos .menu-list").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 3,
                margin: 40,
            },
            540: {
                items: 3,
                margin: 40,
            },
            768: {
                items: 5,
                margin: 50,
            },
            1400: {
                items: 7,
                margin: 66,
            }
        },
    });
    
    $(".best-sellers .list-product").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        dotsEach: 3,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
                margin: 20,
                dotsEach: 2,    
            },
            540: {
                items: 2,
                margin: 20,
                dotsEach: 2,
            },
            768: {
                items: 3,
                margin: 20,
                dotsEach: 3,
            },
        },
    });
    
    $(".our-fabrics .main-list").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
                margin: 20,
            },
            540: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 30,
            },
            1400: {
                items: 4,
                margin: 30,
            }
        },
    });
    
    $(".list-product").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
                margin: 20,
            },
            540: {
                items: 2,
                margin: 20,
            },
            768: {
                items: 3,
                margin: 30,
            },
            1000: {
                items: 4,
                margin: 30,
            }
        },
    });
    
    $('.share .main-list').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 3,
                margin: 20,
            },
            768: {
                items: 4,
                margin: 10,
            },
    
            1000: {
                items: 5,
                margin: 15,
            }
        },
    })
});
