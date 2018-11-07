$(document).ready(function() {

    var state = 1;

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
        reverseFirstPath: false,
        morphPrecision: 1,
        morphIndex: 150
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

    var tween4 = KUTE.fromTo('#s-1', {
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

    var tween5 = KUTE.fromTo('#s-1', {
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



    document.onclick = function () {
        // if (state == 1) {
        //     $("#s-1").css({
        //         "fill": "#7048E8"
        //     });
        //     setTimeout(function () {
        //         $(".content").addClass("hide");
        //         $(".content__ml-learning-initiative").removeClass("hide");
        //         $(".headline--container h3").text("ML Learning Initiative");
        //     }, 500);
        //     !tween1.playing && tween1.start();
            
        // } else if (state == 2) {
        //     $("#s-1").css({
        //         "fill": '#20C997'
        //     });
        //     setTimeout(function () {
        //         $(".content").addClass("hide");
        //         $(".content__ag").removeClass("hide");
        //         $(".headline--container h3").text("Open Agriculture Initiative (OpenAg)");
        //     }, 500);
        //     !tween2.playing && tween2.start();
        // } else if (state == 3) {
        //     $("#s-1").css({
        //         "fill": '#4263EB'
        //     });
        //     setTimeout(function () {
        //         $(".content").addClass("hide");
        //         $(".content__ocean-initiative").removeClass("hide");
        //         $(".headline--container h3").text("Open Ocean");
        //     }, 500);
        //     !tween3.playing && tween3.start();
        // } else if (state == 4) {
        //     $("#s-1").css({
        //         "fill": '#FAB005'
        //     });
        //     setTimeout(function () {
        //         $(".content").addClass("hide");
        //         $(".content__space-exploration-initiative").removeClass("hide");
        //         $(".headline--container h3").text("Space Exploration Initiative");
        //     }, 500);
        //     !tween4.playing && tween4.start();
        // } else if (state == 5) {
        //     $("#s-1").css({
        //         "fill": '#F03E3E'
        //     });
        //     setTimeout(function () {
        //         $(".content").addClass("hide");
        //         $(".content__overview").removeClass("hide");
        //         $(".headline--container h3").text("Overview");
        //     }, 500);
        //     state = 0;
        //     !tween5.playing && tween5.start(); 
        // }
        // state += 1;
    }

    $(".steam").mouseover(function(e) {
        
        $(".footnote").text("https://en.wikipedia.org/wiki/STEAM_fields");
        e.preventDefault();
        
    });

    $(".overview-image").mouseover(function (e) {
        
        $(".overview-image--holder").animate({
            "opacity": 1
        }, 500);
        e.preventDefault();
    });

    $(".overview-image").mouseleave(function (e) {
        
        $(".overview-image--holder").animate({
            "opacity": 0
        }, 500);
        e.preventDefault();
    });

    $(".content__ml-learning-initiative span").mouseover(function (e) {
        
        $(".footnote").text("http://learn.media.mit.edu/");
        e.preventDefault();
       
    });

    $(".content__ag span").mouseover(function (e) {
        
        $(".footnote").text("https://www.media.mit.edu/groups/open-agriculture-openag/overview/");
        e.preventDefault();
    });

    $(".ocean-initiative").mouseover(function (e) {
        
        $(".footnote").text("https://www.media.mit.edu/groups/open-ocean/overview/");
        e.preventDefault();
    });

    $(".ocean-image").mouseover(function (e) {
        
        $(".ocean-image--holder").animate({
            "opacity": 1
        }, 500);
        e.preventDefault();
        
    });

    $(".ocean-image").mouseleave(function (e) {
        
        $(".ocean-image--holder").animate({
            "opacity": 0
        }, 500);
        e.preventDefault();
    });

    $(".content__space-exploration-initiative span").mouseover(function (e) {
        
        $(".footnote").text("https://www.media.mit.edu/groups/space-exploration/overview/");
        e.preventDefault();
    });

    $(".content span").mouseleave(function (e) {
        
        $(".footnote").text("");
        e.preventDefault();
        
    });

    $(".menu").click(function () {
        if ($(this).hasClass("state")) {
            $(this).removeClass("state").text("Menu");
            $("main").removeClass("state");
        } else {
            $(this).addClass("state").text("Close");
            $("main").addClass("state");
        };
    });

    $(".left nav ul li").click(function () {
        $(".left nav ul li").removeClass("state");
        $(this).addClass("state");

        // state = $(this).index() + 1;

        // alert(state);

        if (state == 1) {
            $("#s-1").css({
                "fill": "#7048E8"
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ml-learning-initiative").removeClass("hide");
                $(".headline--container h3").text("ML Learning Initiative");
            }, 1000);
            !tween1.playing && tween1.start();

        } else if (state == 2) {
            $("#s-1").css({
                "fill": '#20C997'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ag").removeClass("hide");
                $(".headline--container h3").text("Open Agriculture Initiative (OpenAg)");
            }, 1000);
            !tween2.playing && tween2.start();
        } else if (state == 3) {
            $("#s-1").css({
                "fill": '#4263EB'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__ocean-initiative").removeClass("hide");
                $(".headline--container h3").text("Open Ocean");
            }, 1000);
            !tween3.playing && tween3.start();
        } else if (state == 4) {
            $("#s-1").css({
                "fill": '#FAB005'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__space-exploration-initiative").removeClass("hide");
                $(".headline--container h3").text("Space Exploration Initiative");
            }, 1000);
            !tween4.playing && tween4.start();
        } else if (state == 5) {
            $("#s-1").css({
                "fill": '#F03E3E'
            });
            setTimeout(function () {
                $(".content").addClass("hide");
                $(".content__overview").removeClass("hide");
                $(".headline--container h3").text("Overview");
            }, 1000);
            state = 0;
            !tween5.playing && tween5.start();
        }
        state += 1;
    });

});

$(window).scroll(function() {

});

$(document).ready(function () {

});

window.sr = ScrollReveal({
    delay: 0,
    distance: '60px',
    easing: 'cubic-bezier(.19,1,.22,1)',
    rotate: {
        z: 0
    },
    scale: 1,
    duration: 2000,
    viewFactor: 0.4
});
sr.reveal('.img');
sr.reveal('.show');
sr.reveal('.reveal', 30);
sr.reveal('.award', 50);
sr.reveal('.client-logo', 50);



var body = document.body,
    timer;

window.addEventListener('scroll', function () {
    clearTimeout(timer);
    if (!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
    }

    timer = setTimeout(function () {
        body.classList.remove('disable-hover')
    }, 500);
}, false);

$('.message a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});


$(document).ready(function () {
    $('html').animate({
        scrollTop: 0
    }, 1);
    $('body').animate({
        scrollTop: 0
    }, 1);
});