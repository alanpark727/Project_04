$(document).ready(function(){

    // 오늘, 리디의 발견

    let search1;
    search1 = ["블랙쇼맨", "오래된 방랑하는 집", "왜 내 사랑은 이렇게 힘들까", "홍보의 신", "생각중독", "코끼리는 생각하지 마"];

    for (let i = 0; i < search1.length; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search1[i], size: 1 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(today) {
                console.log(today);
                $(".todayBook").eq(i).find(".todayCover").css("background-image","url(" + today.documents[0].thumbnail + ")");
            });
            
    };
    $(".todayTxt").eq(0).append("히가시노 게이고<br>블랙쇼맨의 귀환");
    $(".todayTxt").eq(1).append("'듄의 창조자'<br>프랭크허버트 단편");
    $(".todayTxt").eq(2).append("나도 불안정<br>애착은 아닐까?");
    $(".todayTxt").eq(3).append("충주맨의 탄생!<br>유튜브 성장노하우");
    $(".todayTxt").eq(4).append("지나친 생각은<br>건강에 해롭습니다");
    $(".todayTxt").eq(5).append("알릴레오북스 추천<br>'프레임'의 힘");


    // 지금 많이 읽고 있는 작품

    let search2;
    search2 = ["해리포터", "듄 1권", "세이노의 가르침", "프로젝트 헤일메리", "아주 작은 습관의 힘", "데일 카네기 인간관계론", "부의 추월차선", "타이탄의 도구들", "마시는 새", "살인자의 쇼핑몰", "트렌드 코리아 2024", "더 마인드", "레버리지", "나다움으로 시작하는", "애거서 크리스티 전집", "나는 메트로폴리탄", "바다가 들리는 편의점", "역행자"];

    for (let j = 0; j < search2.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search2[j], size: 1 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(many) {
                console.log(many);
                $(".manyBook").eq(j).find(".manyCover").css("background-image","url(" + many.documents[0].thumbnail + ")");
            });
            
    };

    // let search3;
    // search3 = ["해리포터", "듄 1권", "세이노의 가르침", "프로젝트 헤일메리", "아주 작은 습관의 힘", "데일 카네기 인간관계론", "부의 추월차선", "타이탄의 도구들", "마시는 새", "살인자의 쇼핑몰", "트렌드 코리아 2024", "더 마인드", "레버리지", "나다움으로 시작하는", "애거서 크리스티 전집", "나는 메트로폴리탄", "바다가 들리는 편의점", "역행자"];

    // for (let j = 0; j < search2.length; j++) {
    //     $.ajax({
    //         method: "GET",
    //         url: "https://dapi.kakao.com/v3/search/book?target=title",
    //         data: { query: search2[j], size: 1 },
    //         async: false,
    //         headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
    //     })
    //         .done(function(many) {
    //             console.log(many);
    //             $(".manyBook").eq(j).find(".manyCover").css("background-image","url(" + many.documents[0].thumbnail + ")");
    //         });
            
    // };
    // ISBN으로 저격해서 데이터 가져오기
})