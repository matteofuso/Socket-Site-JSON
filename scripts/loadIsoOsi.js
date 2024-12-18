// Update the slide when the hash changes
function updateSlide() {
    const hash = window.location.hash;
    if (hash) {
        const slide = document.querySelector(hash);
        if (slide && slide.classList.contains("carousel-item")) {
            const slideIndex = Array.from(slide.parentElement.children).indexOf(slide);
            carousel.to(slideIndex);
        }
    }
}

// Initialize the carousel
const carousel = new bootstrap.Carousel('#carouselExample')
// Event handlers
document.addEventListener("DOMContentLoaded", updateSlide);
window.addEventListener("hashchange", updateSlide);

const loadIsoOsi = function (data) {
    // Load page title
    const title = document.getElementById("title");
    title.innerHTML = data.title;

    // Load content
    const osiTitle = document.getElementById("osi-title");
    osiTitle.innerHTML = data["nav-title"];

    // Load sections of the pages
    const sections = document.getElementById("sections");
    // Load every section from the list
    data.section.forEach((e) => {
        sections.innerHTML += `
        <div class="my-4">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>`;
    });

    // Load carousel
    const carouselContainer = document.getElementById("carousel-container");
    const osiModel = document.getElementById("osi-model");
    const colors = ["text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-danger", "text-bg-warning", "text-bg-info", "bg-body-tertiary"];
    // Load each level of the OSI model
    data.carousel.forEach((e, i) => {
        const active = i === 0 ? "active" : "";
        // Load the slide
        const slide = `
        <div class="carousel-item ${active}" id="${e.title.toLowerCase().replaceAll(" ", "-")}">
            <h4>${e.title}</h4>
            ${e.description.startsWith("<p>") ? e.description : `<p>${e.description}</p>`}
        </div>`;
        carouselContainer.innerHTML += slide;
        // Load the iso osi model button for navigation
        osiModel.innerHTML += `
        <div class="${colors[i]} mx-2 my-2 px-4 py-3 text-center" type="button"
            data-bs-target="#carouselExample" data-bs-slide-to="${6 - i}">
            ${data.carousel[6 - i].title}
        </div>`
    })
}

// Load the JSON data
loadJSON("JSON/iso_osi.json", loadIsoOsi);