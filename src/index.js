import "./style.css";

import { createNavBar, createCopyright } from "./components/UI";
import { createAbout } from "./components/about";
import { createMenu } from "./components/menu";
import { createContact } from "./components/contact";

createNavBar();
createAbout();
createCopyright();

const selectMenuSelection = document.querySelectorAll(".menuSelection");

selectMenuSelection.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    const selectValue = e.target.dataset.value;

    switch (selectValue) {
      case "item-0":
        createAbout();
        break;
      case "item-1":
        createMenu();
        break;
      case "item-2":
        createContact();
        break;
    }
  });
});
