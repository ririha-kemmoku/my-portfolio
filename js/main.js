'use strict';

{
  const btn = document.querySelector('.btn');
  const menu = document.querySelector('.menu');
  const menuLinks = menu.querySelectorAll('a');

  // メニューの開閉
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}

// トップ画像をロード時に表示
window.addEventListener('load', () => {
  document.querySelector('#top-wrapper');
  if (top) {
    top.classList.add('show');
  }
});

// 他の要素はスクロールで表示
document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll('.fade-in:not(#top-wrapper)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.taget);
      }
    });
  },{threshold: 0.1 });
  fadeIns.forEach(el => observer.observe(el));
});

// プロフィールの画像スクロール
let drawSlider = null;
let photoSlider = null;

function initSliders() {
  const drawEl = document.querySelector('.draw-slider');
  const photoEl = document.querySelector('.photo-slider');

  if (drawSlider) {
    drawSlider.destroy(true, true);
    drawSlider = null;
  }
  if (photoSlider) {
    photoSlider.destroy(true, true);
    photoSlider = null;
  }

  if (drawEl) {
    drawSlider = new Swiper('.draw-slider', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.draw-slider .swiper-button-next',
        prevEl: '.draw-slider .swiper-button-prev',
      },
      pagination: {
        el: '.draw-slider .swiper-pagination',
        clickable: true,
      },
      speed: 400,
      breakpoints: {
        481: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        }
      }
    });
  }

  if (photoEl) {
    photoSlider = new Swiper('.photo-slider', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.photo-slider .swiper-button-next',
        prevEl: '.photo-slider .swiper-button-prev',
      },
      pagination: {
        el: '.photo-slider .swiper-pagination',
        clickable: true,
      },
      speed: 400,
      breakpoints: {
        481: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        }
      }
    });
  }
}

window.addEventListener('load', initSliders);
window.addEventListener('resize', () => {
  clearTimeout(window.sliderResizeTimer);
  window.sliderResizeTimer = setTimeout(initSliders, 200);
});
