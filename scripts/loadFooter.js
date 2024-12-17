const footer = document.createElement('div');
footer.innerHTML = `<div class="bg-body-tertiary shadow-lg" data-bs-theme="dark">
    <footer
        class="container d-flex justify-content-between align-items-center py-3 my-4 border-top text-body-secondary align-items-center flex-wrap">
        <div class="d-flex align-items-center me-3 py-2">
            <i class="bi bi-ethernet mx-2 h3 my-0"></i>
            <p class="my-0 mx-0">© 2024 The Socket Society</p>
        </div>
        <p class="my-0">by Matteo Fuso - 5F</p>
    </footer>
</div>`;

const footer_placeholder = document.getElementById('footer_placeholder');
footer_placeholder.replaceWith(footer.firstChild);