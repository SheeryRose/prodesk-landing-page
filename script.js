// ===============================
// Dark Mode Toggle
// ===============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️ Light";
    } else {
        themeToggle.textContent = "🌙 Dark";
    }
});


// ===============================
// Hamburger Menu Toggle
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// Close Mobile Menu After Click
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// Reset Menu On Screen Resize
// ===============================

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
    }
});
