const indexContent = {
    "hero": {
        "img": "images/code.png",
        "title": "Le Socket",
    },
    "indexContent": [
        {
            "title": "In breve",
            "description": "Una <strong>socket</strong> è un'interfaccia software che consente a due applicazioni di comunicare tra\
                loro, tramite internet.\
                Sta alla base della comunicazione di rete, in particolare nei protocolli applicativi come HTTP o FTP. Le\
                socket sono fondamentali per\
                la trasmissione di dati in architetture come Client-Server e Peer-to-Peer.",
        }
    ],
    "navigation": {
        "title": "Scopri di più",
        "cards": [
            {
                "image": "images/code.png",
                "alt": "Codice di una socket",
                "title": "Le Socket",
                "description": "Scopri di più sul funzionamento di questo potente mezzo di comunicazione.",
                "link": "socket.html",
            },
            {
                "image": "images/stack.png",
                "alt": "La pila ISO OSI",
                "title": "La pila ISO OSI",
                "description": "Scopri di più sul funzionamento di questo standard ampiamente adottato in tutto il mondo.",
                "link": "iso-osi.html",
            },
            {
                "image": "images/client-server.png",
                "alt": "Esemplificazione dell'architettura Client-Server",
                "title": "L'architettura Client-Server",
                "description": "Scopri di più sul su questo paradigma base della comunicazione.",
                "link": "client-server.html",
            },
        ]
    }
}

const hero = document.getElementById("hero");
hero.querySelector("h1").innerHTML = indexContent.hero.title;
hero.style.backgroundImage = `url("${indexContent.hero.img}")`

const sections = document.getElementById("sections")
indexContent.indexContent.forEach((e) => {
    sections.innerHTML += `
        <div class="my-4">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>`;
})

const navigationTitle = document.getElementById("navigation-title");
navigationTitle.textContent = indexContent.navigation.title;

const navigation_container = document.getElementById("navigation-container");
const card_container = document.getElementById("card-container");
navigation_container.querySelector("h3").textindexContent = indexContent.navigation.title;
indexContent.navigation.cards.forEach((e) => {
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