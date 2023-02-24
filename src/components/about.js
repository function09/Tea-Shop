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

const createAbout = () => {
  // Creates base about section
  const about = document.createElement("div");
  about.setAttribute("id", "about");
  selectContent.appendChild(about);

  for (let i = 0; i < 3; i++) {
    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");
    aboutText.setAttribute("id", `line${i}`);
    about.appendChild(aboutText);
  }
  document.querySelector("#line0").textContent =
    "We are a small tea shop located in the East End of London.";
  document.querySelector("#line1").textContent =
    "Our large variety of loose-leaf tea is selected from various parts of the world.";
  document.querySelector("#line2").textContent =
    "We are committed to serve the best quality tea to our customers and fresh-baked pastries";
};

const createCopyright = () => {
  const copyright = document.createElement("div");
  copyright.setAttribute("id", "credits");
  copyright.textContent = "Copyright © 2023 function09";
  selectContent.appendChild(copyright);
};

export { createNavBar, createAbout, createCopyright };
