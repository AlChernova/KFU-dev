var WidthWin;
WidthWin = $(window).width();

$(document).ready(function () {
    $(document).on("click", ".mobile-nav .contact", function () {
        $(".box-contact").toggleClass("show");
        $(".mobile-nav .hamburger").removeClass("active");
        $("body").removeClass("noscroll");
        $(".box-nav").removeClass("show");
    });
    $(document).on("click", ".mobile-nav .hamburger", function () {
        $(this).toggleClass("active");
        $("body").toggleClass("noscroll");
        $(".box-nav").toggleClass("show");
        $(".box-contact").removeClass("show");
        if ($(".user_menu").hasClass("show")) {
            $(".user_menu").removeClass("show");
        }
    });
    if (WidthWin < 600) {
        $(document).on("click", ".box-nav .box-auth .user_setting", function () {
            $(".user_menu").toggleClass("show");
        });
        $(document).on("click", "nav .has_level2 > a", function () {
            $(this).next("ul").toggleClass("show");
            
        });
    }

    // слайдер спектр возможностей
    if($("#widespektr").length) {
        $("#widespektr").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 700,
            responsive: [
                {
                    breakpoint: 1024,
                    setting: {
                        autoplay: false
                    }
                }
            ]
        });
    }
// END слайдер спектр возможностей    
    if($("#slider-teachers").length) {
        $("#slider-teachers").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                  breakpoint: 1330,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
            ]
        });
    }
// END слайдер переподы 
    if($("#slider-programs").length) {
        var $buttons = $('.type-programs button').click(function() {
            $('#slider-programs').slick('slickGoTo', $buttons.index(this));
          });
        $('#slider-programs').on('init beforeChange', function(e, slick, currSlide, nextSlide) {
            $buttons
              .parent().removeClass('active')
              .eq(e.type === 'init' ? slick.currentSlide : nextSlide)
              .addClass('active');
        });
        $("#slider-programs").slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            autoplay: false,
            adaptiveHeight: true,
            fade: true
        });
    }

});
