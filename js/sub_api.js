$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: '블랙 쇼맨과 운명의 바퀴', size: 1 },
    async: false,
    headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
  })
    .done(function(main) {
        console.log(main);
        $('.api_authors').append(main.documents[0].authors[0]);
        $('.api_translators').append(main.documents[0].translators[0]);
        $('.api_publisher').append(main.documents[0].publisher+'(RHK)');
    });
          

  // 대표 저서(인기순)

  let search2;
  search2 = ['블랙 쇼맨과 운명의 바퀴','용의자 x의 헌신','블랙 쇼맨과 환상의 여자','블랙 쇼맨과 이름없는 마을','백야행'];

  for (let j = 0; j < search2.length; j++) {
      $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: search2[j], size: 1},
          async: false,
          headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
      })
          .done(function(many) {
              let str2 = many.documents[0].title;
              // console.log(many);
              
              $(".manyBook").eq(j).find(".manyCover").css("background-image","url(" + many.documents[0].thumbnail + ")");
              $(".manyBook").eq(j).find(".manyTitle").append(str2);
              $(".manyBook").eq(j).find(".manyAuthor").append(many.documents[0].authors);
              $(".manyBook").eq(j).find(".manyIdx").append(j+1);
          });
          
  };

  // 대표 저서(최신순)

  let search3;
  search3 = ['블랙 쇼맨과 운명의 바퀴','사소한 변화','아들 도키오','옛날에 내가 죽은 집','백야행'];

  for (let j = 0; j < search3.length; j++) {
      $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: search3[j], size: 1},
          async: false,
          headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
      })
          .done(function(many) {
              let str2 = many.documents[0].title;
              // console.log(many);
              
              $(".manyBook").eq(j).find(".manyCover").css("background-image","url(" + many.documents[0].thumbnail + ")");
              $(".manyBook").eq(j).find(".manyTitle").append(str2);
              $(".manyBook").eq(j).find(".manyAuthor").append(many.documents[0].authors);
              $(".manyBook").eq(j).find(".manyIdx").append(j+1);
          });
          
  };

  // 대표저서(평점순)

  let search4;
  search4 = ['백야행','용의자 x의 헌신','나미야 잡화점의 기적','신참자','기도의 막이 내릴 때'];

  for (let j = 0; j < search4.length; j++) {
      $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: search4[j], size: 1 },
          async: false,
          headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
      })
          .done(function(best) {
              // console.log(best);
              $(".bestBook").eq(j).find(".bestCover").css("background-image","url(" + best.documents[0].thumbnail + ")");
              $(".bestBook").eq(j).find(".bestTitle").append(best.documents[0].title);
              $(".bestBook").eq(j).find(".bestAuthor").append(best.documents[0].authors);
              $(".bestBook").eq(j).find(".bestIdx").append(j+1);
          });
          
  };

  
    // 대표저서(인기순)

    let search5;
    search5 = ['덧없는 양들의 축연','블랙 쇼맨과 운명의 바퀴','블랙 쇼맨과 환상의 여자','블랙 쇼맨과 이름없는 마을','추상오단장'];

    for (let j = 0; j < search5.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search5[j], size: 1 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(newB) {
                // console.log(newB);
                $(".newBook").eq(j).find(".newCover").css("background-image","url(" + newB.documents[0].thumbnail + ")");
                $(".newBook").eq(j).find(".newTitle").append(newB.documents[0].title);
                $(".newBook").eq(j).find(".newAuthor").append(newB.documents[0].authors);
            });
            
    };

    // 대표저서(최신순)

    let search6;
    search6 = ['덧없는 양들의 축연','심장의 아이','블랙 쇼맨과 운명의 바퀴','옛날에 내가 죽은 집','이 책을 훔치는 자는'];

    for (let j = 0; j < search6.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search6[j], size: 1 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(awards) {
                // console.log(awards);
                $(".awardsBook").eq(j).find(".awardsCover").css("background-image","url(" + awards.documents[0].thumbnail + ")");
                $(".awardsBook").eq(j).find(".awardsTitle").append(awards.documents[0].title);
                $(".awardsBook").eq(j).find(".awardsAuthor").append(awards.documents[0].authors);
            });
            
    };

    // 대표저서(평점순)
    
    let search7;
    search7 = ['비블리아 고서당 사건수첩 1권','처음부터 내내 좋아했어','문학소녀','64(육사)','비블리아 고서당 사건수첩 2권'];

    for (let j = 0; j < search7.length; j++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search7[j], size: 1 },
            async: false,
            headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
        })
            .done(function(top10) {
                // console.log(top10);
                $(".top10Book").eq(j).find(".top10Cover").css("background-image","url(" + top10.documents[0].thumbnail + ")");
                $(".top10Book").eq(j).find(".top10Title").append(top10.documents[0].title);
                $(".top10Book").eq(j).find(".top10Author").append(top10.documents[0].authors);
            });
            
    };

  // 이 책과 함께 구매한 책

        let search8;
        search8 = ['리얼 페이스','표정없는 검사의 분투','어디선가 베토벤','일곱색의 독','안녕드뷔시전주곡','언제까지나쇼팽','마트료시카의 밤','표정없는검사','사라진왕국의 성','수상한 목욕탕'];
    
        for (let j = 0; j < search8.length; j++) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: search8[j], size: 1 },
                async: false,
                headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
            })
                .done(function(buy) {
                    console.log(buy);
                    $(".buy_cover").eq(j).css("background-image","url(" + buy.documents[0].thumbnail + ")");
                    $(".buy_cover").eq(j).find('h6').append(buy.documents[0].title);
                    $(".buy_cover").eq(j).find('p').append(buy.documents[0].authors);
                });
                
        };
    
        // 이 책과 함께 둘러본 책
    
        let search9;
        search9 = ['7인1역','마트료시카의 밤','속임수의 섬','공정의 파수꾼','구름에 달 가리운 방금 전까지','달의 연인','투명인간은 밀실에 숨는다','그리움을 요리하는 심야식당','거짓과 정전','손을 잡은 채, 버찌관에서'];
    
        for (let j = 0; j < search9.length; j++) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: search9[j], size: 5 },
                async: false,
                headers: { Authorization: "KakaoAK 7bc74fa2888df6bd2314530f05eec1ec"}
            })
                .done(function(search) {
                    console.log(search);
                    $(".search_cover").eq(j).css("background-image","url(" + search.documents[0].thumbnail + ")");
                    $(".search_cover").eq(j).find('h6').append(search.documents[0].title);
                    $(".search_cover").eq(j).find('p').append(search.documents[0].authors);
                });
                
        };

});