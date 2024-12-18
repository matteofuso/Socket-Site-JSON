const loadScrollSpy = function (data) {
  // Sort the array by term
  data.sort((a, b) => a.term.localeCompare(b.term));

  let groupTitle;
  let spyTitle;
  let spyContainer;
  const scrollspyTarget = document.getElementById("scrollspyTarget");
  const scrollspy = document.querySelector("#scrollspy div");
  // Add each term to the glossary
  data.forEach((e, index) => {
    // If the first letter of the term is different from the previous one, create a new group
    if (!groupTitle || e.term[0].toUpperCase() !== groupTitle.textContent) {
      // If the group has been created, append it to the scrollspy
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
    // Create the glossary item
    const glossaryContainer = document.createElement("div");
    const glossaryTitle = document.createElement("h5");
    const glossaryDefinition = document.createElement("p");
    glossaryTitle.glossaryContainer = "scroll-margin";
    glossaryContainer.id = `${e.term}`;
    // If the term has a link, add it to the title
    if (e.link) {
      glossaryTitle.innerHTML = `${e.term.replaceAll("-", " ")} <a href="${e.link
        }" ${e.link.startsWith("http") ? 'target="_blank"' : ""}><i class="bi bi-link-45deg"></i></a>`;
    } else {
      glossaryTitle.textContent = e.term.replaceAll("-", " ");
    }
    // Add the definition to the glossary item
    glossaryDefinition.textContent = e.definition;
    glossaryContainer.appendChild(glossaryTitle);
    glossaryContainer.appendChild(glossaryDefinition);
    scrollspyTarget.appendChild(glossaryContainer);
    // Add the term to the scrollspy
    const spyItem = document.createElement("a");
    spyItem.href = `#${e.term}`;
    spyItem.textContent = e.term.replaceAll("-", " ");
    spyItem.classList = "nav-link ms-3 my-1";
    spyContainer.appendChild(spyItem);
    // If it's the last term, append the last group to the scrollspy
    if (index === data.length - 1) {
      scrollspy.appendChild(spyTitle);
      scrollspy.appendChild(spyContainer);
    }
  });
}

loadJSON("JSON/glossario.json", loadScrollSpy);