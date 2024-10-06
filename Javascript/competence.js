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

// anim :

const mainDivs = document.querySelectorAll(
  ".wrapper, .description, .page-navigation"
);

const video = document.querySelector(".video-background");
const back = document.querySelector(".back");

back.addEventListener("click", (e) => {
  e.preventDefault();

  video.src = "../assets/video-reverse2.webm";
  video.classList.add("reverse");
  video.load();

  video.playbackRate = 2;
  video.play();

  mainDivs.forEach((div) => {
    div.classList.add("shrink");
  });

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

// zoom in on click, same as other

const a = document.querySelectorAll("a:not(.back)"); // prend tout les liens sauf .back pour eviter le conflit d'animation

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    mainDivs.forEach((div) => {
      div.classList.add("hidden");
    });

    video.playbackRate = 2.0;
    video.classList.add("zoomIn");

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1720);
  });
});

const preloadVideo = (src) => {
  const video = document.createElement("video");
  video.src = src;
  video.preload = "auto";
  video.style.display = "none";
  document.body.appendChild(video);
};

document.addEventListener("DOMContentLoaded", () => {
  preloadVideo("/assets/video2.webm");
  preloadVideo("/assets/video-reverse2.webm");
});
