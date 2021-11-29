jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });


    $('.flat_1').click(function (){
        $('.btn_choose_flat').removeClass('white');
        $('.flat_2').addClass('white');
        $('.plan_image').hide();
        $('.plan_1').show();
    })
    $('.flat_2').click(function (){
        $('.btn_choose_flat').removeClass('white');
        $('.flat_1').addClass('white');
        $('.plan_image').hide();
        $('.plan_2').show();
    })
    if($(document).width() > 680){
        $('.feature_item').mouseover(function (){
            $(this).find('.f_top_content').hide();
            $(this).find('.hidden_data').show().addClass('animate__animated animate__fadeIn');
        }).mouseleave(function (){
            $(this).find('.f_top_content').fadeIn();
            $(this).find('.hidden_data').hide().removeClass('animate__animated animate__fadeIn');
        })
    }else{
        $('.arrow_down').click(function (){

            var text = $(this).parents('.feature_item').find('.hidden_data').text()

            $(this).parents('.feature_item').toggleClass('fitem')
            $(this).parents('.col-12').find('.show-content-mob').text(text).slideToggle();
        })
    }


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    })


    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

(function($) {

    // Init empty gallery array
    var container = [];

    // Loop over gallery items and push it to the array
    $('#gallery').find('figure').each(function() {
        var $link = $(this).find('a'),
            item = {
                src: $link.attr('href'),
                w: $link.data('width'),
                h: $link.data('height'),
                title: $link.data('caption')
            };
        container.push(item);
    });

    // Define click event on gallery item
    $('.gallery_img').click(function(event) {

        // Prevent location change
        event.preventDefault();

        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
                index: $(this).parent('figure').index(),
                bgOpacity: 0.85,
                showHideOpacity: true
            };

        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
    });

}(jQuery));



var $reviewsSlider = $('.reviews-slider');
if ($reviewsSlider.length) {
    $reviewsSlider.slick({
        accessibility: false,
        centerMode: true,
        slidesToShow: 5,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }]
    });
}
