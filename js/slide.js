$(document).ready(function(){

  $('.slideItem').not(':first').css({'width':'46px'});
  $('.slideTxt').eq(0).show();

  function nextSlide() {
    $('.slideItem:first').stop().animate({'width':0},'slow','linear');
    $('.slideItem').eq(1).stop().animate({'width':1020},'slow','linear',function(){
      $('.slideItem:first').appendTo('.slideWrap');
      $('.slideItem:last').css({'width':'46px'});
    });
    $('.slideTxt').eq(0).fadeOut('slow');
    $('.slideTxt').eq(1).fadeIn('slow');
  }

  function prevSlide() {
    $('.slideItem:last').prependTo('.slideWrap').css({'width':0});
    $('.slideItem:first').stop().animate({'width':1020}, 'slow','linear');
    $('.slideItem').eq(1).stop().animate({'width':46},'slow','linear');
    $('.slideTxt').eq(1).fadeOut('slow');
    $('.slideTxt').eq(0).fadeIn('slow');
  }

  let setTime = setInterval(nextSlide, 5000);

  $('.mainSlide').hover(function(){
    clearInterval(setTime);
  }, function(){
    setTimeout(setTime = setInterval(nextSlide, 5000), 3000);
  });

  $("#next_1").on("click", function(){
    nextSlide();
  });
  $("#prev_1").on("click", function(){
    prevSlide();
  });

});
