function sendMessage() {
  // form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkActiveSection() {
  const sections = document.getElementsByTagName("section");
  const nav_menu = document.querySelector("ul.nav");
  let isLastActive = nav_menu.querySelector(
    "a[href$='#" + "intro" + "']"
  ).parentNode;

  window.addEventListener("scroll", () => {
    for (let i = 0; i < sections.length; i++) {
      if (isInViewport(sections[i])) {
        const active_tab = nav_menu.querySelector(
          "a[href$='#" + sections[i].id + "']"
        ).parentNode;
        if (isLastActive) {
          isLastActive.classList.remove("active");
          isLastActive = active_tab;
        }
        active_tab.classList.add("active");
      }
    }
  });
}

function init() {
  var typed = new Typed(".subtitle-content", {
    strings: ["Software Engineer.", "Frontend Developer (React)."],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
  });

  // check Active NavTab
  const sections = document.getElementsByTagName("section");
  const nav_menu = document.querySelector("ul.nav");
  for (let i = 0; i < sections.length; i++) {
    if (isInViewport(sections[i])) {
      const active_tab = nav_menu.querySelector(
        "a[href$='#" + sections[i].id + "']"
      ).parentNode;
      active_tab.classList.add("active");
    }
  }
  checkActiveSection();
}

init();
