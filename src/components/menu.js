const createMenu = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.classList.add("selection");

    selectContent.insertBefore(menu, selectCredits);

    selectContent.style.justifyContent = "center";
  }
};

export { createMenu };
