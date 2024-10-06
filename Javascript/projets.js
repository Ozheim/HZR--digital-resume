const mainDiv = document.querySelector(".project-container");
const video = document.querySelector(".video-background");
const back = document.querySelector(".back");

back.addEventListener("click", (e) => {
  e.preventDefault();

  video.src = "../assets/video-reverse.mp4";
  video.classList.add("reverse");
  video.load();

  video.playbackRate = 2;
  video.play();

  mainDiv.classList.add("shrink");

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

// zoom in effect, same as other

const a = document.querySelectorAll("a:not(.back) ");
const mainDivs = document.querySelectorAll(
  ".project-container, .page-navigation"
);

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    mainDivs.forEach((div) => {
      div.classList.add("hidden"); //classList dont work on multiple class in a same query selector
    });
    video.playbackRate = 2.0;
    video.classList.add("zoomIn");

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1720);
  });
});
