$(function(){
  //헤더영역
  $(".header_bg").hide();
  $("#header .gnb").mouseenter(function(){
    $(".header_bg").show();
  });
  $("#header .gnb").mouseleave(function(){
    $(".header_bg").hide();
  });


  //헤더 미디아 메뉴
  $(".media_menu").on("click", ".hamburger", function() {
      $(this).toggleClass("on");
      $(".media_gnbwrap").toggleClass("on");
      $(".media_bg").toggle();
  });
  $(".media_bg").click(function(){
    $(this).hide();
    $(".media_menu .hamburger").removeClass("on");
    $(".media_gnbwrap").removeClass("on");
  });
  //헤더 미디아 메뉴 토글
  $("#header .media_menu .media_gnb>li>a").on('click', function(e){
    var $sub = $(this).next(".media_sub_menu");
    if ($sub.length) {
      e.preventDefault();            // 링크 이동 막기
      $(".media_sub_menu").not($sub).slideUp(200).parent().removeClass('active'); // 다른거 닫기
      $sub.slideToggle(200);         // 토글 (열기/닫기)
      $(this).parent().toggleClass('active'); // active 토글
    }
  });

  //서치
  $("#header input").click(function(){
    $(this).css({"width":"187px"});
  });

  //주요공지
  $("#impor_notice .close").click(function(){
    $("#impor_notice").hide();
  });

  //비주얼 스와이퍼
  var swiper = new Swiper(".visual", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autopla: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //항공정보 탭영역
  $(".airinfor .tabs li").eq(0).addClass("on").siblings().removeClass("on");
  $(".airinfor .tab_box li").eq(0).show().siblings().hide();
  $(".airinfor .tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $(".airinfor .tab_box li").eq(indexNum).show().siblings().hide();
  });

  //항공정보04 탭영역
  $(".airinfor .airinfor04 .box_tabs04_1>div").eq(0).addClass("on").siblings().removeClass("on");
  $(".airinfor .airinfor04 .box_tabs04_1>div").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".airinfor .airinfor04 .box_tabs04_2>div").eq(0).addClass("on").siblings().removeClass("on");
  $(".airinfor .airinfor04 .box_bottom_wrap>div").eq(1).hide();
  $(".airinfor .airinfor04 .box_tabs04_2>div").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
      $(".airinfor .airinfor04 .box_bottom_wrap>div").eq(indexNum).show().siblings().hide();
  });

  //항공정보안요소 영역
  //클릭시 나타남 지역
  $(".airinfor .area").click(function(){
    $(".composition .country").show();
  });
  $(".composition .country .close").click(function(){
    $(".composition .country").hide();
  });
  $(".composition .country .btn").click(function(){
    $(".composition .country").hide();
  });
  //클릭시 나타남 날짜
  $(".airinfor .date").click(function(){
    $(".composition .datechoose").show();
  });
  $(".composition .datechoose .close").click(function(){
    $(".composition .datechoose").hide();
  });
  //클릭시 나타남 탑승객
  $(".airinfor .passenger").click(function(){
    $(".composition .passengerchoose").show();
  });
  $(".composition .passengerchoose .close").click(function(){
    $(".composition .passengerchoose").hide();
  });
  
  //지역과 도시선택
  $(".composition .frombox .country_tabs li").eq(0).addClass("on").siblings().removeClass("on");
  $(".composition .frombox .country_tab_box>li").eq(0).show().siblings().hide();
  $(".composition .frombox .country_tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $(".composition .frombox .country_tab_box>li").eq(indexNum).show().siblings().hide();
  });

  $(".composition .tobox .country_tabs li").eq(1).addClass("on").siblings().removeClass("on");
  $(".composition .tobox .country_tab_box>li").eq(0).show().siblings().hide();
  $(".composition .tobox .country_tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $(".composition .tobox .country_tab_box>li").eq(indexNum).show().siblings().hide();
  });

  //날짜선택
  //날짜선택 왕복편도
  $(".datechoose .triptype span").eq(0).addClass("on");
  $(".datechoose .triptype span").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  //날짜선택 스와이퍼
  var calendar = new Swiper(".calendar", {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".calendar_arrow .swiper-button-next",
      prevEl: ".calendar_arrow .swiper-button-prev",
    },
    breakpoints: {
      1080: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  //8월 클릭시
  // 상위 컨테이너 지정
  const calendarRoot = document.querySelector('#main .datechoose .calendar .month8');

  // 해당 영역 안의 모든 td에 클릭 이벤트 부여
  calendarRoot.querySelectorAll("tbody td").forEach(td => {
    td.addEventListener("click", function () {
      // 1. 해당 calendar 안에서 기존 클래스 제거
      calendarRoot.querySelectorAll("td.on").forEach(el => el.classList.remove("on"));
      calendarRoot.querySelectorAll("td.ing").forEach(el => el.classList.remove("ing"));

      // 2. 해당 calendar 안의 모든 i 태그 투명하게 처리
      calendarRoot.querySelectorAll("td i").forEach(i => {
        i.style.opacity = "0";
      });

      // 3. 클릭한 td에 'on' 클래스 추가
      td.classList.add("on");

      // 4. 클릭한 td 안의 i는 다시 보이게
      const iTag = td.querySelector("i");
      if (iTag) {
        iTag.style.opacity = "1";
      }

      // 5. 클릭한 td가 속한 tr과 column index 찾기
      const currentRow = td.closest("tr");
      const columnIndex = Array.from(currentRow.children).indexOf(td);

      // 6. 같은 tr의 클릭한 칸부터 오른쪽 td에 ing 추가
      Array.from(currentRow.children).forEach((cell, idx) => {
        if (idx >= columnIndex) {
          cell.classList.add("ing");
        }
      });

      // 7. 아래의 tr들에 대해 모든 td에 ing 추가
      let nextRow = currentRow.nextElementSibling;
      while (nextRow) {
        Array.from(nextRow.children).forEach(cell => {
          cell.classList.add("ing");
        });
        nextRow = nextRow.nextElementSibling;
      }
    });
  });

  //9월 클릭시
  const calendarMonth9 = document.querySelector('#main .datechoose .calendar .month9');

  calendarMonth9.querySelectorAll("tbody td").forEach(td => {
    td.addEventListener("click", function () {
      // 1. 기존 클래스 제거
      calendarMonth9.querySelectorAll("td.on").forEach(el => el.classList.remove("on"));
      calendarMonth9.querySelectorAll("td.ing").forEach(el => el.classList.remove("ing"));

      // 2. 모든 i 태그 투명 처리
      calendarMonth9.querySelectorAll("td i").forEach(i => {
        i.style.opacity = "0";
      });

      // 3. 클릭한 td에 on 클래스 추가
      td.classList.add("on");

      // 4. 클릭한 td 안의 i는 보이게
      const iTag = td.querySelector("i");
      if (iTag) {
        iTag.style.opacity = "1";
      }

      // 5. 클릭한 td의 tr과 컬럼 인덱스
      const currentRow = td.closest("tr");
      const columnIndex = Array.from(currentRow.children).indexOf(td);

      // 6. 클릭한 tr 위의 모든 tr의 모든 td에 ing 추가
      let prevRow = currentRow.previousElementSibling;
      while (prevRow) {
        Array.from(prevRow.children).forEach(cell => {
          cell.classList.add("ing");
        });
        prevRow = prevRow.previousElementSibling;
      }

      // 7. 클릭한 tr에서 클릭한 td부터 왼쪽까지 ing 추가
      Array.from(currentRow.children).forEach((cell, idx) => {
        if (idx <= columnIndex) {
          cell.classList.add("ing");
        }
      });
    });
  });

  //탑승객선택
  //숫자 올라가는 스크립트
  const counts = {
    adult: 0,
    child: 0,
    infant: 0
  };

  window.increase = function(type) {
    counts[type]++;
    document.getElementById(type).innerText = counts[type];
  }

  window.decrease = function(type) {
    if (counts[type] > 0) {
      counts[type]--;
    }
    document.getElementById(type).innerText = counts[type];
  }

  //특가추천항공권 스와이퍼
  var flights = new Swiper(".flights", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".flights_arrow .swiper-button-next",
      prevEl: ".flights_arrow .swiper-button-prev",
    },
    breakpoints: {
      650: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });

  //이벤트 탭
  $(".event .tabs li").eq(0).addClass("on");
  $(".event .event_tabbox ul li").eq(1).hide();
  $(".event .event_arrow_wrap div.event_arrow").eq(1).hide();
  $(".event .tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $(".event .event_tabbox ul li").eq(indexNum).show().siblings().hide();
    $(".event .event_arrow_wrap div.event_arrow").eq(indexNum).show().siblings().hide();
    $(".event .event_arrow_wrap div.event_arrow.mintpass_arrow").hide();
  });
  //이벤트 스와이퍼
  var promotion = new Swiper(".promotion", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autopla: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion_arrow .swiper-button-next",
      prevEl: ".promotion_arrow .swiper-button-prev",
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
  
  //도움이필요한고객 탭
  $(".customerneed .customer_tabs li").eq(0).addClass("on");
  $(".customerneed .customer_tab_box li").eq(0).show().siblings().hide();
  $(".customerneed .customer_tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $(".customerneed .customer_tab_box li").eq(indexNum).show().siblings().hide();
  });

  //푸터 fnb
  $('#footer .fnb > ul > li > a').on('click', function(e){
    var $sub = $(this).next('.sub_fnb');
    if ($sub.length) {
      e.preventDefault();            // 링크 이동 막기
      $('.sub_fnb').not($sub).slideUp(200).parent().removeClass('active'); // 다른거 닫기
      $sub.slideToggle(200);         // 토글 (열기/닫기)
      $(this).parent().toggleClass('active'); // active 토글
    }
  });

});

