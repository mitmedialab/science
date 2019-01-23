$(document).ready(function () {
    var tween1 = KUTE.fromTo('#s-1', {
        attr: {
            fill: '#FFFFFF'
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

    var tween1 = KUTE.fromTo('#s-1', {
        attr: {
            fill: '#673AB7'
        },
        path: '#s-2'
    }, {
        path: '#s-3'
    }, {
        delay: 500,
        easing: 'easingCubicInOut',
        duration: 1000,
        reverseFirstPath: true,
        morphPrecision: 500,
        morphIndex: 100
    });

    var tween2 = KUTE.fromTo('#s-1', {
        path: '#s-3'
    }, {
        path: '#s-4'
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
        path: '#s-4'
    }, {
        attr: {
            fill: '#2196F3'
        },
        path: '#s-5'
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
        path: '#s-5'
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

    $(".left nav ul li").click(function () {
        $(".left nav ul li").removeClass("state");
        $(this).addClass("state");
        state = $(this).index();
        // $.scrollify.move($(this).attr("href"));
        if (state == 0) {
            $("#s-1").css({
                "fill": '#FFFFFF'
            });
            setTimeout(function () {
                $(".headline--container h3").text("Elements").css({ "color": "#000000" });
            }, 1000);
            !tween0.playing && tween0.start();
        } else if (state == 1) {
            $("#s-1").css({
                "fill": '#FFFFFF'
            });
            setTimeout(function () {
                $(".headline--container h3").text("Elements").css({ "color": "#000000" });
            }, 1000);
            !tween0.playing && tween0.start();
        } else if (state == 2) {
            $("#s-1").css({
                "fill": '#F03E3E'
            });
            setTimeout(function () {
                $(".headline--container h3").text("ML Learning").css({ "color": "#FFFFFF" });
            }, 1000);
            !tween0.playing && tween0.start();
        } else if (state == 3) {
            $("#s-1").css({
                "fill": '#20C997'
            });
            setTimeout(function () {
                $(".headline--container h3").text("Open Agriculture Initiative (OpenAg)").css({ "color": "#FFFFFF" });
            }, 1000);
            !tween1.playing && tween1.start();
        } else if (state == 4) {
            $("#s-1").css({
                "fill": '#4263EB'
            });
            setTimeout(function () {
                $(".headline--container h3").text("Open Ocean").css({ "color": "#FFFFFF" });
            }, 1000);
            !tween2.playing && tween2.start();
        } else if (state == 5) {
            $("#s-1").css({
                "fill": '#FAB005'
            });
            setTimeout(function () {
                $(".headline--container h3").text("Space Exploration Initiative").css({ "color": "#FFFFFF" });
            }, 1000);
            !tween3.playing && tween3.start();
        }
    });
});