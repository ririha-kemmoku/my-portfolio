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
