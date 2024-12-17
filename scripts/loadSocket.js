const socketContent = {
    "title": "Socket",
    "sections": [
        {
            "title": "Che cos'è una socket?",
            "description": `<p class="mb-2">
                                Una <strong>socket</strong> è un'<a href="glossario.html#Interfaccia">interfaccia</a> software che permette lo scambio di <strong>informazioni</strong> tra due
                                applicativi, sia
                                in maniera locale che remota.
                                Opera principalmente attraverso una <a href="glossario.html#Rete">rete</a>, ma può essere utilizzato anche con meccanismi di <a href="glossario.html#IPC">IPC</a>.
                                Dal punto di vista concettuale, è basato sull’architettura <a href="client-server.html">client-server</a>, e utilizza le sue
                                primitive
                                per il suo funzionamento.
                                Le socket sono alla base di molti <a href="glossario.html#Protocollo">protocolli</a>, come <a href="glossario.html#DNS">DNS</a>, <a href="glossario.html#HTTP">HTTP</a> o <a href="glossario.html#FTP">FTP</a>.<br>
                                Le socket forniscono un canale di comunicazione <strong>bidirezionale</strong>, che può essere sincrono a
                                asincrono e
                                ognuna è definita tramite la combinazione di tre elementi fondamentali:
                            </p>
                            <ul class="mb-2">
                                <li>Indirizzo IP</li>
                                <li>Porta Logica</li>
                                <li>Protocollo</li>
                            </ul>
                            <p>
                                Come vedremo questi elementi sono strettamente legati alla pila <a href="iso-osi.html#livello-di-trasporto">ISO/OSI</a>, più specificatamente
                                nel
                                livello di <strong>trasporto</strong>.
                            </p>`,
            "image": "images/socket.png",
        },
    ],
    "tipologie": {
        "title": "Le tipologie di socket",
        "description": `Una socket si può dividere principalmente in due <strong>famiglie</strong>, dove ognuna riunisce i socket che utilizzano
                        gli stessi <a href="glossario.html#Protocollo">protocolli</a> e che supportano uno stile di comunicazione e un formato di indirizzamento.
                        In particolare troviamo:`,
        "accordition": [
            {
                "title": "Internet Socket",
                "description": `Per <strong>internet socket</strong> si intende quella famiglia che permette la comunicazione attraverso
                                una <a href="glossario.html#LAN">LAN</a> o <a href="glossario.html#Internet">internet</a>.<br>
                                Un Internet socket si può dividere principalmente in ulteriori tre tipi, ognuno dei
                                quali si caratterizza per la modalità di connessione, in particolare possiamo trovare:`,
                "open": true,
                "subaccorditions": [
                    {
                        "title": "Stream Socket",
                        "description": `Una <strong>stream socket</strong> è una tipologia di socket basata su <a href="glossario.html#TCP">TCP</a> che realizza una
                                        comunicazione tipicamente asimmetrica e affidabile.
                                        Con questa tipologia viene aperto un canale virtuale di comunicazione
                                        necessario per la condivisione di informazioni.`,
                        "open": false,
                    },
                    {
                        "title": "Datagram Socket",
                        "description": `Una <strong>datagram socket</strong> è una tipologia di socket basata su <a href="glossario.html#UDP">UDP</a> che non
                                        necessita della creazione di una connessione, per questo è più veloce ma
                                        meno affidabile, inoltre è possibile agire in <a href="glossario.html#Multicast">multicast</a>.
                                        I dati sono inviati in pacchetti chiamati datagrammi.`,
                        "open": false,
                    },
                    {
                        "title": "Raw Socket",
                        "description": `Le <strong>raw socket</strong> sono una tipologia di socket che permettono di saltare i
                                        protocolli di trasporto come <a href="glossario.html#TCP">TCP</a> e <a href="glossario.html#UDP">UDP</a>, dando la possibilità di operare
                                        direttamente a livello IP.
                                        Sono utilizzati principalmente per lo sviluppo di protocolli di rete
                                        personalizzati.`,
                        "open": false,
                    }
                ]
            },
            {
                "title": "Unix Domain Socket Socket",
                "description": `Per <strong>UNIX Domain Socket</strong> si intende quella famiglia che permette il trasferimento di dati tra
                                processi sulla stessa macchina UNIX.`,
                "open": false,
                "subaccorditions": []
            },
        ],
    },
    "processo": {
        "title": "Il processo di comunicazione",
        "description": `Il processo di comunicazione tra programmi attraverso le socket utilizza la logica dell’architettura
                        <a href="client-server.html">client-server</a>, in particolare possiamo individuare le seguenti fasi, divise tra i due attori:`,
        "list": [
            {
                "title": "Server",
                "sublist": [
                    "Il server crea una socket internet e lega a questa la porta nella quale vuole essere raggiunto, insieme ad un indirizzo IP, il quale permette di limitare la superficie da dove può essere raggiunta",
                    "Il server si mette ora in ascolto per le richieste di connessione dei client, tramite il ciclo principale del programma",
                    `Il server appena riceve una richiesta, la accetta e stabilisce una connessione dedicata per
                        la comunicazione con quel client, nelle applicazioni <a href="glossario.html#Multi-Thread">multi thread</a>, il server crea un thread
                        dedicato per gestire le operazioni in maniera concorrente`,
                    "Il server ora riceve informazioni dal client e le rielabora. Dopo questo invia i dati rielaborati e quando il programma lo prevede, chiude la connessione",
                ]
            },
            {
                "title": "Client",
                "sublist": [
                    `Il client crea una socket internet e lascia al <a href="glossario.html#Kernel">kernel</a> la scelta di una porta che verrà generata casualmente.`,
                    "Il client tenta la connessione al server, specificando l’indirizzo ip e la porta",
                    "Il client invia i dati da elaborare e attende la ricezione dei nuovi dati",
                    "Quando il programma lo prevede, procede con la chiusura della socket.",
                ]
            }
        ],
        "disclaimer": "Alcuni passaggi potrebbero differire leggermente in caso di socket stream e datagram, in quanto la seconda non prevede l’inizializzazione di una comunicazione.",
    }
}

