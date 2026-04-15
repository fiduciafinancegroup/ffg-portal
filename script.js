// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        // allow page navigation (for service pages)
        if (href.includes(".html")) return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


// ==========================
// FAQ ACCORDION (UPDATED)
// ==========================
document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {

        const item = button.parentElement;

        // close all others (accordion behavior)
        document.querySelectorAll(".faq-item").forEach(el => {
            if (el !== item) el.classList.remove("active");
        });

        // toggle current
        item.classList.toggle("active");
    });
});


// ==========================
// HORIZONTAL DRAG SCROLL (PROCESS)
// ==========================
const slider = document.querySelector(".scroll");

let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .section, .step, .faq-item").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// ==========================
// ACTIVE NAV LINK
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
