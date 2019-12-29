// マウスカーソル
// cursorというID名をマウスに追従させる処理
document.addEventListener('mousemove', function(e){
  document.getElementById('cursor').style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
// リンクにホバー時はクラスをつける
document.addEventListener('DOMContentLoaded', function(){
  const cursorHoverA = document.querySelectorAll('a');
  cursorHover(cursorHoverA);
  const cursorHoverTabLabel = document.querySelectorAll('.tab-label label');
  cursorHover(cursorHoverTabLabel);
});

// ホバー呼び出し
function cursorHover(element){
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('mouseenter', function(e){
      document.getElementById('cursor').classList.add('cursor-hover');
    });
    element[i].addEventListener('mouseleave', function(e){
      document.getElementById('cursor').classList.remove('cursor-hover');
    });
  }
}
