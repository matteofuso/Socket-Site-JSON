const loadSocket = function (data) {
    // Load page title
    const title = document.querySelector('#title');
    title.innerHTML = data.title;

    // Load page sections
    const sections = document.getElementById("sections");
    data.sections.forEach((section) => {
        // Load section content, load image if present
        content = `<div class="row align-items-center">
              <h3>${section.title}</h3>
              ${section.image ? '<div class="col-12 col-xl-5">\
                  <img src="' + section.image + '" class="img-fluid rounded my-2">\
              </div>' : ""}
              <div class="${section.image ? "col-12 col-xl-7" : ""}">
                  ${section.description.startsWith("<p>") ? section.description : "<p>" + section.description + "</p>"}
              </div>
            </div>`
        // Append content to sections
        sections.innerHTML += content;
    });

    // Load typologies
    // Load title and description
    const tipologie = document.getElementById("tipologie");
    tipologie.querySelector("h3").innerHTML = data.tipologie.title;
    tipologie.querySelector("p").innerHTML = data.tipologie.description;
    const mainAccordition = document.createElement("div");
    mainAccordition.className = "accordion";
    mainAccordition.id = "tipologie-accordition";
    // Load accordition items
    data.tipologie.accordition.forEach((tipologia) => {
        accorditionId = tipologia.title.toLowerCase().replaceAll(" ", "-");
        // Create accordition item structure
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
        // Append accordition to mainAccordition
        mainAccordition.innerHTML += accordition;
        // If there are subaccorditions, load them
        if (tipologia.subaccorditions.length > 0) {
            const subAccordition = mainAccordition.querySelector(`#${accorditionId}-subaccordition`);
            tipologia.subaccorditions.forEach((subTipologia) => {
                accorditionId = subTipologia.title.toLowerCase().replaceAll(" ", "-");
                // Create subaccordition item structure
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
    // Append mainAccordition to tipologie
    tipologie.appendChild(mainAccordition);

    // Load communication process content
    const processo = document.getElementById("processo");
    processo.querySelector("h3").innerHTML = data.processo.title;
    processo.querySelector("p").innerHTML = data.processo.description;

    // Load server and client list
    const list = document.createElement("ul");
    data.processo.list.forEach((actor) => {
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

    // Append list to the page
    processo.appendChild(list);
}

// Load the socket content
loadJSON('JSON/socket.json', loadSocket);
