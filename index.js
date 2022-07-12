const menuBtn = document.querySelector('#menu-btn');
const aside = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const themeToggle = document.querySelector('.theme-toggle');

menuBtn.addEventListener('click',()=>{
    aside.style.display="block"
})
closeBtn.addEventListener('click',()=>{
    aside.style.display='none';
})
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeToggle.querySelector('span').classList.toggle('active')
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active')
})