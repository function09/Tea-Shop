const createMenuTab = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  const displayMenu = () => {
    const menu = document.createElement("div");

    menu.setAttribute("id", "menu");
    menu.classList.add("selection");

    selectContent.insertBefore(menu, selectCredits);

    selectContent.style.justifyContent = "center";

    const createMenuItems = () => {
      for (let i = 0; i < 6; i++) {
        const selectMenu = document.querySelector("#menu");
        const createItem = document.createElement("div");

        createItem.classList.add("menuItem");
        createItem.setAttribute("id", `item${[i]}`);
        selectMenu.appendChild(createItem);
      }
    };
    createMenuItems();
    document.querySelector("#item0").textContent =
      "London Fog..............................£2.50";
    document.querySelector("#item1").textContent =
      "Earl Grey..............................£2.50";
    document.querySelector("#item2").textContent =
      "Matcha......................................£2.50";
    document.querySelector("#item3").textContent =
      "Moroccan Tea...................£2.50";
    document.querySelector("#item4").textContent =
      "Herbal Teas..............................£2.50";
    document.querySelector("#item5").textContent =
      "Pastries...................................£2.50";
  };

  if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    displayMenu();
  }
};

export { createMenuTab };
