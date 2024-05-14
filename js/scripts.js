$('.owl-carousel').owlCarousel({ 
    autoplay:true,
    autoplayTimeout:1000,
    loop: true,
    responsive:{
                0:{
                    items:2
                },
                500:{
                    items:3
                },
                1100:{
                    items:5
                }
            }
});