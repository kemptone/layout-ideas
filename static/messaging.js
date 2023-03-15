function calculateHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

calculateHeight();

// We listen to the resize event
window.addEventListener("resize", calculateHeight);

let isChannel = false;

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("list");

  document.querySelector(".messaging-right .top").addEventListener(
    "click",
    (e) => {
      if (isChannel) {
        document.body.classList.add("list");
        document.body.classList.remove("channel");
      } else {
        document.body.classList.remove("list");
        document.body.classList.add("channel");
      }
    },
  );

  document.querySelectorAll(".messaging-left > div").forEach((Element) => {
    Element.addEventListener("click", (e) => {
      if (isChannel) {
        document.body.classList.add("list");
        document.body.classList.remove("channel");
      } else {
        document.body.classList.remove("list");
        document.body.classList.add("channel");
      }
      isChannel = !isChannel;
    });
  });
});
