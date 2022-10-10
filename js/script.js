// @ts-nocheck
// Nav Active
const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('close');
const tabOne = document.getElementById('tab-1');
const tabTwo = document.getElementById('tab-2');
const tabThree = document.getElementById('tab-3');

hamburger.addEventListener("click", function () {
    drawer.classList.remove('hide');
});

closeButton.addEventListener("click", function(){
    drawer.classList.add('hide');
})

tabOne.addEventListener("click", function(){
    if (document.getElementById('panel-1').classList.contains('hide')) {
        document.getElementById('panel-1').classList.remove('hide')
        document.getElementById('panel-2').classList.add('hide');
        document.getElementById('panel-3').classList.add('hide');
    }
})

tabTwo.addEventListener("click", function(){
    if (document.getElementById('panel-2').classList.contains('hide')) {
        document.getElementById('panel-2').classList.remove('hide');
        document.getElementById('panel-1').classList.add('hide');
        document.getElementById('panel-3').classList.add('hide');
    }
})
tabThree.addEventListener("click", function(){
    if (document.getElementById('panel-3').classList.contains('hide')) {
        document.getElementById('panel-3').classList.remove('hide');
        document.getElementById('panel-1').classList.add('hide');
        document.getElementById('panel-2').classList.add('hide');
    }
})

AOS.init();

tabOne.addEventListener("click", function () {
    document.getElementById('panel-1').classList.remove('aos-animate');
    setTimeout(function () {
        document.getElementById('panel-1').classList.add('aos-animate');
    }, 400);
});

tabTwo.addEventListener("click", function () {
    document.getElementById('panel-2').classList.remove('aos-animate');
    setTimeout(function () {
        document.getElementById('panel-2').classList.add('aos-animate');
    }, 400);
});

tabThree.addEventListener("click", function () {
    document.getElementById('panel-3').classList.remove('aos-animate');
    setTimeout(function () {
        document.getElementById('panel-3').classList.add('aos-animate');
    }, 400);
});
// var elements = document.querySelectorAll('[id=test]');
// // var names = '';
// // for(var i = 0; i < elements.length; i++) {
// //     names += elements[i].name;
// // }
// console.log(elements);