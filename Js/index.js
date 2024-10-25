"use strict"
// /* for write animation in (content header) and move (Cursor with writing Words) */
//*It does not use an external library; it relies only on (js file)

const texts = ["Developer", "Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

(function type() {
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('text').textContent = letter;

    if (!isDeleting && index === currentText.length) {
        setTimeout(() => isDeleting = true, 1000); // Wait before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
    }

    const speed = isDeleting ? 100 : 150; // Adjust speed for typing/deleting
    setTimeout(type, speed);

})();



//!=================================================================================
//*using Based on two libraries are (jQuery && Waypoint)
// for blue-section counter 

$(document).ready(function () {
    function startCounter() {
        $('.counter').each(function () {
            var $this = $(this);
            $this.counterUp({
                delay: 4,  // تقليل الوقت بين كل عددة ليكون أكثر سلاسة
                time: 2000  // الوقت الإجمالي للعد (4 ثواني)
            });
        });
    }


    var waypoint = new Waypoint({
        element: document.querySelector('.blue-section'),
        handler: function (direction) {
            startCounter();
            this.destroy();
        },
        offset: '80%'
    });
});

//!=================================================================================
// for portfolio-details section to swiping cards between each other (using Swiper.js library)
// * for show images in (portfolio section) using (glightbox library)

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = GLightbox({
        selector: '.work-box a[href$=".jpg"]',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        width: '90%',
        height: 'auto',
        closeButton: true
    });
});

//!=================================================================================
//  Correct scrolling position upon page load for URLs containing hash links.
//*It does not use an external library; it relies only on (js file)


window.addEventListener('load', function (e) {
    if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
            setTimeout(() => {
                let section = document.querySelector(window.location.hash);
                let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                window.scrollTo({
                    top: section.offsetTop - parseInt(scrollMarginTop),
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

//!=================================================================================

//* using for stop scroll when you open photo in (portfolio section) (using jQuery و Lightbox2 library)

// $(document).ready(function () {

//     $('a[data-lightbox]').on('click', function () {
//         document.body.style.overflow = 'hidden';
//     });

//     $(document).on('click', '.lb-close', function () {
//         document.body.style.overflow = '';
//     });
// });

//!=================================================================================

// for about-Section of progress-bar  (Using Waypoints Library)

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    function updateProgressBars(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute('data-value') + '%';
            }
        });
    }

    const observer = new IntersectionObserver(updateProgressBars, {
        threshold: 0.7
    });

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});

//!=================================================================================
// for swiping cards of Testimonials Section (using Swiper.js library)

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.testimonials .swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        spaceBetween: 30,
        effect: 'slide',
    });

    swiper.update();
});
//!=================================================================================
// If the blue arrow approaches the home page, it disappears.(End footer section) ( using Intersection Observer API library)
//* Intersection Observer API =>> It is a programming interface that helps you monitor when certain elements appear or disappear within the viewport.
const homeSection = document.querySelector('#home');
const backToTopButton = document.querySelector('.back-to-top');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            backToTopButton.classList.remove('active');
        } else {
            backToTopButton.classList.add('active');
        }
    });
}, { threshold: 0.1 });

observer.observe(homeSection);

//!=================================================================================
// *Toggle mobile nav dropdowns
//*It does not use an external library; it relies only on (js file)

document.querySelectorAll('.navitem .toggle-dropdown').forEach(navitem => {
    navitem.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
    });
});

//!=================================================================================


//!======================================================================================
// * for navbar-item is called drowdown when you click it that will appear
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', function (event) {
            document.querySelectorAll('.dropdown-menu, .deepdropdown .dropdown-menu').forEach(menu => {
                if (menu !== this.nextElementSibling) {
                    menu.style.display = 'none';
                }
            });

            const menu = this.nextElementSibling;
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }

            event.stopPropagation();
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown-menu, .deepdropdown .dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    });
});

//!======================================================================================

// * message show if you used and open my site (i used Sweetalert library )

document.addEventListener('DOMContentLoaded', function () {
    // تحقق إذا كانت الرسالة قد ظهرت في الجلسة الحالية
    const hasSeenWelcomeMessage = sessionStorage.getItem('hasSeenWelcomeMessage');

    if (!hasSeenWelcomeMessage) {
        // إضافة فئة لتثبيت التمرير
        document.body.classList.add('no-scroll');

        const userLang = navigator.language || navigator.userLanguage;
        const isArabic = userLang.startsWith('ar');

        Swal.fire({
            title: isArabic ? 'مرحبًا!' : 'Welcome!',
            text: isArabic ? 'سعيد بزيارتك لموقعي!' : 'I am happy to see you on my website!',
            icon: 'success',
            confirmButtonText: isArabic ? 'شكراً' : 'Thank you'
        }).then((result) => {
            if (result.isConfirmed) {
                // إزالة الفئة بعد الضغط على زر "شكراً"
                document.body.classList.remove('no-scroll');

                // حفظ الحالة في sessionStorage لمنع الرسالة من الظهور مرة أخرى في الجلسة الحالية
                sessionStorage.setItem('hasSeenWelcomeMessage', 'true');
            }
        });
    }
});




//!======================================================================================
// ^ for reset load page once again and stop on the same section when you reset load the page لما تعيد تحميل الصفحة مرة اخري هتفضل ع نفس جزء
// تخزين الموقع الحالي عند التمرير
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition);
});

// استعادة الموقع عند تحميل الصفحة
window.addEventListener('load', () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition));
    }
});

//!======================================================================================
// for portfolio-details section to swiping cards between each other (using Swiper.js library)

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.init-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 3000,
        spaceBetween: 30,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

//!======================================================================================
//  Animation on scroll function and init (using Aos Library)

function aosInit() {
    AOS.init({
        duration: 500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);


//!======================================================================================

//  *######### just for preload when you preload this website .. it will appear load-circle 

document.addEventListener('DOMContentLoaded', function () {
    // تقليل الوقت الظاهر للـ preloader
    setTimeout(function () {
        // إضافة الفئة لإنهاء عرض الـ preloader
        document.querySelector('.loading').classList.add('loading-end');
        // إخفاء الـ preloader بعد فترة قصيرة
        setTimeout(function () {
            document.querySelector('.loading').style.display = 'none';
        }, 300); // تقليل هذا الوقت لجعل إخفاء الـ preloader أسرع
    }, 500); // تقليل هذا الوقت لجعل عرض الـ preloader أسرع
});


//!======================================================================================






