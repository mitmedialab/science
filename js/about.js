$(document).ready(function () {
    var tween0 = KUTE.fromTo('#s-1', {
        attr: {
            stroke: '#673AB7'
        },
        path: '#s-5'
    }, {
        attr: {
            stroke: '#2196F3'
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
    
    var tween1 = KUTE.fromTo('#s-1', {
        attr: {
            stroke: '#FFFFFF'
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
        attr: {
            stroke: '#673AB7'
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

    var tween3 = KUTE.fromTo('#s-1', {
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

    var tween4 = KUTE.fromTo('#s-1', {
        attr: {
            stroke: '#673AB7'
        },
        path: '#s-4'
    }, {
        attr: {
            stroke: '#2196F3'
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

    $("nav ul li").click(function () {
        sectionIndex = $(this).index();
        
        if (!$(this).hasClass("state")) {
            $("nav ul li").removeClass("state");
            $(this).addClass("state");
            eval("tween" + sectionIndex).start(); 
        }

        $("html, body").animate({
            scrollTop: $("section").eq(sectionIndex).offset().top - 130
        }, 750);
    });

    $(window).scroll(function () {
        var a = $(window).height() / 2 + $(window).scrollTop();
        $("section").each(function () {
            var $this = $(this),
                b = $this.offset().top,
                c = b + $this.height();
            $this.toggleClass("active", b < a && c >= a);
        });
        var e = $(".active").index("section");
        if (e >= 0) {
            $("nav ul li").removeClass("state").eq(e).addClass("state");
        };
        var sectionIndex = $("section.active").index();
        eval("tween" + sectionIndex).start(); 
    });
});