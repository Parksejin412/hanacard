/* center slick */

$(document).ready(function(){
    $('.eb_slider_list').slick({
      arrows:false, // 기본값 : true
      dots: true, // 기본값 : false
      autoplay: true,
      pauseOnHover: false, //마우스를 올렸을때 autoplay가 멈추는 기능 해제

    });
  });

/* 재생 정지버튼 (event box2) */  

$('.event_box2 .page_act .btn_stop').click(function(e){ //정지버튼을 클릭하면 함수의 이벤트가 실행된다.
    e.preventDefault(); //이벤트가 실행되는데 기본값을 막아라
    if($('.event_box2 .page_act').hasClass("on")){ //.event_box2 .page_act 가 on이라는 클래스를 가지고 있다면
      $('.event_box2 .page_act').removeClass("on");//.event_box2 .page_act는 on이라는 클래스를 없애라.
      $('.eb_slider_list').slick('slickPause');//.eb_slider_list의 자동재생 되고 있는 슬릭을 멈춰라
    }
  })

  $('.event_box2 .page_act .btn_play').click(function(e){ //재생버튼을 클릭하면 함수의 이벤트가 실행된다.
    e.preventDefault();
    $('.event_box2 .page_act').addClass("on"); // .event_box2 .page_act 에 on 이라는 클래스를 추가해라.
    $('.eb_slider_list').slick('slickPlay'); // .eb_slider_list의 자동재생 슬릭을 실행해라.
 })

 
/* right slick */
let card =$('.card');

 card.slick({
  arrows:false, // 기본값 : true
  dots: true, // 기본값 : false
  autoplay: true,
  pauseOnHover: false,
  });

  /* 재생 정지버튼 (event box3) */  

  $('.event_box3 .pagn_act .btn_stop').click(function(e){ //위랑 같은 이름이면 오류확률이 높아짐
    e.preventDefault();
    if($('.event_box3 .pagn_act').hasClass("on")){
      $('.event_box3 .pagn_act').removeClass("on")
      card.slick('slickPause'); //멈추기
    }
  })
  
  $('.event_box3 .pagn_act .btn_play').click(function(){
    $('.event_box3 .pagn_act').removeClass("on")
      card.slick('slickPlay'); //멈추기
  })

//life 버튼
let tab=$('.life_menu ul li');
let menu=$('.life_style li');

tab.mouseover(function(){ //tab에 마우스를 올리면
  let target = $(this); // 마우스에 올린 어떤것에
  let index = target.index(); //번호를 뽑아라 (태생적으로 태어날때 가지고 나온 번호추출)
  //console.log(index)
  menu.css({opacity:0})//일단 menu의 css를 모두 초기화
  menu.eq(index).css({opacity:1})//내가 마우스를 올렸을때 뽑아낸 번호와 menu와 같다(서로연결) 걔를 다시 css를 보여라 
});
  
