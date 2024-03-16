const modeToggle = document.querySelector(".icon");
const cc1 = document.getElementById("cc1");
const cc2 = document.getElementById("cc2");
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))

modeToggle.addEventListener("click", () =>
  document.body.classList.toggle("mode")
);


modeToggle.addEventListener(
  "click",
  () => (document.body.style.transition = "all 0.3s ease-in")
);
modeToggle.addEventListener(
  "click",
  () => (cc1.style.transition = "all 0.3s ease-in")
);
modeToggle.addEventListener(
  "click",
  () => (cc2.style.transition = "all 0.3s ease-in")
);
date = new Date().getFullYear();
const yearUpdate = document.createElement("span");
const yearText = document.createTextNode(date);
yearUpdate.appendChild(yearText);
const addYearInto = document.querySelector(".year-class");
addYearInto.appendChild(yearUpdate);
