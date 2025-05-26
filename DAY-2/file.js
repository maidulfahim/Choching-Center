// file.js

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// যোগাযোগ ফর্ম সাবমিশন
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "আপনার বার্তা সফলভাবে পাঠানো হয়েছে!";
    contactForm.reset();
  });
}

// রেজিস্ট্রেশন ফর্ম সাবমিশন
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('registrationMessage').textContent = "রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!";
    registrationForm.reset();
  });
}

// ডার্ক মোড টগল
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
}
