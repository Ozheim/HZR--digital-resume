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

const a = document.querySelectorAll("a");

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("target") === "_blank") {
      return;
    }

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
