document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');
    let toggleBtn = document.querySelector('.header__toggle-btn');

    toggleBtn.addEventListener('click', function () {
        header.classList.toggle('header--active');
    });

    // 👉 Close nav when any nav link is clicked (for mobile)
    let navLinks = document.querySelectorAll('.header nav a'); // Adjust selector if needed
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('header--active');
        });
    });

    // 🌙 Dark Mode Toggle
    const modeToggle = document.getElementById("modeChange");
    const userPreference = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (userPreference === "dark" || (!userPreference && systemPreference === "dark")) {
        modeToggle.checked = true;
        document.body.classList.add("dark-mode");
    }

    modeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header'); // Replace with your header selector
    if (window.scrollY > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});

// Select all nav links
const navLinks = document.querySelectorAll('.header__nav-link');

// Click event: Update active class on click
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active')); // remove active from all
    this.classList.add('active'); // add active to clicked link
  });
});

// Scroll event: Update active class on scroll
window.addEventListener('scroll', () => {
  let currentSection = "";

  // Loop through sections
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  // Update nav links based on current section
  navLinks.forEach(link => {
    link.classList.remove('header__nav-link--active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('header__nav-link--active');
    }
  });
});