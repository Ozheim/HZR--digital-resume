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
