const topmove = document.querySelector(".top");
const mainTop = document.querySelector(".main_top");
const arrowtop = document.querySelector(".aroow");

topmove.addEventListener("click",function () {
    mainTop.style.top="0%";
});
arrowtop.addEventListener("click",function () {
    mainTop.style.top="-100%";
});


const rightmove = document.querySelector(".right");
const mainRight = document.querySelector(".main_right");
const arrowright = document.querySelector(".right_arrow");

rightmove.addEventListener("click",function () {
    mainRight.style.right="0";
    mainRight.style.display="flex";
});

arrowright.addEventListener("click",function () {
    mainRight.style.right="100%";
    mainRight.style.display="none";
});


const bottonmove = document.querySelector(".bottom");
const matinBottom = document.querySelector(".main_bottom");
const bottomarrow = document.querySelector(".bottom_arrow");

bottonmove.addEventListener("click",function () {
    matinBottom.style.bottom="0";
    matinBottom.style.display="flex";
});

bottomarrow.addEventListener("click",function () {
    matinBottom.style.bottom="-100%";
    matinBottom.style.display="none";
});


const leftmove = document.querySelector(".left");
const mainLeft = document.querySelector(".main_left");
const leftArrow = document.querySelector(".left_arrow");

leftmove.addEventListener("click",function () {
    mainLeft.style.left="0";
});
leftArrow.addEventListener("click",function () {
    mainLeft.style.left="-100%";
});