/*

*/

// line 82 in documentation.js
const resetDemos = () => {
  document.querySelectorAll(".el")?.forEach((el) => {
    anime.remove(el);
    el.style = "";
  });
};

/* = All Demos = */
document.querySelectorAll(".demo").forEach((demo) => {
  demo.addEventListener("click", () => {
    resetDemos();
    document.querySelectorAll(".active")?.forEach((active) => {
      demo === active || active.classList.remove("active");
    });
    demo.classList.add("active");
  });
});

/* = Targets =*/

/* == CSS Selector == */
{
  const cssSelector = () => {
    const lineWidth = document.querySelector(
      ".css-selector-demo .line"
    ).offsetWidth;
    const squareWidth = document.querySelector(
      ".css-selector-demo .square.el"
    ).offsetWidth;

    anime({
      targets: ".css-selector-demo .el",
      translateX: lineWidth - squareWidth,
    });
  };

  document
    .querySelector(".css-selector-demo")
    ?.addEventListener("click", cssSelector);
}

/* == DOM Node / Nodelist == */
{
  const nodelist = () => {
    const lineWidth = document.querySelector(
      ".dom-node-demo .line"
    ).offsetWidth;
    const squareWidth = document.querySelector(
      ".dom-node-demo .square.el"
    ).offsetWidth;

    const els = document.querySelectorAll(".dom-node-demo .el");

    anime({
      targets: els,
      translateX: lineWidth - squareWidth,
    });
  };

  document.querySelector(".dom-node-demo")?.addEventListener("click", nodelist);
}

/* == JavaScript Objects == */
{
  const jsObjects = () => {
    console.log("hello");
    const logEl = document.querySelector(".battery-log");

    const battery = {
      charged: "0%",
      cycles: 120,
    };

    anime({
      targets: battery,
      charged: "100%",
      cycles: 130,
      round: 1,
      easing: "linear",
      update: function() {
        logEl.innerHTML = JSON.stringify(battery);
      },
    });
  };

  document
    .querySelector(".js-object-demo")
    ?.addEventListener("click", jsObjects);
}

/* == Array (Mixed) == */

{
  const mixedArray = () => {
    const lineWidth = document.querySelector(
      ".mixed-array-demo .line"
    ).offsetWidth;
    const squareWidth = document.querySelector(
      ".mixed-array-demo .square.el"
    ).offsetWidth;

    const el = document.querySelectorAll(".mixed-array-demo .el-01");

    anime({
      targets: [el, ".mixed-array-demo .el-02", ".mixed-array-demo .el-03"],
      translateX: lineWidth - squareWidth,
    });
  };

  document
    .querySelector(".mixed-array-demo")
    ?.addEventListener("click", mixedArray);
}
/* == Array == */
