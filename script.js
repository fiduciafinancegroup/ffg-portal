// =========================
// SMOOTH SCROLL (except logo)
// =========================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        // Skip if it's a real page (like index.html or services pages)
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


// =========================
// FAQ ACCORDION (FULL)
// =========================
document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        // Close others (clean UX)
        document.querySelectorAll(".content").forEach(c => {
            if (c !== content) c.style.display = "none";
        });

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});


// =========================
// HORIZONTAL SCROLL DRAG
// =========================
const slider = document.querySelector(".horizontal-scroll");

let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}


// =========================
// SCROLL ANIMATION (FADE IN)
// =========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .section, .step-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// BUTTON CLICK EFFECT
// =========================
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


// =========================
// ACTIVE NAV HIGHLIGHT
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
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
