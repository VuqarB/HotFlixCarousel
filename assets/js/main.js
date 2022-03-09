$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed:500,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        400: {
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})