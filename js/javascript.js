let btn = document.querySelector('.mobile-menu-icon');
let nav = document.querySelector('.main-nav');


function abrirMenu(){
    nav.classList.toggle('active')
}
    
btn.addEventListener("click", abrirMenu)