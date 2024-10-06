const mainDivs = document.querySelectorAll(
  ".form-container, .social-container, .page-navigation"
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

const a = document.querySelectorAll("a:not(.back)");

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
