"use strict"
// *for convert menu bar when you click on it to cancel icon 
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn'); // الزر الذي سيتم النقر عليه
    const toggleBtnIcon = document.querySelector('.fa-bars'); // الأيقونة داخل الزر
    const dropDownMenu = document.querySelector('.navbar-nav'); // القائمة المنسدلة

    // تأكد من أن الأيقونة تبدأ كـ 'fa-bars'
    toggleBtnIcon.className = 'fa-solid fa-bars';

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('show');

        const isOpen = dropDownMenu.classList.contains('show');

        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
});

//!=================================================================================

/* move Navbar color Between all icons each other (navbar-nav) when you scroll in the site */
//*It does not use an external library; it relies only on (js file)

let navmenulinks = document.querySelectorAll('.navbar a');

function navmenuScrollspy() {
    navmenulinks.forEach(navitem => {
        if (!navitem.hash) return;
        let section = document.querySelector(navitem.hash);
        if (!section) return;

        let position = window.scrollY + 100; 
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navbar a.active').forEach(link => link.classList.remove('active'));
            navitem.classList.add('active');
        } else {
            navitem.classList.remove('active');
        }
    });
}

window.addEventListener('load', navmenuScrollspy);
window.addEventListener('scroll', navmenuScrollspy);



//!=================================================================================
/* Change all Navbar Color when down  */
//*It does not use an external library; it relies only on (js file)

function scrollFixNav() {
    if (window.scrollY > 100) {
        document.querySelector("nav").style.backgroundColor = '#000000E6';
    } else {
        document.querySelector("nav").style.backgroundColor = 'transparent';
    }
}
// Call the function on scroll
window.addEventListener('scroll', scrollFixNav);

//!======================================================================================
// *من اجل اختفاء navbar  ,when you select section

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('#navbarNavDropdown');

        if (window.innerWidth <= 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

//!======================================================================================

// إغلاق الـnavbar عند النقر في أي مكان خارج الـnavbar
document.addEventListener('click', function (event) {
    var navbarCollapse = document.querySelector('#navbarNavDropdown');
    var navbarToggler = document.querySelector('.navbar-toggler');

    if (window.innerWidth <= 992 && navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        navbarToggler.click();
    }
});
//!======================================================================================
