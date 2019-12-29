window.addEventListener('load', function(){
  const fadeSlide = document.getElementById('fadeslider');
  const fadeSlideItem = fadeSlide.children;
  const fadeSlideItemTotal = fadeSlideItem.length - 1; //スライドの枚数を取得
  const fadeSlideFadeTime = 2000;                      //フェードインの時間
  const fadeSlideIntarvalTime = 5000;                  //クロスフェードさせるまでの間隔
  let fadeSlideActNum = 0;                             //現在アクティブな番号
  let fadeSlideNowSlide;                               //現在表示中のスライド
  let fadeSlideNextSlide;                              //次に表示するスライド
  // スライドの1枚目をフェードイン
  fadeSlideItem[0].classList.add('fadeslider-show', 'fadeslider-zoom');
  // 繰り返し処理
  setInterval(() => {
    if (fadeSlideActNum < fadeSlideItemTotal) {
      let fadeSlideNowSlide = fadeSlideItem[fadeSlideActNum];
      let fadeSlideNextSlide = fadeSlideItem[++fadeSlideActNum];
      // フェードアウト
      fadeSlideNowSlide.classList.remove('fadeslider-show');
      // と同時に、次のスライドがズームしながらフェードインする
      fadeSlideNextSlide.classList.add('fadeslider-show', 'fadeslider-zoom');
      // フェードアウト完了後、.fadeslider-zoom削除
      setTimeout(() => {
        fadeSlideNowSlide.classList.remove('fadeslider-zoom');
      }, fadeSlideFadeTime);
    } else {
      let fadeSlideNowSlide = fadeSlideItem[fadeSlideActNum];
      let fadeSlideNextSlide = fadeSlideItem[fadeSlideActNum = 0];
      // フェードアウト
      fadeSlideNowSlide.classList.remove('fadeslider-show');
      // 次のスライドがズームしながらフェードインする
      fadeSlideNextSlide.classList.add('fadeslider-show', 'fadeslider-zoom');
      // フェードアウト完了後、.fadeslider-zoom削除
      setTimeout(() => {
        fadeSlideNowSlide.classList.remove('fadeslider-zoom');
      }, fadeSlideFadeTime);
    };
  }, fadeSlideIntarvalTime);
});
