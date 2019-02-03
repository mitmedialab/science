window.sr = ScrollReveal({
    delay: 0,
    distance: "60px",
    easing: "cubic-bezier(.19,1,.22,1)",
    rotate: {
        z: 0
    },
    scale: 1,
    duration: 2000,
    viewFactor: 0.5
});

sr.reveal(".img-container");
sr.reveal(".video-container");
sr.reveal(".caption", 50);
sr.reveal(".show");

var sectionIndex = 0;

$(".left-container li").click(function() {
    $(".left-container li").removeClass("state");
    $(this).addClass("state");
    sectionIndex = $(this).index();
    $("html, body").animate({
        scrollTop: $("section").eq(sectionIndex).offset().top - 130
    }, 750);
    return false;
});

$(document).ready(function() {
    var sticky = $(".stickem-container").stickem();
    if ($(window).width() > 960) {
        $(".stickem-container").stickem({
            offset: 240
        });
    } else {
        sticky.destroy();
    }
});

$(window).scroll(function() {
    var a = $(window).height() / 2 + $(window).scrollTop();
    $("section").each(function() {
        var $this = $(this),
        b = $this.offset().top,
        c = b + $this.height();
        $this.toggleClass("active", b < a && c >= a);
    });
    var e = $(".active").index("section");
    if (e >= 0) {
        $("nav ul li").removeClass("state").eq(e).addClass("state");
    };
});

var resizeTimer;

$(window).on("resize", function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if ($(window).width() > 960) {
            $(".stickem-container").stickem({
                offset: 240
            });
        } else {
            sticky.destroy();
        }
    }, 250);
});