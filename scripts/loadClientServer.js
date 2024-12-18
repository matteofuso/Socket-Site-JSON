const loadClientServer = function (data) {
  // Load page title
  const title = document.getElementById("title");
  title.textContent = data.title;

  // Load page sections
  const sections = document.getElementById("sections");
  // Load every section from the list
  data.sections.forEach((section) => {
    // Load section content, load image if present
    content = `<div class="row align-items-center">
              <h3>${section.title}</h3>
              ${section.image ? '<div class="col-12 col-xl-5">\
                  <img src="' + section.image + '" class="img-fluid rounded my-2">\
              </div>' : ""}
              <div class="${section.image ? "col-12 col-xl-7" : ""}">
                  <p>${section.description}</p>
              </div>
            </div>`
    sections.innerHTML += content;
  });

  // Load advantages title
  const advantagesTitle = document.getElementById("advantages-title");
  advantagesTitle.textContent = data.advantages.title;

  // Load advantages description
  const advantagesDescription = document.getElementById("advantages-description");
  advantagesDescription.innerHTML = data.advantages.description;

  // Load advantages list
  const advantagesList = document.getElementById("advantages-list");
  // Load every advantage from the list
  data.advantages.list.forEach((advantage) => {
    content = `<li class="list-group-item list-group-item-action"><strong>${advantage.title}</strong><br>
              ${advantage.description}  
            </li>`
    advantagesList.innerHTML += content;
  });

  // Load advantages image
  const advantagesImage = document.getElementById("advantages-image");
  advantagesImage.src = data.advantages.image;
}

// Load the JSON data
loadJSON("JSON/client_server.json", loadClientServer);