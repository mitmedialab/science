window.sr = ScrollReveal({
    delay: 100,
    distance: "50px",
    easing: "cubic-bezier(.19,1,.22,1)",
    opacity: 1,
    scale: 1,
    duration: 500,
    viewFactor: 0.25,
    mobile: false
});

var sectionIndex = 0;

function init() {
    $("main").imagesLoaded(function() {
        sr.reveal(".img--container");
        sr.reveal(".video--container");
        sr.reveal(".show");

        $(".text--container").stick_in_parent({
            offset_top: 240
        });
    });
}

$(".left--container li").click(function() {
    $(".left--container li").removeClass("state");
    $(this).addClass("state");
    sectionIndex = $(this).index();
    $("html, body").animate(
        {
            scrollTop:
                $("section")
                    .eq(sectionIndex)
                    .offset().top - 130
        },
        750
    );
    return false;
});

function loaded() {
    $(".load--overlay").animate({
        "opacity": 0
    }, 100, function() {
        $(this).remove();
    });
};

function onLoad(loading, loaded) {
    if (document.readyState === "complete") {
        return loaded();
    }
    loading();
    if (window.addEventListener) {
        window.addEventListener("load", loaded, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", loaded);
    }
}

onLoad(
    function() {
        //
    },
    function() {
        loaded();
    }
);

$(document).ready(function() {
    $(".left--container").each(function() {
        $(this)
            .find("li")
            .eq(0)
            .addClass("state");
    });
    if ($(window).width() > 960) {
        init();
    } else {
        $(".text--container").trigger("sticky_kit:detach");
    }
    $(".left--container").each(function() {
        $(this)
            .find("li")
            .eq(0)
            .addClass("state");
    });
    $("section").each(function() {
        $(this)
            .find("h3, p, a, .img, .video, .caption")
            .addClass("show");
    });
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
        $("nav ul li")
            .removeClass("state")
            .eq(e)
            .addClass("state");
    }
});

var resizeTimer;

$(window).on("resize", function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if ($(window).width() > 960) {
            init();
        } else {
            $(".text--container").trigger("sticky_kit:detach");
        }
    }, 250);
});
