$(document).ready(function(){

  // 메인 슬라이드

  let idxSlide = 0;



  // 지금 많이 읽고 있는 작품

  let idxMany =0;

  function slideMany(idxMany){
    $(".manyWrap").stop().animate({"marginLeft": - 1170 * (idxMany) + "px"},"slow","linear");
  };

  $("#next_2").click(function () {
    if (idxMany==0) {
        slideMany(idxMany + 1);
        idxMany++;
        $("#prev_2").removeClass("hide");
        $("#next_2").addClass("hide");
    }
  });

  $("#prev_2").click(function () {
    if (idxMany==1){
        slideMany(idxMany - 1)
        idxMany--;
        $("#next_2").removeClass("hide");
        $("#prev_2").addClass("hide");
    }
  });


  // MD's Pick

  let idxMD =0;

  function slideMD(idxMD){
    $(".MDWrap").stop().animate({"marginLeft": - 401 * (idxMD) + "px"},"slow","linear");
  };

  $("#next_3").click(function () {
    if (idxMD==0) {
        slideMD(idxMD + 1);
        idxMD++;
        $("#prev_3").removeClass("hide");
        $("#next_3").addClass("hide");
    }
  });

  $("#prev_3").click(function () {
    if (idxMD==1){
        slideMD(idxMD - 1)
        idxMD--;
        $("#next_3").removeClass("hide");
        $("#prev_3").addClass("hide");
    }
  });

  let idxBest =0;

  function slideBest(idxBest){
    $(".bestWrap").stop().animate({"marginLeft": - 1140 * (idxBest) + "px"},"slow","linear");
  };

  $("#next_4").click(function () {
    if (idxBest==0) {
        slideBest(idxBest + 1);
        idxBest++;
        $("#prev_4").removeClass("hide");
        $("#next_4").addClass("hide");
    }
  });

  $("#prev_4").click(function () {
    if (idxBest==1){
        slideBest(idxBest - 1)
        idxBest--;
        $("#next_4").removeClass("hide");
        $("#prev_4").addClass("hide");
    }
  });


  // 새로 나온 작품

  let idxNew =0;

  function slideNew(idxNew){
    $(".newWrap").stop().animate({"marginLeft": - 1140 * (idxNew) + "px"},"slow","linear");
  };

  $("#next_5").click(function () {
    if (idxNew==0) {
        slideNew(idxNew + 1);
        idxNew++;
        $("#prev_5").removeClass("hide");
        $("#next_5").addClass("hide");
    }
  });

  $("#prev_5").click(function () {
    if (idxNew==1){
        slideNew(idxNew - 1)
        idxNew--;
        $("#next_5").removeClass("hide");
        $("#prev_5").addClass("hide");
    }
  });


  // 이주의 셀렉트 인기도서 TOP 10

  let idxTop10 =0;

  function slideTop10(idxTop10){
    $(".top10Wrap").stop().animate({"marginLeft": - 760 * (idxTop10) + "px"},"slow","linear");
  };

  $("#next_6").click(function () {
    if (idxTop10==0) {
        slideTop10(idxTop10 + 1);
        idxTop10++;
        $("#prev_6").removeClass("hide");
        $("#next_6").addClass("hide");
    }
  });

  $("#prev_6").click(function () {
    if (idxTop10==1){
        slideTop10(idxTop10 - 1)
        idxTop10--;
        $("#next_6").removeClass("hide");
        $("#prev_6").addClass("hide");
    }
  });


  // 이벤트

  let idxEvent =0;

  function slideEvent(idxEvent){
    $(".eventWrap").stop().animate({"marginLeft": - 1140 * (idxEvent) + "px"},"linear");
  };

  $("#next_7").click(function () {
    if (idxEvent < 2) {
        slideEvent(idxEvent + 1);
        idxEvent++;
        $("#prev_7").removeClass("hide");
    } else if (idxEvent == 2) {
        $("#next_7").addClass("hide");
    }
  });

  $("#prev_7").click(function () {
    if (idxEvent!=0){
        slideEvent(idxEvent - 1)
        idxEvent--;
        $("#next_7").removeClass("hide");
    } else if (idxEvent == 0) {
        $("#prev_7").addClass("hide");   
    }
  });


  // 소설 책 추천

  let idxNovel =0;

  function slideNovel(idxNovel){
    $(".novelWrap").stop().animate({"marginLeft": - 1140 * (idxNovel) + "px"},"slow","linear");
  };

  $("#next_8").click(function () {
    if (idxNovel==0) {
        slideNovel(idxNovel + 1);
        idxNovel++;
        $("#prev_8").removeClass("hide");
        $("#next_8").addClass("hide");
    }
  });

  $("#prev_8").click(function () {
    if (idxNovel==1){
        slideNovel(idxNovel - 1)
        idxNovel--;
        $("#next_8").removeClass("hide");
        $("#prev_8").addClass("hide");
    }
  });


  // 심리학 책 추천

  let idxPsy =0;

  function slidePsy(idxPsy){
    $(".psyWrap").stop().animate({"marginLeft": - 1140 * (idxPsy) + "px"},"slow","linear");
  };

  $("#next_9").click(function () {
    if (idxPsy==0) {
        slidePsy(idxPsy + 1);
        idxPsy++;
        $("#prev_9").removeClass("hide");
        $("#next_9").addClass("hide");
    }
  });

  $("#prev_9").click(function () {
    if (idxPsy==1){
        slidePsy(idxPsy - 1)
        idxPsy--;
        $("#next_9").removeClass("hide");
        $("#prev_9").addClass("hide");
    }
  });


  // 과학 책 추천

  let idxSci =0;

  function slideSci(idxSci){
    $(".scienceWrap").stop().animate({"marginLeft": - 1140 * (idxSci) + "px"},"slow","linear");
  };

  $("#next_10").click(function () {
    if (idxSci==0) {
        slideSci(idxSci + 1);
        idxSci++;
        $("#prev_10").removeClass("hide");
        $("#next_10").addClass("hide");
    }
  });

  $("#prev_10").click(function () {
    if (idxSci==1){
        slideSci(idxSci - 1)
        idxSci--;
        $("#next_10").removeClass("hide");
        $("#prev_10").addClass("hide");
    }
  });


  // 추리 소설 추천

  let idxMystery =0;

  function slideMystery(idxMystery){
    $(".mysteryWrap").stop().animate({"marginLeft": - 1140 * (idxMystery) + "px"},"slow","linear");
  };

  $("#next_11").click(function () {
    if (idxMystery==0) {
        slideMystery(idxMystery + 1);
        idxMystery++;
        $("#prev_11").removeClass("hide");
        $("#next_11").addClass("hide");
    }
  });

  $("#prev_11").click(function () {
    if (idxMystery==1){
        slideMystery(idxMystery - 1)
        idxMystery--;
        $("#next_11").removeClass("hide");
        $("#prev_11").addClass("hide");
    }
  });



  // 인문학 책 추천

  let idxHuman =0;

  function slideHuman(idxHuman){
    $(".humanWrap").stop().animate({"marginLeft": - 1140 * (idxHuman) + "px"},"slow","linear");
  };

  $("#next_12").click(function () {
    if (idxHuman==0) {
        slideHuman(idxHuman + 1);
        idxHuman++;
        $("#prev_12").removeClass("hide");
        $("#next_12").addClass("hide");
    }
  });

  $("#prev_12").click(function () {
    if (idxHuman==1){
        slideHuman(idxHuman - 1)
        idxHuman--;
        $("#next_12").removeClass("hide");
        $("#prev_12").addClass("hide");
    }
  });

});