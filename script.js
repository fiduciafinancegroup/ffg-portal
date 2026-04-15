// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

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


// FAQ ACCORDION
document.querySelectorAll(".faq-item button").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        document.querySelectorAll(".content").forEach(c => {
            if (c !== content) c.style.maxHeight = null;
        });

        content.style.maxHeight =
            content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});


// DRAG SCROLL
const slider = document.querySelector(".horizontal-scroll");

let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener("mousedown", e => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);

    slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}


// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .section").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    observer.observe(el);
});


// ACTIVE NAV
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
