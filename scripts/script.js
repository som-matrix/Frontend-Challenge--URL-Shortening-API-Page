'use strict';
const menu = document.querySelector('.menu');
const navItems = document.querySelector('.nav__middle');
menu.addEventListener('click',()=>{
    menu.classList.toggle('toggle');
    navItems.classList.toggle('nav__open');
})
