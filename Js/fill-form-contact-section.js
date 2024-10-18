// *دا عشان لو user بيملي form ,l]oga جزء او type في form يظهرلة رسالة 
// !you must fill all form in (Contact Section)
document.querySelector('.contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال النموذج مؤقتًا للتحقق من البيانات

    let valid = true;

    // تحديد لغة الجهاز
    const userLang = navigator.language || navigator.userLanguage;
    const isArabic = userLang.startsWith('ar');

    // التحقق من حقل الاسم
    const name = document.getElementById('name');
    if (name.value.trim().length < 4) {
        valid = false;
        name.nextElementSibling.textContent = isArabic 
            ? 'الرجاء إدخال 4 أحرف على الأقل!' 
            : '!Please enter at least 4 characters';
        name.nextElementSibling.style.color = 'red'; // تعيين اللون الأحمر
    } else {
        name.nextElementSibling.textContent = '';
    }

    // التحقق من البريد الإلكتروني
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        email.nextElementSibling.textContent = isArabic 
            ? 'الرجاء إدخال بريد إلكتروني صحيح!' 
            : '!Please enter a valid email address';
        email.nextElementSibling.style.color = 'red'; // تعيين اللون الأحمر
    } else {
        email.nextElementSibling.textContent = '';
    }

    // التحقق من الموضوع
    const subject = document.getElementById('subject');
    if (subject.value.trim().length < 8) {
        valid = false;
        subject.nextElementSibling.textContent = isArabic 
            ? 'الرجاء إدخال 8 أحرف على الأقل للموضوع!' 
            : '!Please enter at least 8 characters for the subject';
        subject.nextElementSibling.style.color = 'red'; // تعيين اللون الأحمر
    } else {
        subject.nextElementSibling.textContent = '';
    }

    // التحقق من الرسالة
    const message = document.querySelector('textarea[name="message"]');
    if (message.value.trim() === '') {
        valid = false;
        message.nextElementSibling.textContent = isArabic 
            ? 'الرجاء كتابة رسالة!' 
            : '!Please write a message';
        message.nextElementSibling.style.color = 'red'; // تعيين اللون الأحمر
    } else {
        message.nextElementSibling.textContent = '';
    }

    // إذا كانت جميع الحقول صالحة، يمكن إرسال النموذج
    if (valid) {
        this.submit();
    }
});