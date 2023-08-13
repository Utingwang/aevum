// ---------------------圖片倫播---------------------
$(document).ready(function () {
    let divWidth = $('.sliderBoard').width()
    let imgCount = $('.content li').length

    for (let i = 0; i < imgCount; i++) {
        $('.contentButton').append(`<li></li>`)
    }
    $('.contentButton li:first').addClass('clicked')

    $('.content li').width(divWidth)   // li 的寬度
    $('.content').width(divWidth * imgCount)   // ul 的寬度

    let index = 0
    let timer = setInterval(moveToNext, 5000)


    function moveCenter() {
        let winWidth = $(window).width()
        let winHeight = $(window).height()

        $('.sliderBoard').css({
            left: (winWidth - divWidth) / 2,
            top: (winHeight - divHeight) / 2,
        })

        $('.content li').css({
            left: (winWidth - liWidth) / 2,
            top: (winHeight - liHeight) / 2,
        })

        $('.content').css({
            left: (winWidth - ulWidth) / 2,
            top: (winHeight - ulHeight) / 2,
        })
    }

    $(`.contentButton li`).click(function () {
        clearInterval(timer)
        index = $(this).index()

        $('.content').animate({
            left: index * divWidth * -1
        })

        $(function () {
            let divWidth = $('.sliderBoard').width()
            let divHeight = $('.sliderBoard').height()
            let liWidth = $('.content li').width()
            let liHeight = $('.content li').height()
            let ulWidth = $('.content').width()
            let ulHeight = $('.content').height()

            moveCenter()
            $(window).resize(function () {
                moveCenter()
            })

        })

        $(this).addClass('clicked')
        $(`.contentButton li`).not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext() {
        if (index < imgCount - 1) {
            index++
        } else {
            index = 0
        }

        $('.content').animate({
            left: index * divWidth * -1
        })

        $(`.contentButton li:eq(${index})`).addClass('clicked')
        $(`.contentButton li`).not(`:eq(${index})`).removeClass('clicked')
    }
});


// ---------------------隱藏文字---------------------
var isShow = false;
function showMore1() {
    if (!isShow) {
        isShow = true;
        document.getElementById('hideMore1').style.display = '';
        document.getElementById('showMore1').innerText = "顯示部分內容";
    }
    else {
        isShow = false;
        document.getElementById('hideMore1').style.display = 'none';
        document.getElementById('showMore1').innerText = "查看更多";
    }
}
function showMore2() {
    if (!isShow) {
        isShow = true;
        document.getElementById('hideMore2').style.display = '';
        document.getElementById('showMore2').innerText = "顯示部分內容";
    }
    else {
        isShow = false;
        document.getElementById('hideMore2').style.display = 'none';
        document.getElementById('showMore2').innerText = "查看更多";
    }
}
function showMore3() {
    if (!isShow) {
        isShow = true;
        document.getElementById('hideMore3').style.display = '';
        document.getElementById('showMore3').innerText = "顯示部分內容";
    }
    else {
        isShow = false;
        document.getElementById('hideMore3').style.display = 'none';
        document.getElementById('showMore3').innerText = "查看更多";
    }
}
function showMore4() {
    if (!isShow) {
        isShow = true;
        document.getElementById('hideMore4').style.display = '';
        document.getElementById('showMore4').innerText = "顯示部分內容";
    }
    else {
        isShow = false;
        document.getElementById('hideMore4').style.display = 'none';
        document.getElementById('showMore4').innerText = "查看更多";
    }
}
function showMore5() {
    if (!isShow) {
        isShow = true;
        document.getElementById('hideMore5').style.display = '';
        document.getElementById('showMore5').innerText = "顯示部分內容";
    }
    else {
        isShow = false;
        document.getElementById('hideMore5').style.display = 'none';
        document.getElementById('showMore5').innerText = "查看更多";
    }
}