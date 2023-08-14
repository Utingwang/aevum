function load() {

    var list = document.querySelector('.list')
    var box = document.querySelector('.box');
    let left = list.style.left;
    let timer;
    function move() {
        clearInterval(timer);
        timer = setInterval((env) => {
            left = left - 2;
            console.log(list.clientLeft);
            if (left == - (6 * 200 + 2 * 24)) {
                left = 0;
            }
            list.style.left = left + 'px';
        }, 20);
    }

    move();
    box.onmouseover = function () {
        clearInterval(timer);
    };

    box.onmouseleave = function () {
        move();
    };
};
document.addEventListener('DOMContentLoaded', load);