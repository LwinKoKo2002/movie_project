const nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
        if(window.scrollY >= 100){
                nav.classList.add('navbar-black');
        }else{
                nav.classList.remove('navbar-black');
        }
})

new WOW().init();