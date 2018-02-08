
w3.includeHTML();
$(function () {
    $("#sidenav").sideNav();
    $("#about").hide();

 
    $("#about-item").click(function () {
        $("#home").hide();
        $("#about").show();
    });
    $("#home-item").click(function () {
        $("#about").hide();
        $("#home").show();
    });

});