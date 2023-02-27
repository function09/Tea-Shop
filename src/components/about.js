const createAbout = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  function displayAbout() {
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    about.classList.add("selection");

    selectContent.insertBefore(about, selectCredits);
  }

  if (!selectContent.contains(selectSelector)) {
    displayAbout();
  } else if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    displayAbout();
    selectContent.style.justifyContent = "flex-start";
  }
};

export { createAbout };
