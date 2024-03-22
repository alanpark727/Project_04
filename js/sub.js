$(document).ready(function(){


    // 텍스트 Mount

    $.get("../sub_txt/book_detail.txt", function (data) {
        $(".book_info .book_detail").html(data);
    })

    $.get("../sub_txt/intro_text.txt", function (data) {
        $(".intro_content .intro_text").html(data);
    })

    $.get("../sub_txt/write_text.txt", function (data) {
        $(".pub_write .write_text").html(data);
    })

    $.get("../sub_txt/higashino.txt", function (data) {
        $("#higashino").html(data);
    })

    $.get("../sub_txt/goeun.txt", function (data) {
        $("#goeun").html(data);
    })

    $.get("../sub_txt/author_text.txt", function (data) {
        $(".author_intro .author_text").html(data);
    })

    $.get("../sub_txt/chapter_text.txt", function (data) {
        $(".book_chapter .chapter_text").html(data);
    })

});