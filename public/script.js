const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container') ;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=> {
    let scroll_position= window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "rgba(46, 46, 56, .99)";
        //header.style.backgroundImage = "linear-gradient(135deg,rgb(30, 30, 34) 0%, rgb(58, 58, 58)100%)";
    } else {
        header.style.backgroundColor = "rgba(31, 30, 30, 0.1)";
        //header.style.backgroundImage = "none";
    }
});

menu_items.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});