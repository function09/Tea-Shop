const selectContent = document.querySelector("#content");

const createNavBar = () => {
  const menuArray = ["About", "Menu", "Contact"];

  // Creates the base navigation bar
  const navBar = document.createElement("div");
  navBar.setAttribute("id", "navbar");
  selectContent.appendChild(navBar);

  // Creates the Name of the Tea Shop
  const name = document.createElement("div");
  name.setAttribute("id", "name");
  name.textContent = "London Fog";
  navBar.appendChild(name);

  // Creates the base menu
  const menu = document.createElement("ul");
  menu.setAttribute("id", "menu");
  navBar.appendChild(menu);

  // Creates menu selections
  for (let i = 0; i < menuArray.length; i++) {
    const list = document.createElement("li");

    list.textContent = menuArray[i];
    menu.appendChild(list);
  }
};

const createCopyright = () => {
  const copyright = document.createElement("div");
  copyright.setAttribute("id", "credits");
  copyright.textContent = "Copyright © 2023 function09";
  selectContent.appendChild(copyright);
};

export { createNavBar, createCopyright };
