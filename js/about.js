function loaded() {
    $(".load--overlay").animate(
        {
            opacity: 0
        },
        100,
        function() {
            $(this).remove();
        }
    );
}

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
    var svg = document.getElementById("svg");
    var s = Snap(svg);
    var Shape1 = Snap.select("#shape1");
    var Shape2 = Snap.select("#shape2");
    var Shape3 = Snap.select("#shape3");
    var Shape4 = Snap.select("#shape4");
    var Shape1Points = Shape1.node.getAttribute("d");
    var Shape2Points = Shape2.node.getAttribute("d");
    var Shape3Points = Shape3.node.getAttribute("d");
    var Shape4Points = Shape4.node.getAttribute("d");
    var ToShape1 = function() { Shape1.animate({ d: Shape1Points }, 1000, mina.backout); }
    var ToShape2 = function() { Shape1.animate({ d: Shape2Points }, 1000, mina.backout); }
    var ToShape3 = function() { Shape1.animate({ d: Shape3Points }, 1000, mina.backout); }
    var ToShape4 = function() { Shape1.animate({ d: Shape4Points }, 1000, mina.backout); }

    $("nav ul li").click(function() {
        sectionIndex = $(this).index();

        if (!$(this).hasClass("state")) {
            $("nav ul li").removeClass("state");
            $(this).addClass("state");
        }

        $("html, body").animate({
                scrollTop: $("section").eq(sectionIndex).offset().top - 130
            }, 750
        );
    });

    $(document).ready(function() {
        $(".left--container").each(function() {
            $(this)
                .find("li")
                .eq(0)
                .addClass("state");
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
        var ToShape = "ToShape" + parseInt(e);
        if (e >= 0) {
            $("nav ul li")
                .removeClass("state")
                .eq(e)
                .addClass("state");
        }
        if (e <= 0) {
            ToShape1();
        } else {
            eval("ToShape" + parseInt(e))();
        }
    });
});
