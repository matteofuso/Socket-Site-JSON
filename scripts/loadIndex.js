const loadIndex = function (data) {
    // Load hero content
    const hero = document.getElementById("hero");
    hero.querySelector("h1").innerHTML = data.hero.title;
    hero.style.backgroundImage = `url("${data.hero.img}")`

    // Load index sections
    const sections = document.getElementById("sections")
    // Load every section from the list
    data.indexContent.forEach((e) => {
        sections.innerHTML += `
        <div class="my-4">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>`;
    })

    // Load navigation cards title
    const navigationTitle = document.getElementById("navigation-title");
    navigationTitle.textContent = data.navigation.title;

    // Load cards content
    const navigation_container = document.getElementById("navigation-container");
    const card_container = document.getElementById("card-container");
    navigation_container.querySelector("h3").textdata = data.navigation.title;
    // Load every card from the list
    data.navigation.cards.forEach((e) => {
        card_container.innerHTML += `
        <div class="card">
            <div class="ratio ratio-4x3">
                <img src="${e.image}" class="card-img-top fit-cover" alt="${e.alt}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
                <a href="${e.link}" class="btn btn-primary">Vai alla pagina</a>
            </div>
        </div>
    `
    })
}

// Load the JSON data
loadJSON("JSON/index.json", loadIndex);