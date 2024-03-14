$(document).ready(function(){

    // 오늘, 리디의 발견

    let search1;
    search1 = ["블랙쇼맨", "오래된 방랑하는 집", "왜 내 사랑은 이렇게 힘들까", "홍보의 신", "생각중독", "코끼리는 생각하지 마"];

    for (let i = 0; i < search1.length; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search1[i], size: 5 },
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
    search2 = ["해리포터", "듄 1권", "세이노의 가르침", "프로젝트 헤일메리", "아주 작은 습관의 힘", "데일 카네기 인간관계론", "부의 추월차선", "타이탄의 도구들", "피를 마시는 1", "살인자의 쇼핑몰", "트렌드 코리아 2024", "더 마인드", "레버리지", "나다움으로 시작하는", "애거서 크리스티 전집", "나는 메트로폴리탄", "바다가 들리는 편의점", "역행자"];

    for (let j = 0; j < search2.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search2[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(many) {
                console.log(many);
                $(".manyBook").eq(j).find(".manyCover").css("background-image","url(" + many.documents[0].thumbnail + ")");
                $(".manyBook").eq(j).find(".manyTitle").append(many.documents[0].title);
                $(".manyBook").eq(j).find(".manyAuthor").append(many.documents[0].authors);
            });
            
    };

    // MD's Pick

    let search3;
    search3 = ["국회의원 이방원", "기억을 먹는 아이", "조각난 마음을 치유합니다", "구름에 달 가리운 방금 전까지 인간이었다"];

    for (let j = 0; j < search3.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search3[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(MD) {
                console.log(MD);
                $(".MDBox").eq(j).find(".MDBook").css("background-image","url(" + MD.documents[0].thumbnail + ")");
            });
            
    };

    // 베스트

    let search4;
    search4 = ["듄 1권", "돈의 심리학", "가여운 것들", "해리포터", "총,균,쇠", "직장 상사 악령 퇴치부", "다윈 영의 악의 기원", "1Q84", "블랙 쇼맨과 운명의 바퀴", "홍학의 자리", "쇼펜하우어 인생론 에세이", "나는 메트로폴리탄", "프로젝트 헤일메리", "구의 증명", "속임수의 섬", "퇴마록 국내편", "생각 중독", "컨셉 수업"];

    for (let j = 0; j < search4.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search4[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(best) {
                console.log(best);
                $(".bestBook").eq(j).find(".bestCover").css("background-image","url(" + best.documents[0].thumbnail + ")");
                $(".bestBook").eq(j).find(".bestTitle").append(best.documents[0].title);
                $(".bestBook").eq(j).find(".bestAuthor").append(best.documents[0].authors);
            });
            
    };

    // 새로 나온 작품

    let search5;
    search5 = ["오십에 읽는 손자병법", "헤르만 헤세의 나로 존재하는 법", "망가지기 쉬운 영혼들", "죽음은 존재하지 않는다", "샤이닝", "미세 좌절의 시대", "마음 해방", "천 척의 배", "나는 행복한 푸바오 할부지입니다", "블랙 쇼맨과 운명의 바퀴", "지금도 책에서만 얻을 수 있는 것", "화폐 권력과 민주주의"];

    for (let j = 0; j < search5.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search5[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(newB) {
                console.log(newB);
                $(".newBook").eq(j).find(".newCover").css("background-image","url(" + newB.documents[0].thumbnail + ")");
                $(".newBook").eq(j).find(".newTitle").append(newB.documents[0].title);
                $(".newBook").eq(j).find(".newAuthor").append(newB.documents[0].authors);
            });
            
    };

    // 아카데미 수상작&후보작 원작

    let search6;
    search6 = ["아메리칸 프로메테우스", "오펜하이머 각본집", "플라워 문", "가여운 것들", "해리포터", "파워 오브 도그"];

    for (let j = 0; j < search6.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search6[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(awards) {
                console.log(awards);
                $(".awardsBook").eq(j).find(".awardsCover").css("background-image","url(" + awards.documents[0].thumbnail + ")");
                $(".awardsBook").eq(j).find(".awardsTitle").append(awards.documents[0].title);
                $(".awardsBook").eq(j).find(".awardsAuthor").append(awards.documents[0].authors);
            });
            
    };

    // 이주의 셀렉트 인기도서 TOP 10
    
    let search7;
    search7 = ["부의 추월차선", "메리골드 마음 세탁소", "과학이 필요한 시간", "세상의 마지막 기차역", "언스크립티드", "내가 행복한 이유", "그 문장을 읽고 또 읽었다", "나는 메트로폴리탄 미술관", "부의 추월차선 위대한 탈출", "파우스트" ];

    for (let j = 0; j < search7.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search7[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(top10) {
                console.log(top10);
                $(".top10Book").eq(j).find(".top10Cover").css("background-image","url(" + top10.documents[0].thumbnail + ")");
                $(".top10Book").eq(j).find(".top10Title").append(top10.documents[0].title);
                $(".top10Book").eq(j).find(".top10Author").append(top10.documents[0].authors);
            });
            
    };

    // 이벤트

    let search8;
    search8 = ["샤이닝", "블랙 쇼맨과 운명의 바퀴", "총균쇠", "해리포터", "가여운 것들", "문신", "직장 상사 악령 퇴치부", "구름에 달 가리운 방금 전까지 인간이었다", "마트료시카의 밤"];

    for (let j = 0; j < search8.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search8[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(event) {
                console.log(event);
                $(".eventBook").eq(j).find(".eventCover").css("background-image","url(" + event.documents[0].thumbnail + ")");
            });
            
    };

    // 소설책 추천

    let search9;
    search9 = ["직장 상사 악령 퇴치부", "사라진 것들", "오류가 발생했습니다", "살인자의 쇼핑몰", "홍학의 자리", "프로젝트 헤일메리", "듄 1권", "구의 증명", "해리포터", "파과", "아주 희미한 빛으로도", "도시와 그 불확실한 벽"];

    for (let j = 0; j < search9.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search9[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(novel) {
                console.log(novel);
                $(".novelBook").eq(j).find(".novelCover").css("background-image","url(" + novel.documents[0].thumbnail + ")");
                $(".novelBook").eq(j).find(".novelTitle").append(novel.documents[0].title);
                $(".novelBook").eq(j).find(".novelAuthor").append(novel.documents[0].authors);
            });
            
    };

    // 심리학 책 추천

    let search10;
    search10 = ["데일카네기 인간관계론", "마음 지구력", "나는 왜 사랑할수록 불안해질까", "나는 왜 혼자가 편할까", "자존감 수업", "오은영의 화해", "나는 왜 눈치를 보는 걸까", "상처받지 않는 영혼", "사랑 수업", "이유 없는 편안함", "신경 끄기의 기술", "회복탄력성"];

    for (let j = 0; j < search10.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search10[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(psy) {
                console.log(psy);
                $(".psyBook").eq(j).find(".psyCover").css("background-image","url(" + psy.documents[0].thumbnail + ")");
                $(".psyBook").eq(j).find(".psyTitle").append(psy.documents[0].title);
                $(".psyBook").eq(j).find(".psyAuthor").append(psy.documents[0].authors);
            });
            
    };

    // 과학 책 추천

    let search11;
    search11 = ["물고기는 존재하지 않는다", "코스모스", "사이코패스 뇌과학자", "전쟁에서 살아남기", "만화로 배우는 멸종과 진화", "양자컴퓨터의 미래", "우울할 땐 뇌 과학", "이기적 유전자", "과학을 보다", "판타 레이", "운동의 뇌과학", "천문학자는 별을 보지 않는다"];

    for (let j = 0; j < search11.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search11[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(science) {
                console.log(science);
                $(".scienceBook").eq(j).find(".scienceCover").css("background-image","url(" + science.documents[0].thumbnail + ")");
                $(".scienceBook").eq(j).find(".scienceTitle").append(science.documents[0].title);
                $(".scienceBook").eq(j).find(".scienceAuthor").append(science.documents[0].authors);
            });
            
    };

    // 추리 소설 추천

    let search12;
    search12 = ["용의자X의 헌신", "명탐정의 창자", "살육에 이르는 병", "트러스트", "칵테일, 러브, 좀비", "양들의 침묵", "나미야 잡화점의 기적", "붉은 박물관", "이상한 그림", "살인자의 기억법", "셜록홈즈 진홍색", "잘린 머리처럼 불길한 것"];

    for (let j = 0; j < search12.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search12[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(mystery) {
                console.log(mystery);
                $(".mysteryBook").eq(j).find(".mysteryCover").css("background-image","url(" + mystery.documents[0].thumbnail + ")");
                $(".mysteryBook").eq(j).find(".mysteryTitle").append(mystery.documents[0].title);
                $(".mysteryBook").eq(j).find(".mysteryAuthor").append(mystery.documents[0].authors);
            });
            
    };

    // 인문학 책 추천

    let search13;
    search13 = ["도둑맞은 집중력", "세상은 이야기로 만들어졌다", "마흔에 읽는 쇼펜하우어", "도파미네이션", "사피엔스", "빅터 프랭클의 죽음의 수용소에서", "사랑의 기술", "지적 대화를 위한 넓고 얕은 지식", "정의란 무엇인가", "제정신이라는 착각"];

    for (let j = 0; j < search13.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search13[j], size: 5 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(human) {
                console.log(human);
                $(".humanBook").eq(j).find(".humanCover").css("background-image","url(" + human.documents[0].thumbnail + ")");
                $(".humanBook").eq(j).find(".humanTitle").append(human.documents[0].title);
                $(".humanBook").eq(j).find(".humanAuthor").append(human.documents[0].authors);
            });
            
    };


})