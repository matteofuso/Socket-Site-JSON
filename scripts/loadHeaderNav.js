const header = document.createElement("div");
header.innerHTML = `<div class="navbar navbar-expand-lg sticky-top flex-column py-0">
    <header class="bg-body py-3 border-bottom shadow-lg w-100" data-bs-theme="dark">
        <div class="container d-flex p-2 justify-content-between align-items-center">
            <a href="./" class="link-body-emphasis d-flex text-decoration-none align-items-center">
                <i class="bi bi-ethernet mx-3 h2 my-0"></i>
                <p class="h4 my-0">Socket</p>
            </a>
            <div class="d-flex align-items-center">
                <div class="dropdown bd-mode-toggle">
                    <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme"
                        type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                        <i class="bi bi-circle-half"></i>
                        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center active"
                                data-bs-theme-value="auto" aria-pressed="true">
                                <i class="bi bi-circle-half me-2"></i>
                                Auto
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="light" aria-pressed="false">
                                <i class="bi bi-sun-fill me-2"></i>
                                Chiaro
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="dark" aria-pressed="false">
                                <i class="bi bi-moon-fill me-2"></i>
                                Scuro
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler mx-3 d-lg-none link-body-emphasis" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="bi bi-list h1"></i>
                </button>
            </div>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-0 shadow-lg w-100" data-bs-theme="dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav my-3">
                </ul>
            </div>
        </div>
    </nav>
</div>`;

const pages = [
  {
    title: "Home",
    link: "index.html",
  },
  {
    title: "Le Socket",
    link: "socket.html",
  },
  {
    title: "La Pila ISO/OSI",
    link: "iso-osi.html",
  },
  {
    title: "Architettura Client Server",
    link: "client-server.html",
  },
  {
    title: "Glossario",
    link: "glossario.html",
  },
];

const header_nav_placeholder = document.getElementById(
  "header_nav_placeholder"
);
const selected_id = header_nav_placeholder.getAttribute("data-selected-id");
const navbar = header.querySelector("nav ul");
pages.forEach((page, index) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = page.link;
  a.textContent = page.title;
  if (index == selected_id) {
    a.classList.add("active");
    a.setAttribute("aria-current", "page");
  }
  li.appendChild(a);
  navbar.appendChild(li);
});
header_nav_placeholder.replaceWith(header.firstChild);
