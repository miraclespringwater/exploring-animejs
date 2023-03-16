const cssSelector = document.getElementById("cssSelector");

cssSelector.addEventListener("click", () => {
  anime({
    targets: "#cssSelector .el",
    translateX:
      cssSelector.querySelector(".line").offsetWidth -
      cssSelector.querySelector(".el").offsetWidth,
  }).restart();
});
