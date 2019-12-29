// スクロールイン(呼び出し)
function scrollinAction(element){
  var showTiming = window.innerHeight > 768 ? 200 : 40;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('scrollin-action');
    } else if(scrollY + windowH < elemY) {
      element[i].classList.remove('scrollin-action');
    }
  }
}
// スクロールインフェードイン(下から)
scrollFadeinUp();
window.addEventListener('scroll', scrollFadeinUp);
function scrollFadeinUp() {
  var element = document.getElementsByClassName('fadeinUp');
  if(!element) return;
  scrollinAction(element);
}

// スクロールインフェードイン(右から)
// scrollFadeinRight();
// window.addEventListener('scroll', scrollFadeinRight);
// function scrollFadeinRight() {
//   var element = document.getElementsByClassName('fadeinRight');
//   if(!element) return;
//   scrollinAction(element);
// }

// スクロールインフェードイン(右から)
// scrollFadeinLeft();
// window.addEventListener('scroll', scrollFadeinLeft);
// function scrollFadeinLeft() {
//   var element = document.getElementsByClassName('fadeinLeft');
//   if(!element) return;
//   scrollinAction(element);
// }

// スクロールフリップイン(X軸)
// scrollFlipinX();
// window.addEventListener('scroll', scrollFlipinX);
// function scrollFlipinX() {
//   var element = document.getElementsByClassName('flipinX');
//   if(!element) return;
//   scrollinAction(element);
// }

// スクロールフリップイン(Y軸)
// scrollFlipinY();
// window.addEventListener('scroll', scrollFlipinY);
// function scrollFlipinY() {
//   var element = document.getElementsByClassName('flipinY');
//   if(!element) return;
//   scrollinAction(element);
// }

// スクロールズームイン
// scrollZoomin();
// window.addEventListener('scroll', scrollZoomin);
// function scrollZoomin() {
//   var element = document.getElementsByClassName('zoomin');
//   if(!element) return;
//   scrollinAction(element);
// }

// スクロールロールイン
// scrollRotatein();
// window.addEventListener('scroll', scrollRotatein);
// function scrollRotatein() {
//   var element = document.getElementsByClassName('rotatein');
//   if(!element) return;
//   scrollinAction(element);
// }
