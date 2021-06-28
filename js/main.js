const searchEl = document.querySelector('.search');
const serchinput = searchEl.querySelector('input');


searchEl.addEventListener('click', function () {

    //로직을 입력한다.
    serchinput.focus();
});

serchinput.addEventListener('focus', function () {

    searchEl.classList.add('focused');
    serchinput.setAttribute('placeholder', '통합검색');

});

serchinput.addEventListener('blur', function () {

    searchEl.classList.remove('focused');
    serchinput.setAttribute('placeholder', '');

});

// 뱃지부분 스크롤 내리기

const badgeEl = document.querySelector('header .badges');
const totopel = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {

    if (window.scrollY > 500) {
        // gsap에서는 문자로 입력하는 값들은 따옴표를 붙여야한다
        // gsap.to(애니메이션을 적용할 요소, 지속시간(숫자), 옵션(객체요소로 나타내야함{}));
        gsap.to(badgeEl, .6, {
            display: 'none',
            opacity: 0

        });
        gsap.to(totopel, .2, {
            x: 0,
           
        });
        //버튼보이기

    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
        //버튼을 숨기기
        gsap.to(totopel, .2, {
            x: 100,
           
        });
    };
}, 300));



totopel.addEventListener('click',function(){

    gsap.to(window, .7, {


        scrollTo:0
    });

});
// _.throttle 은 로다시에서 제공하는 매소드이며 일정시간에 한번씩만 실행되도록제한을 걸었다
// 스크롤애니메이션사용할때 마다 throttle을 자주 사용하는데
// 왜냐하면 화면을 스크롤할대마다 화면의 익명의 함수가 매우 많이 실행되기때문에 과부하가 온다
// _.throttle(함수 , 시간)

// 커피이미지 시간차 화면 구현 애니메이션 

const fadeels = document.querySelectorAll('.visual .fade-in');
// html부문에서 찾은 fade-in의 개수만큼 foreach의 매소드에 인수로 적은 함수가 시행이 된다
fadeels.forEach(function (fadeel, index) {
    gsap.to(fadeel, 1, {

        opacity: 1,
        delay: (index + 1) * 0.7,

    });

});

// 스와이퍼 슬라이드

// new는 자바스크립트로 스와이퍼를 실행하겠다
// new Swiper(css선택자 인수 , {옵션})
new Swiper('.notice-line .swiper-container', {

    direction: 'vertical',
    // autoplay:자동재생여부
    autoplay: true,
    loop: true,
    // loop:true, 자동재생 +반복재생


});
new Swiper('.promotion .swiper-container', {

    // autoplay:자동재생여부
    slidesPerView: 3,
    // loop:true, 자동재생 +반복재생
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay:{


    //     delay:5000,
    // },
    pagination: {

        el: '.promotion .swiper-pagination',
        clickable: true
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }

    //페이지번호요소 선택자
    //사용자의 페이지 번호 요소 제거 가능 여부



});
new Swiper('.awards .swiper-container',{

    loop: true,
    autoplay:true,
    spaceBetween: 30,
    slidesPerView: 5,
    
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }


})

// 토글버튼

const promotionel = document.querySelector('.promotion');
const promotionttoglebtn = document.querySelector('.toggle-promotion');
let ishidepromotion = false;

promotionttoglebtn.addEventListener('click',function(){

ishidepromotion =!ishidepromotion
if(ishidepromotion){
//숨김처리를해야함
promotionel.classList.add('hide');
}else{
    promotionel.classList.remove('hide');
    
    //나타내야함
}

});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingobject(selector,delay,size){
    // gsap.to(요소,시간,옵션)
    gsap.to(selector,
            random(1.5,2.5),{


        // y:y축으로 얼마만큼 애니메이션을 움직일것이냐

        y:size,
        repeat:-1,
        yoyo:true,
        ease:Power1.easrInOut,
        delay:random(0,delay),

    })

}
floatingobject('.floating1',1,15)
floatingobject('.floating2',.5,15)
floatingobject('.floating3',1.5,20)


const spyels = document.querySelectorAll('section.scroll-spy');
spyels.forEach(function(spyel){


    new ScrollMagic
        .Scene({


            triggerElement:spyel,//보여짐여부를 감시할 요소를 지정
            triggerHook:.8,
                })
        .setClassToggle(spyel,'show')
        .addTo(new ScrollMagic.Controller());



});



// 올해가 몇년도 인지 

const thisyear = document.querySelector('.this-year');

thisyear.textContent = new Date().getFullYear();//2021라는 숫자가 산출이 된다.


