import "./style.css";

import { createNavBar, createCopyright } from "./components/UI";
import { createAboutTab } from "./components/about";
import { createMenuTab } from "./components/menu";
import { createContactTab } from "./components/contact";

createNavBar();
createAboutTab();
createCopyright();

const selectMenuSelection = document.querySelectorAll(".menuSelection");

selectMenuSelection.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    const selectValue = e.target.dataset.value;

    switch (selectValue) {
      case "item-0":
        createAboutTab();
        break;
      case "item-1":
        createMenuTab();
        break;
      case "item-2":
        createContactTab();
        break;
    }
  });
});
