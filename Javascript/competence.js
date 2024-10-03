async function chargerCompetences() {
  const response = await fetch("../staticBackend/technologies.json");
  const data = await response.json();
  return data.competences;
}

const afficherDescription = (competence) => {
  const descriptionDiv = document.querySelector(".description");

  descriptionDiv.style.visibility = "visible";

  descriptionDiv.innerHTML = `
        <h3>${competence.nom}</h3>
        <p>Niveau : ${competence.niveau}</p>
        <p>${competence.description}</p>
    `;
};

document.addEventListener("DOMContentLoaded", async () => {
  const competences = await chargerCompetences();

  document.querySelectorAll(".skills-logo").forEach((logo, index) => {
    logo.addEventListener("click", () => {
      afficherDescription(competences[index]);
    });
  });
});
