document.addEventListener('DOMContentLoaded', function () {
    // تحديد العناصر المطلوبة: زر التبديل، أيقونة الزر، قائمة السحب، وCheckbox وضع السمة
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.fa-bars, .fa-xmark');
    const dropDownMenu = document.querySelector('.navbar-nav');
    const modeCheckbox = document.getElementById('mode');

    // استرجع السمة المحفوظة من localStorage
    const currentTheme = localStorage.getItem('theme');

    // تطبيق السمة المحفوظة على عنصر الـ body إذا كانت موجودة
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            modeCheckbox.checked = true; // تحديد الـ checkbox إذا كانت السمة داكنة
        }
    }

    // تبديل ظهور قائمة السحب وتغيير الأيقونة عند النقر على زر التبديل
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('show');
        const isOpen = dropDownMenu.classList.contains('show');
        toggleBtnIcon.className = isOpen
            ? 'fa-solid fa-xmark' // عرض أيقونة 'xmark' عندما تكون القائمة مفتوحة
            : 'fa-solid fa-bars'; // عرض أيقونة 'bars' عندما تكون القائمة مغلقة
    };

    // تحديث السمة بناءً على حالة الـ checkbox وحفظها في localStorage
    modeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark'); // تطبيق السمة الداكنة
            localStorage.setItem('theme', 'dark'); // حفظ تفضيل السمة الداكنة
        } else {
            document.body.removeAttribute('data-theme'); // إزالة سمة التظليل لتطبيق الوضع الفاتح
            localStorage.setItem('theme', 'light'); // حفظ تفضيل السمة الفاتحة
        }
    });
});
