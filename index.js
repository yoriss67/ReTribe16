//ハンバーガーメニュー
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById("js_hamburger");
  const overlay = document.getElementById("js_overlay");
  const hamburgerPosition = document.querySelector('.hamburger')

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav_open"); //クラスが含まれていれば削除、含まれていなければ追加する
  });
  overlay.addEventListener("click", function () {
    body.classList.remove("nav_open"); //クラスを削除する
  });


}
toggleNav();



// https://gxy-life.com/2PC/PC/PC20210803.html
window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("topButton");
  // const productsBoxItem = this.document.querySelector('.products-box-item')
  const scroll = window.pageYOffset;
  if (scroll > 400) { // ➃
    // topBtn.style.visibility = 'visible';
    topBtn.classList.add("appear");

  } 
  else{ topBtn.classList.remove("appear");}


  // if (scroll > 2000) {
  //   productsBoxItem.classList.add('fadeUp')
  // }



  let productsBoxItems = this.document.querySelectorAll('.products-box-item')

for(let i=0; i< productsBoxItems.length; i++) {
  if (scroll > 1450) {
    productsBoxItems[i].classList.add('fadeUp')
    productsBoxItems[i].style.animationDelay = i * 0.3 + 's'
  } else {
    productsBoxItems[i].classList.remove('fadeUp')
  }
}


  
});



