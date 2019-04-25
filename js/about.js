$(document).ready(function() {
    var tween0 = KUTE.fromTo(
        "#s-1",
        {
            attr: {
                stroke: "#673AB7"
            },
            path: "#s-5"
        },
        {
            attr: {
                stroke: "#2196F3"
            },
            path: "#s-1"
        },
        {
            duration: 750,
            easing: "easingCubicInOut",
            reverseFirstPath: false,
            morphPrecision: 100,
            morphPrecision: 1
        }
    );

    var tween1 = KUTE.fromTo(
        "#s-1",
        {
            attr: {
                stroke: "#FFFFFF"
            },
            path: "#s-1"
        },
        {
            path: "#s-2"
        },
        {
            duration: 750,
            easing: "easingCubicInOut",
            reverseFirstPath: true,
            morphPrecision: 100,
            morphIndex: 1
        }
    );

    var tween2 = KUTE.fromTo(
        "#s-1",
        {
            attr: {
                stroke: "#673AB7"
            },
            path: "#s-2"
        },
        {
            path: "#s-3"
        },
        {
            duration: 750,
            easing: "easingCubicInOut",
            reverseFirstPath: true,
            morphPrecision: 100,
            morphIndex: 1
        }
    );

    var tween3 = KUTE.fromTo(
        "#s-1",
        {
            path: "#s-3"
        },
        {
            path: "#s-4"
        },
        {
            duration: 750,
            easing: "easingCubicInOut",
            reverseFirstPath: false,
            morphPrecision: 100,
            morphIndex: 1
        }
    );

    var tween4 = KUTE.fromTo(
        "#s-1",
        {
            attr: {
                stroke: "#673AB7"
            },
            path: "#s-4"
        },
        {
            attr: {
                stroke: "#2196F3"
            },
            path: "#s-5"
        },
        {
            duration: 750,
            easing: "easingCubicInOut",
            reverseFirstPath: false,
            morphPrecision: 100,
            morphPrecision: 1
        }
    );

    $("nav ul li").click(function() {
        sectionIndex = $(this).index();

        if (!$(this).hasClass("state")) {
            $("nav ul li").removeClass("state");
            $(this).addClass("state");
            eval("tween" + sectionIndex).start();
        }

        $("html, body").animate(
            {
                scrollTop:
                    $("section")
                        .eq(sectionIndex)
                        .offset().top - 130
            },
            750
        );
    });

    var resizeTimer;

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
        var sectionIndex = $("section.active").index();

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            eval("tween" + sectionIndex).start();
        }, 250);
    });
});