const title = document.querySelector('#title');
title.innerHTML = socketContent.title;
document.title += " - " + socketContent.title;

const sections = document.getElementById("sections");
socketContent.sections.forEach((section) => {
  content = `<div class="row align-items-center">
              <h3>${section.title}</h3>
              ${section.image ? '<div class="col-12 col-xl-5">\
                  <img src="' + section.image + '" class="img-fluid rounded my-2">\
              </div>' : ""}
              <div class="${section.image ? "col-12 col-xl-7" : ""}">
                  ${section.description.startsWith("<p>") ? section.description : "<p>" + section.description + "</p>"}
              </div>
            </div>`
  sections.innerHTML += content;
});

const tipologie = document.getElementById("tipologie");
tipologie.querySelector("h3").innerHTML = socketContent.tipologie.title;
tipologie.querySelector("p").innerHTML = socketContent.tipologie.description;
const mainAccordition = document.createElement("div");
mainAccordition.className = "accordion";
mainAccordition.id = "tipologie-accordition";
socketContent.tipologie.accordition.forEach((tipologia) => {
    accorditionId = tipologia.title.toLowerCase().replaceAll(" ", "-");
    accordition = `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button ${tipologia.open ? "" : "collapsed"}" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-${accorditionId}" aria-expanded="false"
                            aria-controls="collapse-${accorditionId}">
                            ${tipologia.title}
                        </button>
                    </h2>
                    <div id="collapse-${accorditionId}" class="accordion-collapse collapse ${tipologia.open ? "show" : ""}"
                        data-bs-parent="#${mainAccordition.id}">
                        <div class="accordion-body">
                            <p>
                                ${tipologia.description}
                            </p>
                            ${tipologia.subaccorditions.length > 0 ? `<div class="accordion mt-2" id="${accorditionId}-subaccordition">` : ""}
                        </div>
                    </div>
                </div>`;
    mainAccordition.innerHTML += accordition;
    if (tipologia.subaccorditions.length > 0) {
        const subAccordition = mainAccordition.querySelector(`#${accorditionId}-subaccordition`);
        tipologia.subaccorditions.forEach((subTipologia) => {
            accorditionId = subTipologia.title.toLowerCase().replaceAll(" ", "-");
            subAccordition.innerHTML += `<div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button ${subTipologia.open ? "" : "collapsed"}" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapse-${accorditionId}" aria-expanded="false"
                                                    aria-controls="collapse-${accorditionId}">
                                                    ${subTipologia.title}
                                                </button>
                                            </h2>
                                            <div id="collapse-${accorditionId}" class="accordion-collapse collapse ${subTipologia.open ? "show" : ""}"
                                                data-bs-parent="#${subAccordition.id}">
                                                <div class="accordion-body">
                                                    <p>
                                                        ${subTipologia.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>`;
        });
    }
});
tipologie.appendChild(mainAccordition);

const processo = document.getElementById("processo");
processo.querySelector("h3").innerHTML = socketContent.processo.title;
processo.querySelector("p").innerHTML = socketContent.processo.description;

const list = document.createElement("ul");
socketContent.processo.list.forEach((actor) => {
    const actorList = document.createElement("li");
    actorList.innerHTML = `<strong>${actor.title}</strong>`;
    const sublist = document.createElement("ol");
    actor.sublist.forEach((sub) => {
        const subList = document.createElement("li");
        subList.innerHTML = sub;
        sublist.appendChild(subList);
    });
    actorList.appendChild(sublist);
    list.appendChild(actorList);
});
processo.appendChild(list);
console.log(socketContent.processo.disclaimer);