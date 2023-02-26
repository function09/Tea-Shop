const createAbout = () => {
  // Creates base about section
  const selectContent = document.querySelector("#content");
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

export { createAbout };
