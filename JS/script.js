const bouton = document.querySelector("#bouton");
const contenu = document.querySelector(".MilieuPage");
const suite = document.querySelector(".suite");

if (suite.style.display != "none") {
  suite.style.display = "none";
}

bouton.addEventListener("click", function() {
  if (suite.style.display == "none") {
    suite.style.display = "block";
    bouton.textContent = "Masquer";
  } else {
    suite.style.display = "none";
    bouton.textContent = "En savoir plus";
  }

  window.scrollBy({
    top: 300,
    behavior: "smooth"
  });

});
