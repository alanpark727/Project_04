$(document).ready(function(){
  let currentIndex = 0;
  let slides = $(".slideItem");

  function showSlide(index) {

    slides.css('flex-grow','0').css('flex-basis','0px');

    slides.eq(index).css('flex-grow','1').css('flex-basis','0px');

    slides.eq(index).children().addClass("active");

    slides.eq(index-1).children().removeClass("active");
    
    slides.eq(index+1).children().removeClass("active");

    slides.eq(index+1).css('flex-grow','0').css('flex-basis','46px');
    slides.eq(index+2).css('flex-grow','0').css('flex-basis','46px');

    currentIndex = index;
    
    
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1) % slides.length;
    showSlide(prevIndex);
  }

  // setInterval(nextSlide, 5000);

  $("#next_1").on("click", function(){
    nextSlide();
  });
  $("#prev_1").on("click", function(){
    prevSlide();
  });

});
