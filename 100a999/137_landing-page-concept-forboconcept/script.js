$(function () {
    $(".landingPage__button").click(function () {
        $(".landingPage").addClass("hidden");
        $(".productPage").addClass("visible");
    });

    $(".productPage__goBack").click(function () {
        $(".landingPage").removeClass("hidden");
        $(".productPage").removeClass("visible");
    });

    $('.product-image-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});