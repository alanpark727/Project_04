$(document).ready(function(){

  let idxMany =0;

  function slideMany(idxMany){
    $(".manyWrap").stop().animate({"marginLeft": - 1134 * (idxMany) + "px"},"slow","linear");
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
        slideMany(idxMany-1)
        idxMany--;
        $("#next_2").removeClass("hide");
        $("#prev_2").addClass("hide");
    }
  });

});