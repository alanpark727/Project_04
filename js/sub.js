$(document).ready(function(){


    // 텍스트 Mount

    $.get("../sub_txt/book_detail.txt", function (data) {
        $(".book_info .book_detail").html(data);
    });

    $.get("../sub_txt/intro_text.txt", function (data) {
        $(".intro_content .intro_text").html(data);
    });

    $.get("../sub_txt/write_text.txt", function (data) {
        $(".pub_write .write_text").html(data);
    });

    $.get("../sub_txt/higashino.txt", function (data) {
        $("#higashino").html(data);
    });

    $.get("../sub_txt/goeun.txt", function (data) {
        $("#goeun").html(data);
    });

    $.get("../sub_txt/author_text.txt", function (data) {
        $(".author_intro .author_text").html(data);
    });

    $.get("../sub_txt/chapter_text.txt", function (data) {
        $(".book_chapter .chapter_text").html(data);
    });

    $.get("../sub_txt/bot_qna.txt", function (data) {
        $(".bot_qna .qna_contents").html(data);
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

});