const mainDiv = document.querySelector(".main-div");
const video = document.querySelector(".video-background");
const link = document.querySelector(".back");

link.addEventListener("click", (e) => {
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
