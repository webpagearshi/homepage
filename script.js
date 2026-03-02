const texts = {
  h1: "Hello, I am Arshi",
  p: "Tableau Developer | Data Visual Designer",
};

const speed = 80;
const pauseBetween = 500;

const h1El = document.getElementById("type-h1");
const pEl = document.getElementById("type-p");

let charIndex = 0;
let current = "h1";

function type() {
  const text = texts[current];
  const target = current === "h1" ? h1El : pEl;

  if (charIndex < text.length) {
    target.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else if (current === "h1") {
    current = "p";
    charIndex = 0;
    setTimeout(type, pauseBetween);
  }
}

window.addEventListener("load", type);

const navLinks = document.querySelectorAll(".side-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach((l) => l.classList.remove("active"));

    // add active to clicked one
    link.classList.add("active");
  });
});
