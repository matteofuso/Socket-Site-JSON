const glossario = [
  {
    term: "Interfaccia",
    definition:
      "Un'interfaccia è il punto di contatto tra due sistemi o tra due componenti di un sistema.",
  },
  {
    term: "Rete",
    definition:
      "Una rete è un insieme di dispositivi elettronici collegati tra loro per lo scambio di informazioni.",
    link: "iso-osi.html",
  },
  {
    term: "Protocollo",
    definition:
      "Un protocollo è un insieme di regole che definiscono il formato dei messaggi scambiati tra due o più dispositivi.",
  },
  {
    term: "DNS",
    definition:
      "Il Domain Name System (DNS) è un sistema che associa nomi di dominio a indirizzi IP.",
    link: "https://it.wikipedia.org/wiki/Domain_Name_System"
  },
  {
    term: "HTTP",
    definition:
      "Hypertext Transfer Protocol (HTTP) è un protocollo di comunicazione usato per trasferire documenti ipertestuali, principalmente siti.",
    link: "https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol"
  },
  {
    term: "FTP",
    definition:
      "File Transfer Protocol (FTP) è un protocollo di rete usato per il trasferimento di file tra un client e un server.",
    link: "https://it.wikipedia.org/wiki/File_Transfer_Protocol"
  },
  {
    term: "IPC",
    definition:
      "Inter-Process Communication (IPC) è un insieme di metodi per lo scambio di dati tra processi.",
    link: "https://it.wikipedia.org/wiki/Comunicazione_tra_processi"
  },
  {
    term: "LAN",
    definition:
      "Una Local Area Network (LAN) è una rete di computer che copre un'area geografica limitata.",
    link: "iso-osi.html",
  },
  {
    term: "Internet",
    definition: "Internet è una rete globale di computer interconnessi.",
    link: "iso-osi.html",
  },
  {
    term: "TCP",
    definition:
      "Transmission Control Protocol (TCP) è un protocollo di comunicazione che garantisce la consegna dei dati.",
    link: "iso-osi.html",
  },
  {
    term: "UDP",
    definition:
      "User Datagram Protocol (UDP) è un protocollo di comunicazione che non garantisce la consegna dei dati.",
    link: "iso-osi.html",
  },
  {
    term: "Multicast",
    definition:
      "Il multicast è una tecnica di comunicazione che consente a un host di inviare un messaggio a un gruppo di destinatari.",
    link: "iso-osi.html",
  },
  {
    term: "Multi-Thread",
    definition:
      "Un thread è un l'unità minima di esecuzione di un programma. Un processo può contenere più thread.",
  },
  {
    term: "Kernel",
    definition:
      "Il kernel è il nucleo di un sistema operativo. Gestisce le risorse hardware e fornisce servizi ai processi.",
    link: "https://it.wikipedia.org/wiki/Kernel"
  },
  {
    term: "Modulazione",
    definition:
      "La modulazione è una tecnica di trasmissione che consente di inviare segnali su un canale di comunicazione.",
    link: "iso-osi.html",
  },
  {
    term: "Incapsulamento",
    definition:
      "L'incapsulamento è una tecnica di che nasconde i dettagli di implementazione di altri componenti, in questo modo ognuno può concentrarsi a fare esclusivamente il prorprio lavoro.",
  },
  {
    term: "MAC",
    definition:
      "Il Media Access Control (MAC) è un indirizzo univoco assegnato a una scheda di rete.",
    link: "iso-osi.html",
  },
  {
    term: "CRC",
    definition:
      "Il Cyclic Redundancy Check (CRC) è un algoritmo per il controllo degli errori nei dati trasmessi.",
    link: "iso-osi.html",
  },
  {
    term: "Peer-To-Peer",
    definition:
      "Il Peer-To-Peer (P2P) è un modello di rete in cui i nodi partecipanti condividono risorse tra loro.",
    link: "https://it.wikipedia.org/wiki/Peer-to-peer"
  },
  {
    term: "Browser",
    definition:
      "Un browser è un'applicazione che consente di visualizzare e interagire con i contenuti web.",
  },
  {
    term: "Load-Balancing",
    definition:
      "Il Load-Balancing è una tecnica che distribuisce il carico di lavoro tra più server.",
  },
  {
    term: "Crittografare",
    definition:
      "La crittografia è una tecnica che consente di proteggere i dati tramite l'uso di algoritmi matematici.",
  },
];
glossario.sort((a, b) => a.term.localeCompare(b.term));

const loadGlossario = function() {
  let groupTitle;
  let spyTitle;
  let spyContainer;
  const scrollspyTarget = document.getElementById("scrollspyTarget");
  const scrollspy = document.querySelector("#scrollspy div");
  glossario.forEach((e, index) => {
    if (!groupTitle || e.term[0].toUpperCase() !== groupTitle.textContent) {
      if (spyTitle && spyContainer) {
        scrollspy.appendChild(spyTitle);
        scrollspy.appendChild(spyContainer);
      }
      groupTitle = document.createElement("h2");
      groupTitle.textContent = e.term[0].toUpperCase();
      groupTitle.id = groupTitle.textContent;
      scrollspyTarget.appendChild(groupTitle);
      spyTitle = document.createElement("a");
      spyTitle.href = `#${groupTitle.textContent}`;
      spyTitle.textContent = groupTitle.textContent;
      spyTitle.classList = "nav-link";
      spyContainer = document.createElement("div");
    }
    const glossaryContainer = document.createElement("div");
    const glossaryTitle = document.createElement("h5");
    const glossaryDefinition = document.createElement("p");
    glossaryTitle.glossaryContainer = "scroll-margin";
    glossaryContainer.id = `${e.term}`;
    if (e.link) {
      glossaryTitle.innerHTML = `${e.term.replaceAll("-", " ")} <a href="${
        e.link
      }" ${e.link.startsWith("http")?'target="_blank"':""}><i class="bi bi-link-45deg"></i></a>`;
    } else {
      glossaryTitle.textContent = e.term.replaceAll("-", " ");
    }
    glossaryDefinition.textContent = e.definition;
    glossaryContainer.appendChild(glossaryTitle);
    glossaryContainer.appendChild(glossaryDefinition);
    scrollspyTarget.appendChild(glossaryContainer);
    const spyItem = document.createElement("a");
    spyItem.href = `#${e.term}`;
    spyItem.textContent = e.term.replaceAll("-", " ");
    spyItem.classList = "nav-link ms-3 my-1";
    spyContainer.appendChild(spyItem);
    if (index === glossario.length - 1) {
      scrollspy.appendChild(spyTitle);
      scrollspy.appendChild(spyContainer);
    }
  });
}

loadGlossario();