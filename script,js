// =========================
// SMOOTH SCROLL NAVIGATION
// =========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // only apply smooth scroll for same-page links
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


// =========================
// FADE-IN ANIMATION ON SCROLL
// =========================
const elements = document.querySelectorAll('.service-card, .team-member, .hero h2, .hero p');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});


// =========================
// ACTIVE NAV HIGHLIGHT (OPTIONAL)
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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