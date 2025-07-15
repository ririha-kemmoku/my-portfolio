'use strict';

{
  const btn = document.querySelector('.btn');
  const menu = document.querySelector('.menu');
  const menuLinks = menu.querySelectorAll('a');

  // ボタンでメニューを開閉
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');
    if (isActive) {
      // 開いてる→閉じる
      btn.classList.remove('active');
      menu.classList.remove('active');
    } else {
      // 閉じてる→開く
      btn.classList.add('active');
      menu.classList.add('active');
    }
  });

  // メニュー内リンクを押したときは閉じる
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}
// Swiperインスタンス格納用
let drawSlider = null;
let photoSlider = null;

function initSliders(){
  const drawEl = document.querySelector('.draw-slider');
    if(drawEl && !drawSlider){
      drawSlider = new Swiper('.draw-slider',{
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween:20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.draw-slider .swiper-button-next',
          prevEl: '.draw-slider .swiper-button-prev',
        },
        pagination:{
          el: '.draw-slider .swiper-pagination',
          clickable: true,
        },
        speed: 400,
      });
    }

  const photoEl = document.querySelector('.photo-slider');
    if(photoEl && !photoSlider){
      photoSlider = new Swiper('.photo-slider',{
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween:20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.photo-slider .swiper-button-next',
          prevEl: '.photo-slider .swiper-button-prev',
        },
        pagination:{
          el: '.photo-slider .swiper-pagination',
          clickable: true,
        },
        speed: 400,
      });
    } 
  }
window.addEventListener('load', initSliders);
window.addEventListener('resize',() => {
  clearTimeout(window.sliderResizeTimer);
  window.sliderResizeTimer = setTimeout(initSliders, 200);
});
