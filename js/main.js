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
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{breakpoint: 768, settings: {pauseOnHover: !1}}]
        });
// END слайдер спектр возможностей

});
