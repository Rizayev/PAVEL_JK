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
        $('.pinfo').hide();
        $('.flat_p1').show();
        $('.plan_1').show();
    })
    $('.flat_2').click(function (){
        $('.btn_choose_flat').removeClass('white');
        $('.flat_1').addClass('white');
        $('.plan_image').hide();
        $('.pinfo').hide();
        $('.flat_p2').show();
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
    $('.gallery').find('figure').each(function() {
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
    $('.gallery .gallery_img').click(function(event) {

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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [58.017859, 38.850923],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'ДОМ',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/icons/home.svg',
            // Размеры метки.
            iconImageSize: [60, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        school = new ymaps.Placemark([58.019905, 38.854912], {
            hintContent: 'МОУ Средняя общеобразовательная школа № 6 им. Л. И. Ошанина',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/icons/school.svg',
            // Размеры метки.
            iconImageSize: [60, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    store = new ymaps.Placemark([58.020435045451826,38.84881089239877], {
        hintContent: 'Дружба Супермаркет',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/store.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    store2 = new ymaps.Placemark([58.02275552542117,38.84905933959078], {
        hintContent: 'Пятёрочка Супермаркет',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/store.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    store3 = new ymaps.Placemark([58.021751, 38.845269], {
        hintContent: 'Магнит Супермаркет',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/store.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    sport = new ymaps.Placemark([58.022070, 38.862568], {
        hintContent: 'Теннисный центр Звезда',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/store.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    det = new ymaps.Placemark([58.022170, 38.846886], {
        hintContent: 'Детский сад № 116',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/sad.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    hospital = new ymaps.Placemark([58.034537, 38.859065], {
        hintContent: 'Поликлиническое отделение ГБУЗ ЯО Городская больница № 2 имени Н. И.Пирогова',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/hospital.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    hospital2 = new ymaps.Placemark([58.036922, 38.849199], {
        hintContent: 'Городская детская больница, детское поликлиническое отделение № 3',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/hospital.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    hospital3 = new ymaps.Placemark([58.042908, 38.829940], {
        hintContent: 'Поликлиника',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/icons/hospital.svg',
        // Размеры метки.
        iconImageSize: [60, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });



    myMap.geoObjects
        .add(myPlacemark)
        .add(det)
        .add(store)
        .add(store2)
        .add(store3)
        .add(sport)
        .add(hospital)
        .add(hospital2)
        .add(hospital3)
        .add(school);
});
