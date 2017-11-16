$(document).ready(function(){

  $(".navigation").on("click", function(){

    $(".navigation").toggleClass("active")
    // 창을 열었다 닫았다 하는 기능 toggleClass대신 addClass를 하면 한 번 열리고만 만다.

  });

    $(".to01").on("click", function(){
      // console.log("clickevent one"); //콘솔 01
      // alert("clickevent one"); //콘솔 02
      $("html, body").animate({scrollTop: $("#i01").position().top}, 1500);
    });
    $(".to02").on("click", function(){
      $("html, body").animate({scrollTop: $("#i02").position().top}, 1500);
    });
    $(".to03").on("click", function(){
      $("html, body").animate({scrollTop: $("#i03").position().top}, 1500);
    });
    $(".to04").on("click", function(){
      $("html, body").animate({scrollTop: $("#i04").position().top}, 1500);
    });
    $(".to05").on("click", function(){
      $("html, body").animate({scrollTop: $("#i05").position().top}, 1500);
    });

});
