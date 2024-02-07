console.log("방가방가")

$('.nav>ul>li').mouseover(function () {
    console.log($(this))
    $(this).find('.submenu').stop().slideDown();
});

$('.nav>ul>li').mouseout(function () {
    $(this).find('.submenu').stop().slideUp();
});

//banner
// console.log(주머니+1)
let currentindex = 0;
// setInterval(할일,시간); setInterval(function(){},시간);
// setInterval(function(){},시간(1초)); >> 1초마다 할일이 실행
// setInterval(function(){},3000); >> 3초마다 할일이 실행
setInterval(function () {
    if (currentindex < 2) {
        currentindex++;
    } else {
        currentindex = 0;
    }

    // console.log(currentIndext)
    let slideposition = currentindex * (-669) + "px";
    console.log(slideposition)
    // $('.slideList').animate({실행문},시간)
    $('.slideList').animate({
        top: slideposition
    }, 400)
}, 3000);
/* 탭(tap)메뉴
.find() : css에서 띄어쓰기(하위요소(자손))와 동일
.hide() : display: none;
.show() : display: block;
.next() : 형제 중 바로 밑 동생, 내가 셋째라면 넷째를 의미
.parent() : 바로 위 상위요소(부모요소를 호출)
.siblings() : 나를 제외한 형제들
 */
let tabmenu = $('.notice');
tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();
tabmenu.find('ul>li>a').click(function (e) {
    e.preventDefault(); //#때문에 튕기는 현상 막기
    $(this).parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    $(this).next().show();
});