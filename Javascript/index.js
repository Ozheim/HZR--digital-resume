const onOrOff = (event) => {
  const li = event.currentTarget;
  li.classList.remove("layers", "glitch", "font");
};

const onMouseOut = (event) => {
  const li = event.currentTarget;
  li.classList.add("layers", "glitch", "font");
};

/* intro effect */
const loading = () => {
  const p = document.getElementById("loading");
  let res = "";

  if (p) {
    const interval = setInterval(() => {
      res += ".";
      if (res.length > 3) {
        return;
      }
      p.textContent = "Chargement" + res;
    }, 500);
  }
};

loading();

/* zoom in effect */

const body = document.querySelector(".effect");
const a = document.querySelectorAll("a:not(.back)");
const video = document.querySelector("video");

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.add("hidden");
    video.playbackRate = 2.0;
    video.classList.add("zoomIn");

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1720);
  });
});

// preload video

const preloadVideo = (src) => {
  const video = document.createElement("video");
  video.src = src;
  video.preload = "auto";
  video.muted = true;
  video.style.display = "none";
  document.body.appendChild(video);
};

document.addEventListener("DOMContentLoaded", () => {
  preloadVideo("/assets/video.mp4");
  preloadVideo("/assets/video-reverse.mp4");
});
