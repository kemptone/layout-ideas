const DEBUG = false;

function calculateHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  // const vh = window.innerHeight * 0.01;
  const vertical_height = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty(
    "--vertical-height",
    `${vertical_height}px`,
  );

  if (DEBUG) {
    // FOR TESTING IPHONE ONLY
    const e_div = document.createElement("div");
    e_div.innerHTML = vh;

    e_parent = document.querySelector(
      ".messaging-outer .messaging-right .middle",
    );

    if (e_parent) {
      e_parent.appendChild(e_div);
    }
  }
}

// This is a global, we will not need this
let isChannel = false;

// We will need this, to some degree
// There is a delay we will need... lower is better for performance
function onTheFocus(isInFocus) {
  function focus() {
    const height = Math.abs(
      window.innerHeight - document.documentElement.clientHeight,
    ) - 1;

    document.documentElement.style.setProperty(
      "--offset-height",
      `${height}px`,
    );

    if (DEBUG) {
      // FOR TESTING IPHONE ONLY
      const e_div = document.createElement("div");
      if (isInFocus) {
        e_div.innerHTML = "triggered focusin :" + height;
      } else {
        e_div.innerHTML = "triggered focusout :" + height;
      }

      e_div.className = "test2";

      e_parent = document.querySelector(
        ".messaging-outer .messaging-right .middle",
      );

      if (e_parent) {
        e_parent.appendChild(e_div);
        e_parent.scrollTo(
          0,
          99999,
        );
      }
    }
  }

  return () => setTimeout(focus, 100);
}

// So, will need something like this, that recalculates
window.addEventListener("DOMContentLoaded", () => {
  // We listen to the resize event
  window.addEventListener("resize", calculateHeight);

  // detect when virtual keyboard is opened
  window.addEventListener("focusin", onTheFocus(true));
  window.addEventListener("focusout", onTheFocus(false));

  calculateHeight();

  document.body.classList.add("list");

  document.querySelector(".messaging-right .top button").addEventListener(
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

  // initial scroll of the right, probably will not need this
  document.querySelector(".messaging-outer .messaging-right .middle")
    .scrollTo(
      0,
      99999,
    );

  // Clicking behavior, Absolutely will not need this
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

  // Back / Forth button, ABSOLUTELY will not need this
  document.querySelector(".messaging-right .top button").addEventListener(
    "click",
    toggleOff,
  );

  // Back / Forth button, ABSOLUTELY will not need this
  document.querySelectorAll(".messaging-left .middle > div").forEach(
    (Element) => {
      Element.addEventListener("click", toggleOff);
    },
  );
});
