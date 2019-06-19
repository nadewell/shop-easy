jQuery('.hero-slider .slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    autoplay: true,
    autoplaySpeed: 3000,
});
jQuery('.featured-products .slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
});
jQuery('section.testimonials .testimonials-wrapper').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    autoplay: true,
    autoplaySpeed: 3000,
});