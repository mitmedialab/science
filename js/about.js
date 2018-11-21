$(document).ready(function () {
    var tween1 = KUTE.fromTo('#s-1', {
        attr: {
            fill: '#673AB7'
        },
        path: '#s-1'
    }, {
        path: '#s-2'
    }, {
        delay: 500,
        easing: 'easingCubicInOut',
        duration: 1000,
        reverseFirstPath: true,
        morphPrecision: 500,
        morphIndex: 100
    });

    var tween2 = KUTE.fromTo('#s-1', {
        path: '#s-2'
    }, {
        path: '#s-3'
    }, {
        delay: 500,
        easing: 'easingCubicInOut',
        duration: 1000,
        reverseFirstPath: false,
        morphPrecision: 1,
        morphIndex: 50
    });

    var tween3 = KUTE.fromTo('#s-1', {
        attr: {
            fill: '#673AB7'
        },
        path: '#s-3'
    }, {
        attr: {
            fill: '#2196F3'
        },
        path: '#s-4'
    }, {
        delay: 500,
        easing: 'easingCubicInOut',
        duration: 1000,
        reverseFirstPath: false,
        morphPrecision: 1,
        morphIndex: 150
    });

    var tween0 = KUTE.fromTo('#s-1', {
        attr: {
            fill: '#673AB7'
        },
        path: '#s-4'
    }, {
        attr: {
            fill: '#2196F3'
        },
        path: '#s-1'
    }, {
        delay: 500,
        easing: 'easingCubicInOut',
        duration: 1000,
        reverseFirstPath: false,
        morphPrecision: 1,
        morphIndex: 150
    });

    $(".steam").mouseover(function(e) {
        $(".footnote").text("https://en.wikipedia.org/wiki/STEAM_fields");
        e.preventDefault();
    });

    $(".ml-learning-initiative-image").mouseenter(function (e) {
        $(".ml-learning-initiative-image--holder").animate({
            "opacity": 1
        }, 500);
        e.preventDefault();
    });

    $(".ml-learning-initiative-image").mouseleave(function(e) {
        $(".ml-learning-initiative-image--holder").animate({
            "opacity": 0
        }, 500);
        e.preventDefault();
    });

    $(".learn").mouseover(function(e) {
        $(".footnote").text("http://learn.media.mit.edu/");
        e.preventDefault();

    });

    $(".content__ag span").mouseover(function(e) {
        $(".footnote").text("https://www.media.mit.edu/groups/open-agriculture-openag/overview/");
        e.preventDefault();
    });

    $(".ocean-initiative").mouseover(function(e) {
        $(".footnote").text("https://www.media.mit.edu/groups/open-ocean/overview/");
        e.preventDefault();
    });

    $(".ocean-image").mouseover(function(e) {
        $(".ocean-image--holder").animate({
            "opacity": 1
        }, 500);
        e.preventDefault();

    });

    $(".ocean-image").mouseleave(function(e) {
        $(".ocean-image--holder").animate({
            "opacity": 0
        }, 500);
        e.preventDefault();
    });

    $(".content__space-exploration-initiative span").mouseover(function(e) {
        $(".footnote").text("https://www.media.mit.edu/groups/space-exploration/overview/");
        e.preventDefault();
    });

    $(".content span").mouseleave(function(e) {
        $(".footnote").text("");
        e.preventDefault();
    });

    $(".left nav ul li").click(function () {
        $(".left nav ul li").removeClass("state");
        $(this).addClass("state");
        state = $(this).index();
        if (state == 0) {
            $("#s-1").css({
                "fill": '#F03E3E'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ml-learning-initiative").removeClass("hide");
                $(".headline--container h3").text("ML Learning Initiative");
            }, 1000);
            !tween0.playing && tween0.start();
        } else if (state == 1) {
            $("#s-1").css({
                "fill": '#20C997'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ag").removeClass("hide");
                $(".headline--container h3").text("Open Agriculture Initiative (OpenAg)");
            }, 1000);
            !tween1.playing && tween1.start();
        } else if (state == 2) {
            $("#s-1").css({
                "fill": '#4263EB'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ocean-initiative").removeClass("hide");
                $(".headline--container h3").text("Open Ocean");
            }, 1000);
            !tween2.playing && tween2.start();
        } else if (state == 3) {
            $("#s-1").css({
                "fill": '#FAB005'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__space-exploration-initiative").removeClass("hide");
                $(".headline--container h3").text("Space Exploration Initiative");
            }, 1000);
            !tween3.playing && tween3.start();
        }
    });

});