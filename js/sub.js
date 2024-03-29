$(document).ready(function(){


    // 텍스트 Mount

    $.get("./sub_txt/book_detail.txt", function (data) {
        $(".book_info .book_detail").html(data);
    });

    $.get("./sub_txt/intro_text.txt", function (data) {
        $(".intro_content .intro_text").html(data);
    });

    $.get("./sub_txt/write_text.txt", function (data) {
        $(".pub_write .write_text").html(data);
    });

    $.get("./sub_txt/higashino.txt", function (data) {
        $("#higashino").html(data);
    });

    $.get("./sub_txt/goeun.txt", function (data) {
        $("#goeun").html(data);
    });

    $.get("./sub_txt/author_text.txt", function (data) {
        $(".author_intro .author_text").html(data);
    });

    $.get("./sub_txt/chapter_text.txt", function (data) {
        $(".book_chapter .chapter_text").html(data);
    });

    $.get("./sub_txt/bot_qna.txt", function (data) {
        $(".bot_qna .qna_contents").html(data);
    });


    // 작품 소개 펼치기

    $('.intro_btn').click(function(){
        $('.intro_para').removeClass('folded');
        $('.intro_btn').hide();
        $('.intro_fold').show();
    });
    $('.intro_fold').click(function(){
        $('.intro_para').addClass('folded');
        $('.intro_btn').show();
        $('.intro_fold').hide();
    });

    // 출판사 서평 펼치기

    $('.pub_btn').click(function(){
        $('.write_text').removeClass('folded');
        $('.pub_btn').hide();
        $('.pub_fold').show();
    });
    $('.pub_fold').click(function(){
        $('.write_text').addClass('folded');
        $('.pub_btn').show();
        $('.pub_fold').hide();
    });

    // 저자 프로필 전환

    $('.author_profile>.profile_nav li:first').click(function(){
        $('.profile_name:first').addClass('active');
        $('.profile_name:last').removeClass('active');
        $('.author_content').show();
        $('.translator_content').hide();
    });
    $('.author_profile>.profile_nav li:last').click(function(){
        $('.profile_name:last').addClass('active');
        $('.profile_name:first').removeClass('active');
        $('.translator_content').show();
        $('.author_content').hide();
    });

    $('.featured_title ul li').click(function(){
        $(this).find('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');
    });
    $('.fea_pop').click(function(){
        $('.popular').show();
        $('.liked, .latest').hide();
    });
    $('.fea_late').click(function(){
        $('.latest').show();
        $('.liked, .popular').hide();
    });
    $('.fea_like').click(function(){
        $('.liked').show();
        $('.latest, .popular').hide();
    });


    // 저자 소개 서평 펼치기

    $('.aut_btn').click(function(){
        $('.author_text').removeClass('folded');
        $('.aut_btn').hide();
        $('.aut_fold').show();
    });
    $('.aut_fold').click(function(){
        $('.author_text').addClass('folded');
        $('.aut_btn').show();
        $('.aut_fold').hide();
    });


    // 리뷰 별 파트

    $('.star_area>label').click(function(){
        alert('로그인 상태에서 가능합니다. 로그인 페이지로 이동합니다.');
    })
    $('.write_btn > button').click(function(){
        $('.write_review_alert').slideDown();
    });

    $('.write_alert_close').click(function(){
        $('.write_review_alert').slideUp();
    })

    let i = $('.star_area>label').index();
    $('.star_area>label').hover(function(){
        let j = $(this).index();
        $(this).eq(i).addClass('active');
        $(this).eq(i).siblings().removeClass('active');
        console.log(j)
        $('.star_tip').eq(j/2).addClass('active');
        $('.star_tip').eq(j/2).siblings().removeClass('active');

    }, function(){
        $(this).removeClass('active');
        $('.star_tip').removeClass('active');
        $('.tip_title').addClass('active');
    })

    // 리뷰 하단 파트

    $('.tab_1>li:first').click(function(){
        $('.tab_1 a:first').addClass('active');
        $('.tab_1 a:last').removeClass('active');
        $('.tab_2:first').addClass('active');
        $('.tab_2:last').removeClass('active');
    });
    $('.tab_1>li:last').click(function(){
        $('.tab_1 a:last').addClass('active');
        $('.tab_1 a:first').removeClass('active');
        $('.tab_2:last').addClass('active');
        $('.tab_2:first').removeClass('active');
    });

    $('.tab_2 li').click(function(){
        $(this).children('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');
    });

    $('.qna_btn').click(function(){
        $(this).toggleClass('active');
        $('.qna_contents').slideToggle();
    })


    // 책 팝업

    $('.book_cover').click(function(){
        $('#popup_cover').fadeIn('fast');
    });
    $('.popup_box>.close_btn').click(function(){
        $('#popup_cover').fadeOut('fast');
    });

    // 푸터
    $(".footUnderbar>button").click(function(){
        $(".footUnderbar>button").toggleClass('arrow');
        $('#foot_info').toggleClass('open');
      });
    
});