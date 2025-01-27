document.addEventListener("touchstart", function() {},false);

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll-top a').fadeIn();
    } else {
        $('.scroll-top a').fadeOut();
    }
});

$(document).ready(function() {
    $("#scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.fixed-bottom-nav a').fadeIn();
    } else {
        $('.fixed-bottom-nav a').fadeOut();
    }
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.fixed-bottom-nav').fadeIn();
    } else {
        $('.fixed-bottom-nav').fadeOut();
    }
});