$(document).ready(function() {
    $(".menu").click(function() {
        if ($(".menu--container").hasClass("state")) {
            $(".menu--container").removeClass("state");
            $(".overlay").hide();
        } else {
            $(".menu--container").addClass("state");
            $(".overlay").show();
        };
    });

    $(".menu--container").click(function() {
        if ($(".menu--container").hasClass("state")) {
            $(".menu--container").removeClass("state");
            $(".overlay").hide();
        };
    });

    $(".overlay").click(function() {
        $(".menu--container").removeClass("state");
        $(".overlay").hide();
    });
});