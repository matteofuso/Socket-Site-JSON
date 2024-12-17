const contentIsoOsi = {
    "title": "ISO/OSI",
    "section": [
        {
            "title": "La struttura a livelli della pila ISO/OSI",
            "description": `Il modello ISO/OSI è uno standard che definisce le basi per le comunicazioni tramite <a href="glossario.html#Internet">internet</a>.
                Questo funziona tramite un approccio a livelli, dove ognuno elabora i dati ricevuti da quello precedente
                e li invia a quello successivo.
                Questa divisione permette di rendere ogni livello indipendente e più facile da gestire.
                Lo standard inoltre favorisce inoltre la comunicazione tra dispositivi di produttori diversi, i quali
                erano soliti a svilupparne uno proprietario.`,
        },
    ],
    "nav-title": "I livelli del modello OSI",
    "carousel": [
        {
            "title": "Livello Fisico",
            "description": `Il <strong>livello fisico</strong> è il primo livello della pila e si occupa della trasmissione dei
                                    dati grezzi attraverso mezzi di comunicazione, come cavi di rame, fibre ottiche o
                                    onde radio. Oltre a questi fanno parte del primo livello le schede di rete, tutte le
                                    tecnologie per permettono di <a href="glossario.html#Modulazione">modulare</a> o demodulare il segnale ed eventuali gestione
                                    delle collisioni nei canali bidirezionali.`,
        },
        {
            "title": "Livello di Collegamento Dati",
            "description": `Il <strong>livello di collegamento</strong> dati si occupa di <a href="glossario.html#Incapsulamento">incapsulare</a> il pacchetto proveniente
                                    dallo strato superiore in un nuovo pacchetto contenente l’indirizzo <a href="glossario.html#MAC">MAC</a> sorgente e
                                    di destinazione, oltre a garantire la corretta ricezione dei pacchetti tramite il
                                    <a href="glossario.html#CRC">CRC</a>. Questo livello permette l'invio del pacchetto al corretto destinatario ma solo
                                    all’interno di una <a href="glossario.html#LAN">LAN</a>.`,
        },
        {
            "title": "Livello di Rete",
            "description": `Il <strong>livello di rete</strong> si occupa dell'instradamento dei pacchetti tra reti diverse.
                                    Questo permette di inviare pacchetti anche tra dispositivi di reti diverse, tutto
                                    questo grazie ad un indirizzo IP che individua unicamente un dispositivo tra diverse
                                    reti. Questo livello si occupa anche della scelta del percorso più breve nella per
                                    raggiungere una rete esterna`,
        },
        {
            "title": "Livello di Trasporto",
            "description": `<p>
                                    Il <strong>livello di trasporto</strong> permette la comunicazione tra processi distinti nello stesso dispositivo, grazie alle porte. Senza di queste non ci sarebbe niente a distinguere un pacchetto destinato a un processo rispetto ad un altro. Inoltre definisce due modalità di condivisione, TCP e UDP:
                                    TCP (Transmission Control Protocol) è un protocollo che garantisce la ricezione corretta ed ordinata dei pacchetti, tramite una sincronizzazione iniziale e finale denominate rispettivamente three way handshake e four way handshake. 
                                    UDP (User Datagram Protocol) è un protocollo che non garantisce ne la ricezione, ne l’ordine di ricezione. Questo protocollo è utilizzato nelle applicazioni dove è più importante la velocità e non importa se qualche pacchetto viene perso.<br>

                                    Le porte prima citate, hanno dimensione 16bit, quindi vanno da 0 a 65535 e sono divise in:
                                </p>
                                <ul>
                                    <li><strong>Well Known</strong> Ports: Le porte che vanno dalla 0 alla 1023, sono riservate ad applicazioni particolari come HTTP o SSH</li>
                                    <li><strong>Registered</strong> Ports: Le porte cha vanno da 1024 a 49151 sono le cosiddette porte registrate, sono utilizzate da alcuni servizi ma possono anche essere utilizzate dai client</li>
                                    <li><strong>Private Ports</strong>: Le porte che vanno da 49152 a 65535, non hanno un uso specifico e possono essere utilizzare liberamente da tutti i processi</li>
                                </ul>
                                <p>
                                    La coppia di indirizzo IP e porta è definita <a href="socket.html">Socket</a>.
                                </p>`
        },
        {
            "title": "Livello di Sessione",
            "description": `Il <strong>livello di sessione</strong> fornisce servizi in grado di gestire le sessioni di comunicazione tra processi, come l’apertura, la chiusura e la sincronizzazione.`,
        },
        {
            "title": "Livello di Presentazione",
            "description": `Il <strong>livello di presentazione</strong> si occupa di crittografia e rendere visualizzabili i dati ricevuti per l’utente. Un esempio di servizio fornito da questo livello sono tutti i formati di immagini`,
        },
        {
            "title": "Livello di Applicazione",
            "description": `Il <strong>livello di applicazione</strong> fornisce l’interfaccia tra l’utente e i dati ricevuti, tramite un programma.`,
        },
    ],
}

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
const carousel = new bootstrap.Carousel('#carouselExample')
document.addEventListener("DOMContentLoaded", updateSlide);
window.addEventListener("hashchange", updateSlide);

const title = document.getElementById("title");
title.innerHTML = contentIsoOsi.title;
document.title += " - " + contentIsoOsi.title;

const osiTitle = document.getElementById("osi-title");
osiTitle.innerHTML = contentIsoOsi["nav-title"];

const sections = document.getElementById("sections");
contentIsoOsi.section.forEach((e) => {
    sections.innerHTML += `
        <div class="my-4">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>`;
});

const carouselContainer = document.getElementById("carousel-container");
const osiModel = document.getElementById("osi-model");
const colors = ["text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-danger", "text-bg-warning", "text-bg-info", "bg-body-tertiary"];
contentIsoOsi.carousel.forEach((e, i) => {
    const active = i === 0 ? "active" : "";
    const slide = `
        <div class="carousel-item ${active}" id="${e.title.toLowerCase().replaceAll(" ", "-")}">
            <h4>${e.title}</h4>
            ${e.description.startsWith("<p>") ? e.description : `<p>${e.description}</p>`}
        </div>`;
    carouselContainer.innerHTML += slide;
    osiModel.innerHTML+=`
        <div class="${colors[i]} mx-2 my-2 px-4 py-3 text-center" type="button"
            data-bs-target="#carouselExample" data-bs-slide-to="${6-i}">
            ${contentIsoOsi.carousel[6-i].title}
        </div>`
});