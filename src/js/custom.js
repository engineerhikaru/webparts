// カウントアップ
// var count = document.getElementById('count');
// var countInner = count.innerHTML;
// count.innerHTML = 0;
// var i = 0;
// var s = setInterval(function() {
// var r = Math.floor(Math.random()*(countInner/50));
// if (i+r <= countInner) {
// i += r;
// count.innerHTML = i;
// } else {
// count.innerHTML = countInner;
// clearInterval(s);
// }
// }, 1);



// // ハンバーガーメニュー(呼び出し)
// //querySelector：CSSセレクタで要素を取得
// const $hamburger = document.querySelector('.hamburger');
// // addEventListener：イベント処理（click）
// $hamburger.addEventListener('click', function(){
//   //ON時はis-activeクラス付与、OFF時はis-activeクラス削除
//   $hamburger.classList.toggle('is-active')
// });
// //全体を囲む要素をid[#wrapper]で指定
// const $wrapper = document.getElementById('wrapper');
// //メニューオープン・クローズのボタン要素をid[nav-btn]で指定
// const $navBtn = document.getElementById('nav-btn');
// //クリックしたら navToggle関数実行
// $navBtn.addEventListener('click', navToggle);
// //navToggleの関数
// function navToggle() {
//   //contains:文字列が引数に指定した文字列を含まれているかどうか[nav-open]
//   if ($wrapper.classList.contains('nav-open')) {
//     //メニュークローズ時
//     navCloseFunc();
//   } else {
//     //メニューオープン時
//     navOpenFunc();
//   }
// }
// //メニューオープン時の関数
// function navOpenFunc() {
//   //wrapperのclass[nav-open]付与
//   $wrapper.classList.add('nav-open');
// }
// //メニュークローズ時の関数
// function navCloseFunc() {
//   //wrapperのclass[nav-open]削除
//   $wrapper.classList.remove('nav-open');
// }
