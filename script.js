const onOrOff = (event) => {
  const li = event.currentTarget;
  li.classList.remove("layers", "glitch", "font");
};

const onMouseOut = (event) => {
  const li = event.currentTarget;
  li.classList.add("layers", "glitch", "font");
};

const loading = () => {
  const p = document.getElementById("loading");
  let res = "";

  if (p) {
    const interval = setInterval(() => {
      res += ".";
      if (res.length > 3) {
        return;
      }
      p.textContent = "Loading" + res;
    }, 500);
  }
};

loading();

const body = document.querySelector(".effect");
const a = document.querySelectorAll("a");
const video = document.querySelector("video");

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.add("hidden");
    video.playbackRate = 2.0;
    video.classList.add("zoomIn");

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 2190);
  });
});
