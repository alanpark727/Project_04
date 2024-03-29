$(document).ready(function(){

    // 텍스트 Mount

    $.get("./pre_txt/ridi_c2.txt", function (data) {
        $("#ridi_c2>.pd_lr").html(data);
    });

    $.get("./pre_txt/ridi_c6_1.txt", function (data) {
        $("#ridi_c6>.c6_1").html(data);
    });

    $.get("./pre_txt/ridi_c6_2.txt", function (data) {
        $("#ridi_c6>.c6_2").html(data);
    });

    $.get("./pre_txt/ridi_c6_3.txt", function (data) {
        $("#ridi_c6>.c6_3").html(data);
    });

    $.get("./pre_txt/ridi_c6_4.txt", function (data) {
        $("#ridi_c6>.c6_4").html(data);
    });

    $.get("./pre_txt/ridi_c6_5.txt", function (data) {
        $("#ridi_c6>.c6_5").html(data);
    });

    $.get("./pre_txt/ridi_c6_6.txt", function (data) {
        $("#ridi_c6>.c6_6").html(data);
    });

    $.get("./pre_txt/ridi_c6_7.txt", function (data) {
        $("#ridi_c6>.c6_7").html(data);
    });

    $.get("./pre_txt/ridi_c6_8.txt", function (data) {
        $("#ridi_c6>.c6_8").html(data);
    });

    $.get("./pre_txt/ridi_c6_9.txt", function (data) {
        $("#ridi_c6>.c6_9").html(data);
    });

    $.get("./pre_txt/ridi_c6_10.txt", function (data) {
        $("#ridi_c6>.c6_10").html(data);
    });

    $.get("./pre_txt/ridi_c6_11.txt", function (data) {
        $("#ridi_c6>.c6_11").html(data);
    });

    $.get("./pre_txt/ridi_c6_12.txt", function (data) {
        $("#ridi_c6>.c6_12").html(data);
    });

    $.get("./pre_txt/ridi_c7_1.txt", function (data) {
        $("#ridi_c7>.c7_1").html(data);
    });

    $.get("./pre_txt/ridi_c7_2.txt", function (data) {
        $("#ridi_c7>.c7_2").html(data);
    });

    $.get("./pre_txt/ridi_c7_3.txt", function (data) {
        $("#ridi_c7>.c7_3").html(data);
    });

    $.get("./pre_txt/ridi_c7_4.txt", function (data) {
        $("#ridi_c7>.c7_4").html(data);
    });

    $.get("./pre_txt/ridi_c7_5.txt", function (data) {
        $("#ridi_c7>.c7_5").html(data);
    });

    $.get("./pre_txt/ridi_c7_6.txt", function (data) {
        $("#ridi_c7>.c7_6").html(data);
    });

    $.get("./pre_txt/ridi_c7_7.txt", function (data) {
        $("#ridi_c7>.c7_7").html(data);
    });

    $.get("./pre_txt/ridi_c7_8.txt", function (data) {
        $("#ridi_c7>.c7_8").html(data);
    });

    $.get("./pre_txt/ridi_c8_1.txt", function (data) {
        $("#ridi_c8>.c8_1").html(data);
    });

    $.get("./pre_txt/ridi_c8_2.txt", function (data) {
        $("#ridi_c8>.c8_2").html(data);
    });

    $.get("./pre_txt/ridi_c8_3.txt", function (data) {
        $("#ridi_c8>.c8_3").html(data);
    });

    $.get("./pre_txt/ridi_c8_4.txt", function (data) {
        $("#ridi_c8>.c8_4").html(data);
    });

    $.get("./pre_txt/ridi_c8_5.txt", function (data) {
        $("#ridi_c8>.c8_5").html(data);
    });

    $.get("./pre_txt/ridi_c8_6.txt", function (data) {
        $("#ridi_c8>.c8_6").html(data);
    });

    $.get("./pre_txt/ridi_c8_7.txt", function (data) {
        $("#ridi_c8>.c8_7").html(data);
    });


    // 슬라이드 

    function next(){
        $('#contents li>div').eq(0).hide();
    };

    $('next').click(function(){
        next();
    });
});