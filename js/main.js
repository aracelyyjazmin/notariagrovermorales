(function ($) {

    "use strict";
    
        //Dropdown Button
        $('.dropdown').hover(function () {
            if ($(window).innerWidth() >= 992) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
            }
        });
    
        $('.dropdown-toggle').on('click', function () {
            if ($(window).innerWidth() <= 992) {
                $(this).next('ul.dropdown-menu').slideToggle(300);
            }
        });
    
    
        // For Banner Slider Js
        $('.banner-slider').slick({
            autoplay: true, // Cambia automáticamente las diapositivas
            autoplaySpeed: 5000, // Tiempo en milisegundos antes de cambiar a la siguiente diapositiva
            arrows: true, // Mostrar flechas de navegación
            fade: true, // Efecto de desvanecimiento al cambiar de diapositiva
            prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Personaliza tu flecha de "anterior"
            nextArrow: '<button type="button" class="slick-next">Next</button>', // Personaliza tu flecha de "siguiente"
        });
    
        // For Counter Js
        $(".counter").counterUp({
            delay: 20,
            time: 2000,
        });
    
        // For Testimonial Slider Js
        $(".testimonial-slider").slick({
            autoplay: true,
            autoplaySpreed: 2000,
            arrows: true,
            fade: true,
            prevArrow: '<i class="fas fa-caret-left"></i>',
            nextArrow: '<i class="fas fa-caret-right"></i>',
        });
    
        $('.img').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
    
    
    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {
        $('.preloader').fadeOut(500);

        
        
    });
    
    
    })(window.jQuery);