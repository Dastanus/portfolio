$( document ).ready(function() {
    $(".slider").slick({
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
$( document ).ready(function() {
    $(".slick-dots>li>button").text("");
});
