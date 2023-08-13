// document.addEventListener('DOMContentLoaded', function () {
//     var imgs = document.getElementsByClassName("slide_image");
//     var btns = document.getElementsByClassName("direction");
//     var ul = document.getElementsByClassName("slide_point");
//     var lis = document.getElementsByTagName("li");
//     var len = imgs.length;
//     var current = 0;
//     let flag = true;
//     var timer;

//     function wrapper() {
//         frount();
//         bind();
//         getLi();
//         btnClick();
//         showLis();
//         autoplay();
//     };
//     wrapper();

//     // 圖片移動
//     function frount() {
//         var mlen = Math.floor(len / 2);
//         var limg, rimg;
//         for (var i = 0; i < mlen; i++) {
//             limg = len + current - i - 1;
//             rimg = current + i + 1;
//             if (limg >= len) {
//                 limg -= len;
//             }
//             if (rimg >= len) {
//                 rimg -= len;
//             }
//             imgs[limg].style.transform = `translateX(` + (150) * (i + 1) + `px) translateZ(` + (200 - i * 100) + `px) rotateY(-30deg)`;
//             imgs[rimg].style.transform = `translateX(` + (-150) * (i + 1) + `px) translateZ(` + (200 - i * 100) + `px) rotateY(30deg)`;
//         }
//         imgs[current].style.transform = `translateZ(300px)`;
//     };

//     // 點擊圖片
//     function bind() {
//         for (var i = 0; i < len; i++) {
//             (function (i) {
//                 imgs[i].onclick = function () {
//                     current = i;
//                     frount();
//                     autoLi();
//                 }
//             })(i);
//             imgs[i].onmouseenter = function () {
//                 clearInterval(timer);
//             }
//             imgs[i].onmouseout = function () {
//                 autoplay();
//             }
//         }
//     };

//     // 自動更換圖片
//     function autoplay() {
//         timer = setInterval(function () {
//             if (current >= len - 1) {
//                 current = 0;
//             } else {
//                 current++;
//             }
//             frount();
//             autoLi();
//         }, 2000)
//     }

//     // 點擊左右按鈕
//     function btnClick() {
//         for (var i = 0; i < btns.length; i++) {
//             (function (i) {
//                 btns[i].onclick = function () {
//                     if (!flag) { return; }
//                     flag = false;
//                     // 左按鈕
//                     if (i == 0) {
//                         if (current <= 0) {
//                             current = len - 1;
//                         } else {
//                             current--;
//                         }
//                     }
//                     // 右按鈕
//                     if (i == 1) {
//                         if (current >= len - 1) {
//                             current = 0;
//                         } else {
//                             current++;
//                         }
//                     }
//                     setTimeout(() => {
//                         flag = true;
//                     }, 800);
//                     frount();
//                     autoLi();
//                 }
//             })(i);
//             btns[i].onmouseenter = function () {
//                 clearInterval(timer);
//             }
//             btns[i].onmouseout = function () {
//                 autoplay();
//             }
//         }
//     };

//     // 點擊小圓點
//     function getLi() {
//         for (var i = 0; i < len; i++) {
//             (function (i) {
//                 ul[0].innerHTML += "<li></li>"
//             }
//             )(i);
//         }
//         lis[0].classList.add("current")
//     }

//     function showLis() {
//         for (var i = 0; i < len; i++) {
//             (function (i) {
//                 lis[i].onclick = function () {

//                     for (var k = 0; k < len; k++) {
//                         lis[k].classList.remove("current")
//                     }
//                     this.classList.add("current")
//                     current = i;
//                     frount();
//                 }
//             })(i);
//             lis[i].onmouseenter = function () {
//                 clearInterval(timer);
//             }
//             lis[i].onmouseout = function () {
//                 autoplay();
//             }
//         }
//     }
//     function autoLi() {
//         for (var i = 0; i < len; i++) {
//             if (i == current) {
//                 lis[i].classList.add("current")
//             } else {
//                 lis[i].className = '';
//             }
//         }
//     }
// });


//--------------------老師用--------------------
// function $id(id) {  //$id("btnLeft")
// return document.getElementById(id);  //document.getElementById("btnLeft")
// }


// window.addEventListener("load", function () {

//     let wrap = document.querySelector(".wrap");
//     let curIndex = 0;
//     //-----------------------------------------btnLeft.onclick
//     $id("btnLeft").onclick = function () {
//         curIndex--;
//         wrap.style.left = -230 * curIndex + "px";
//         if (curIndex === 0) {
//             $id("btnLeft").disabled = true;
//         }
//         $id("btnRight").disabled = false;
//     }
//     //-----------------------------------------btnRight.onclick
//     $id("btnRight").onclick = function () {
//         curIndex++;
//         wrap.style.left = -230 * curIndex + "px";
//         if (curIndex === 5) {
//             $id("btnRight").disabled = true;
//         }
//         $id("btnLeft").disabled = false;
//     }
// })

// window.addEventListener("load", function () {
//     let wrap = document.querySelector(".wrap");
//     let curIndex = 0;

//     $id("btnLeft").onclick = function () {
//         curIndex = (curIndex + 4) % 5;
//         wrap.style.left = -310 * curIndex + "px";
//         $id("btnRight").disabled = false;
//         $id("btnLeft").disabled = curIndex === 0;
//     }

//     $id("btnRight").onclick = function () {
//         curIndex = (curIndex + 1) % 5;
//         wrap.style.left = -310 * curIndex + "px";
//         $id("btnLeft").disabled = false;
//         $id("btnRight").disabled = curIndex === 0;
//     }
// });


function $id(id) {
    return document.getElementById(id)
}
window.addEventListener("load", function () {
    let itemView = $id("roomView");
    let items = document.getElementsByClassName("room");

    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function () {
        let last = items[items.length - 1];
        itemView.insertBefore(last, items[0]);
    }

    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function () {
        let last = items[items.length];
        // itemView.appendChild(last);
        itemView.insertBefore(items[0], last);
    }
})
