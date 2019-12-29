// スムーススクロール
document.addEventListener('DOMContentLoaded', function(){
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  const smoothSpeed = 200;   // スクロールスピード
  const smoothDivisor = 100; // 分割数
  const smoothTolerance = 5; // 許容誤差
  const smoothHeaderHeight = 50;    // 固定ヘッダーがある場合はその高さ分ずらす
  const smoothInterval = smoothSpeed / smoothDivisor;
  for (let i = 0; i < smoothLinks.length; i++) {
    smoothLinks[i].addEventListener('click', function(e){
      e.preventDefault();
      let smoothNowY = window.pageYOffset;
      const smoothHref = e.currentTarget.getAttribute('href');
      const smoothTarget = document.querySelector(smoothHref);
      if( smoothTarget != null){
        const smoothTargetRectTop = smoothTarget.getBoundingClientRect().top;
        const smoothTargetY = smoothTargetRectTop + smoothNowY - smoothHeaderHeight;
        const smoothMinY = Math.abs((smoothTargetY - smoothNowY)/ smoothDivisor);
        smoothScroll(smoothMinY, smoothNowY, smoothTargetY, smoothTolerance, smoothInterval);
      }
    });
  }
});
function smoothScroll(minY, nowY, targetY, tolerance, interval){
  let toY;
  if( targetY < nowY ){
    toY = nowY - minY;
  }else{
    toY = nowY + minY;
  }
  window.scrollTo(0, toY);
  if( targetY - tolerance > toY || toY > targetY + tolerance){
    window.setTimeout(smoothScroll, interval, minY, toY, targetY, tolerance, interval);
  }else{
    return false;
  }
}
// ページトップ
// function topButton(elmId, duration) {
//   //トップに戻るボタンの要素の取得
//   var topButton = document.getElementById(elmId);
//   topButton.addEventListener("click", function(e){
//     //デフォルトの動作の制御
//     e.preventDefault();
//     var begin = new Date() - 0;
//     var yOffset = window.pageYOffset;
//     var timer= setInterval(function() {
//       var current = new Date() - begin;
//       if (current > duration) {
//         clearInterval(timer);
//         current = duration;
//       }
//       //スクロール位置を単位時間で変更する
//       window.scrollTo(0, yOffset * (1 - current / duration))
//     }, 10);
//   }, false)
// }
//
// // 使用例 トップに戻るボタンの id とアニメーションにかかる時間をミリ秒で指定
// topButton("return-top", 300);
