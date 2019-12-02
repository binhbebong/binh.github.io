var burger = document.querySelector('.burger');
var navMenu = document.querySelector('.nav-links');
var burgerLine = document.querySelectorAll('.burger > div');
var navMenuItems = document.querySelectorAll('.nav-links > .nav-link');
var leftArrow = document.querySelector('.laptop-select > .left');
var rightArrow = document.querySelector('.laptop-select > .right');
var backToTop = document.getElementsByClassName('page-backToTop');
var header = document.getElementsByTagName('header');
var pageContent = document.getElementsByClassName('page-content');
burger.addEventListener('click',function(){
    navMenu.classList.toggle('nav-active');
    burger.classList.toggle('burger-break');
    navMenuItems.forEach((navMenuItem,index) => {
        if(!navMenuItem.style.animation){
            navMenuItem.style.animation = `slide-in .8s ease-in forwards ${index / 8 + 0.5}s `
        }else navMenuItem.style.animation = '';
    });
})
window.addEventListener('scroll',function(){
    let positionScrolled = this.pageYOffset;
    let AboutUs = document.getElementsByClassName('page-aboutUs');
    let AboutUsPosition = AboutUs[0].offsetTop - 300;
    if(positionScrolled > 150){
        header[0].classList.add('fixed-menu');
    } else header[0].classList.remove('fixed-menu');
    this.console.log(AboutUsPosition);
    if(positionScrolled > AboutUsPosition){
        backToTop[0].classList.add('active');
    } else backToTop[0].classList.remove('active');
})

backToTop[0].addEventListener('click',function(){
    pageContent[0].scrollIntoView({behavior : "smooth", block: "start"});
})