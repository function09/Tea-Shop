const createContact = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.classList.add("selection");

    selectContent.insertBefore(contact, selectCredits);

    selectContent.style.justifyContent = "center";
  }
};

export { createContact };
