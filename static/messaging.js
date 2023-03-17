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

  document.querySelector(".messaging-outer .messaging-right form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const text = data.get("messagetext");
      const div = document.createElement("div");
      div.innerText = text;
      document.querySelector(".messaging-outer .messaging-right .middle")
        .appendChild(div);

      document.querySelector(".messaging-outer .messaging-right .middle")
        .scrollTo(
          0,
          99999,
        );

      document.querySelector(".messaging-outer .messaging-right textarea")
        .value = "";
    });

  document.querySelector(".messaging-outer .messaging-right .middle")
    .scrollTo(
      0,
      99999,
    );

  function toggleOff(e) {
    console.log({
      isChannel,
    });

    // should clear he clicked status
    document.querySelectorAll(".messaging-left .middle > div").forEach(
      (Element) => Element.classList.remove("clicked"),
    );

    // this is hacky, only shows for a few seconds on mobile
    if (e.target.tagName === "DIV") {
      e.target.classList.add("clicked");
    }

    if (isChannel) {
      document.body.classList.remove("channel");
      document.body.classList.add("list");
    } else {
      document.body.classList.remove("list");
      document.body.classList.add("channel");
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
    // flip it
    setTimeout(() => {
      isChannel = !isChannel;
    }, 500);
  }

  document.querySelector(".messaging-right .top button").addEventListener(
    "click",
    toggleOff,
  );

  // document.querySelector(".messaging-right .top button").addEventListener(
  //   "click",
  //   (e) => {
  //     e.currentTarget.classList.add("clicked");
  //   },
  // );

  document.querySelectorAll(".messaging-left .middle > div").forEach(
    (Element) => {
      Element.addEventListener("click", toggleOff);
    },
  );
});
