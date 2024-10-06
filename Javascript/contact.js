const mainDivs = document.querySelectorAll(
  ".form-container, .social-container, .page-navigation "
);

const video = document.querySelector(".video-background");
const link = document.querySelector(".back");

link.addEventListener("click", (e) => {
  e.preventDefault();

  video.src = "../assets/video-reverse.mp4";
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
