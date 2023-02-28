const createAboutTab = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  function displayAbout() {
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    about.classList.add("selection");

    selectContent.insertBefore(about, selectCredits);

    for (let i = 0; i < 3; i++) {
      const createAboutText = document.createElement("div");
      createAboutText.classList.add("aboutText");
      createAboutText.setAttribute("id", `line${[i]}`);
      about.appendChild(createAboutText);
    }
    document.querySelector("#line0").textContent =
      "We are a small tea shop located in the East End of London.";
    document.querySelector("#line1").textContent =
      "Our large variety of loose-leaf tea is selected from various parts of the world.";
    document.querySelector("#line2").textContent =
      "We are committed to serve the best quality tea to our customers and fresh-baked pastries";
  }

  if (!selectContent.contains(selectSelector)) {
    displayAbout();
  } else if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    displayAbout();
    selectContent.style.justifyContent = "flex-start";
  }
};

export { createAboutTab };
