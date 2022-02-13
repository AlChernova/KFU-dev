var WidthWin;
WidthWin = $(window).width();

$(document).ready(function () {
    // слайдер спектр возможностей
    if($("#widespektr").length)
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
// END слайдер спектр возможностей

});
