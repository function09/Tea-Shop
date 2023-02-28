const createContactTab = () => {
  const selectContent = document.querySelector("#content");
  const selectSelector = document.querySelector(".selection");
  const selectCredits = document.querySelector("#credits");

  const createContactInfo = () => {
    const contact = document.createElement("div");

    contact.setAttribute("id", "contact");
    contact.classList.add("selection");

    selectContent.insertBefore(contact, selectCredits);

    selectContent.style.justifyContent = "center";

    for (let i = 0; i < 2; i++) {
      const createContactSection = document.createElement("div");

      createContactSection.setAttribute("id", `info${i}`);
      createContactSection.classList.add("contactInfo");

      contact.appendChild(createContactSection);
    }
    document.querySelector("#info0").textContent = "Telephone: 123-456-7890";
    document.querySelector("#info1").textContent =
      "Address: 123 Tea Street, London, England";
  };

  if (selectContent.contains(selectSelector)) {
    selectSelector.remove();
    createContactInfo();
  }
};

export { createContactTab };
