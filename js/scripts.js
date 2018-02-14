

$(function () {

    $("#menu").load("./html/nav.html",function(){
        $("#about").load("./html/about.html",function(){

        
        }); 
        $("#home").load("./html/home.html",function(){
         

        }); 
        $("#book-add").load("./html/book-add.html",function(){
            console.log("book add loaded");
          

        }); 

        $("#sidenav").sideNav();
        $("#about").hide();
        $("#book-add").hide();
     
     
        $("#about-item").click(function () {
            $("#home").hide();
            $("#about").show();
        });
        $("#home-item").click(function () {
            $("#about").hide();
            $("#home").show();
        });

        $("#add-book-item").click(function () {
            $("#home").hide();
            $("#about").hide();
            $('.side-nav').sideNav('hide');
            $("#book-add").show();
        });


    }); 






});