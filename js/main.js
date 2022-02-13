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
            autoplay: false,
            autoplaySpeed: 500,
        });
// END слайдер спектр возможностей

});
