

const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#btn-close')
const themeToggler = document.querySelector('.theme-toggler')
const main = document.querySelector('#main')


menuBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'block';
    sideMenu.style.animation = 'showMenu 400ms ease forwards';
})


closeBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'hiddeMenu 400ms ease forwards';
})


/**
 * Change Theme
 */
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})