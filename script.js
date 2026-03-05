// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Typing Animation
const text = "Aspiring Python Developer | Problem Solver | Computer Science Student ";
let index = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

// Navbar Shadow on Scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
