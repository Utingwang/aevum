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