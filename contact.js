const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const contactMessage = {
    nom: formData.get("nom"),
    courriel: formData.get("courriel"),
    sujet: formData.get("sujet"),
    message: formData.get("message"),
  };

  console.log("Message de contact :", contactMessage);
  formStatus.textContent = "Merci pour votre message ! Ouvrez la console pour voir les valeurs du formulaire.";
  contactForm.reset();
});