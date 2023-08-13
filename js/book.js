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

window.addEventListener("load", function () {
    // --------------圖片輪播slide1
    var counter1 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide1 = document.querySelector('#slide1'),
        items1 = slide1.querySelectorAll('img'), // 抓取所有 img
        itemsCount1 = items1.length, // 圖片總數 
        prevBtn1 = document.createElement('a'), // 上一張按鈕
        nextBtn1 = document.createElement('a'), // 下一張按鈕
        timer1 = 4000, // 4 秒換圖
        interval1 = window.setInterval(showNext1, timer1);  // 設定循環

    prevBtn1.classList.add('prev1'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn1.classList.add('next1'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide1.appendChild(prevBtn1); // 將按鈕加到 #slide 裡
    slide1.appendChild(nextBtn1);

    // 帶入目前要顯示第幾張圖 
    var showCurrent1 = function () {
        var itemToShow1 = Math.abs(counter1 % itemsCount1); // 取餘數才能無限循環
        [].forEach.call(items1, function (el) {
            el.classList.remove('show1'); // 將所有 img 的 class="show" 移除
        });
        items1[itemToShow1].classList.add('show1'); // 將要顯示的 img 加入 class="show"
    };

    function showNext1() {
        counter1++; // 將 counter+1 指定下一張圖
        showCurrent1();
    }

    function showPrev1() {
        counter1--; // 將 counter－1 指定上一張圖
        showCurrent1();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide1.addEventListener('mouseover', function () {
        interval1 = clearInterval(interval1);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide1.addEventListener('mouseout', function () {
        interval1 = window.setInterval(showNext1, timer1);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn1.addEventListener('click', showNext1, false);
    prevBtn1.addEventListener('click', showPrev1, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items1[0].classList.add('show1');

    // --------------圖片輪播slide2
    var counter2 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide2 = document.querySelector('#slide2'),
        items2 = slide2.querySelectorAll('img'), // 抓取所有 img
        itemsCount2 = items2.length, // 圖片總數 
        prevBtn2 = document.createElement('a'), // 上一張按鈕
        nextBtn2 = document.createElement('a'), // 下一張按鈕
        timer2 = 4000, // 4 秒換圖
        interval2 = window.setInterval(showNext2, timer2);  // 設定循環

    prevBtn2.classList.add('prev2'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn2.classList.add('next2'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide2.appendChild(prevBtn2); // 將按鈕加到 #slide 裡
    slide2.appendChild(nextBtn2);

    // 帶入目前要顯示第幾張圖 
    var showCurrent2 = function () {
        var itemToShow2 = Math.abs(counter2 % itemsCount2); // 取餘數才能無限循環
        [].forEach.call(items2, function (el) {
            el.classList.remove('show2'); // 將所有 img 的 class="show" 移除
        });
        items2[itemToShow2].classList.add('show2'); // 將要顯示的 img 加入 class="show"
    };

    function showNext2() {
        counter2++; // 將 counter+1 指定下一張圖
        showCurrent2();
    }

    function showPrev2() {
        counter2--; // 將 counter－1 指定上一張圖
        showCurrent2();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide2.addEventListener('mouseover', function () {
        interval2 = clearInterval(interval2);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide2.addEventListener('mouseout', function () {
        interval2 = window.setInterval(showNext2, timer2);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn2.addEventListener('click', showNext2, false);
    prevBtn2.addEventListener('click', showPrev2, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items2[0].classList.add('show2');

    // --------------圖片輪播slide3
    var counter3 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide3 = document.querySelector('#slide3'),
        items3 = slide3.querySelectorAll('img'), // 抓取所有 img
        itemsCount3 = items3.length, // 圖片總數 
        prevBtn3 = document.createElement('a'), // 上一張按鈕
        nextBtn3 = document.createElement('a'), // 下一張按鈕
        timer3 = 4000, // 4 秒換圖
        interval3 = window.setInterval(showNext3, timer3);  // 設定循環

    prevBtn3.classList.add('prev3'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn3.classList.add('next3'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide3.appendChild(prevBtn3); // 將按鈕加到 #slide 裡
    slide3.appendChild(nextBtn3);

    // 帶入目前要顯示第幾張圖 
    var showCurrent3 = function () {
        var itemToShow3 = Math.abs(counter3 % itemsCount3); // 取餘數才能無限循環
        [].forEach.call(items3, function (el) {
            el.classList.remove('show3'); // 將所有 img 的 class="show" 移除
        });
        items3[itemToShow3].classList.add('show3'); // 將要顯示的 img 加入 class="show"
    };

    function showNext3() {
        counter3++; // 將 counter+1 指定下一張圖
        showCurrent3();
    }

    function showPrev3() {
        counter3--; // 將 counter－1 指定上一張圖
        showCurrent3();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide3.addEventListener('mouseover', function () {
        interval3 = clearInterval(interval3);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide3.addEventListener('mouseout', function () {
        interval3 = window.setInterval(showNext3, timer3);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn3.addEventListener('click', showNext3, false);
    prevBtn3.addEventListener('click', showPrev3, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items3[0].classList.add('show3');

    // --------------圖片輪播slide4
    var counter4 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide4 = document.querySelector('#slide4'),
        items4 = slide4.querySelectorAll('img'), // 抓取所有 img
        itemsCount4 = items4.length, // 圖片總數 
        prevBtn4 = document.createElement('a'), // 上一張按鈕
        nextBtn4 = document.createElement('a'), // 下一張按鈕
        timer4 = 4000, // 4 秒換圖
        interval4 = window.setInterval(showNext4, timer4);  // 設定循環

    prevBtn4.classList.add('prev4'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn4.classList.add('next4'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide4.appendChild(prevBtn4); // 將按鈕加到 #slide 裡
    slide4.appendChild(nextBtn4);

    // 帶入目前要顯示第幾張圖 
    var showCurrent4 = function () {
        var itemToShow4 = Math.abs(counter4 % itemsCount4); // 取餘數才能無限循環
        [].forEach.call(items4, function (el) {
            el.classList.remove('show4'); // 將所有 img 的 class="show" 移除
        });
        items4[itemToShow4].classList.add('show4'); // 將要顯示的 img 加入 class="show"
    };

    function showNext4() {
        counter4++; // 將 counter+1 指定下一張圖
        showCurrent4();
    }

    function showPrev4() {
        counter4--; // 將 counter－1 指定上一張圖
        showCurrent4();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide4.addEventListener('mouseover', function () {
        interval4 = clearInterval(interval4);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide4.addEventListener('mouseout', function () {
        interval4 = window.setInterval(showNext4, timer4);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn4.addEventListener('click', showNext4, false);
    prevBtn4.addEventListener('click', showPrev4, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items4[0].classList.add('show4');

    // --------------圖片輪播slide5
    var counter5 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
        slide5 = document.querySelector('#slide5'),
        items5 = slide5.querySelectorAll('img'), // 抓取所有 img
        itemsCount5 = items5.length, // 圖片總數 
        prevBtn5 = document.createElement('a'), // 上一張按鈕
        nextBtn5 = document.createElement('a'), // 下一張按鈕
        timer5 = 4000, // 4 秒換圖
        interval5 = window.setInterval(showNext5, timer5);  // 設定循環

    prevBtn5.classList.add('prev5'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn5.classList.add('next5'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide5.appendChild(prevBtn5); // 將按鈕加到 #slide 裡
    slide5.appendChild(nextBtn5);

    // 帶入目前要顯示第幾張圖 
    var showCurrent5 = function () {
        var itemToShow5 = Math.abs(counter5 % itemsCount5); // 取餘數才能無限循環
        [].forEach.call(items5, function (el) {
            el.classList.remove('show5'); // 將所有 img 的 class="show" 移除
        });
        items5[itemToShow5].classList.add('show5'); // 將要顯示的 img 加入 class="show"
    };

    function showNext5() {
        counter5++; // 將 counter+1 指定下一張圖
        showCurrent5();
    }

    function showPrev5() {
        counter5--; // 將 counter－1 指定上一張圖
        showCurrent5();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide5.addEventListener('mouseover', function () {
        interval5 = clearInterval(interval5);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide5.addEventListener('mouseout', function () {
        interval5 = window.setInterval(showNext5, timer5);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn5.addEventListener('click', showNext5, false);
    prevBtn5.addEventListener('click', showPrev5, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items5[0].classList.add('show5');
})