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
        document.querySelector(".messaging-outer .messaging-right .middle")
          .scrollTo(
            0,
            99999,
          );
        // Autofocus does not work in iphone, if you want the animation
        // See this thread: https://stackoverflow.com/questions/5771785/how-can-you-autofocus-on-a-form-field-in-iphone-safari
        // const e_textarea = document.createElement("textarea");
        // e_textarea.autofocus = true;
        // setTimeout(() => {
        //   document.querySelector("#myapp .messaging-outer .bottom").appendChild(
        //     e_textarea,
        //   );
        // }, 600);
      }
      isChannel = !isChannel;
    });
  });
});
