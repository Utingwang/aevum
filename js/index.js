// -----------房間輪播-----------
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
// -----------房間輪播-----------

// -----------彈跳視窗-----------
document.addEventListener("DOMContentLoaded", function () {

    // -----------彈跳視窗1-----------
    let link1 = document.querySelector("#link1");
    let infoModal1 = document.querySelector("#infoModal1");
    let close1 = document.querySelector("#close1");

    // 在 evend handler 加上 e.preventDefault();
    link1.addEventListener('click', function (e) {
        e.preventDefault();
        link1.addEventListener("click", function () {
            infoModal1.showModal();
        })
        close1.addEventListener("click", function () {
            infoModal1.close();
        })
    }, false);


    // -----------彈跳視窗2-----------
    let link2 = document.querySelector("#link2");
    let infoModal2 = document.querySelector("#infoModal2");
    let close2 = document.querySelector("#close2");

    // 在 evend handler 加上 e.preventDefault();
    link2.addEventListener('click', function (e) {
        e.preventDefault();
        link2.addEventListener("click", function () {
            infoModal2.showModal();
        })
        close2.addEventListener("click", function () {
            infoModal2.close();
        })
    }, false);


    // -----------彈跳視窗3-----------
    let link3 = document.querySelector("#link3");
    let infoModal3 = document.querySelector("#infoModal3");
    let close3 = document.querySelector("#close3");

    // 在 evend handler 加上 e.preventDefault();
    link3.addEventListener('click', function (e) {
        e.preventDefault();
        link3.addEventListener("click", function () {
            infoModal3.showModal();
        })
        close3.addEventListener("click", function () {
            infoModal3.close();
        })
    }, false);


    // -----------彈跳視窗4-----------
    let link4 = document.querySelector("#link4");
    let infoModal4 = document.querySelector("#infoModal4");
    let close4 = document.querySelector("#close4");

    // 在 evend handler 加上 e.preventDefault();
    link4.addEventListener('click', function (e) {
        e.preventDefault();
        link4.addEventListener("click", function () {
            infoModal4.showModal();
        })
        close4.addEventListener("click", function () {
            infoModal4.close();
        })
    }, false);


})
// -----------彈跳視窗-----------