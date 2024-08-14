const mobileNavOpen = document.querySelector(".menu__icon--open");
const mobileNavClose = document.querySelector(".menu__icon--close");
const mobileNav = document.querySelector(".mobile__nav");
const darkOverlay = document.querySelector(".overlay");

// Show mobile nav
mobileNavOpen.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  mobileNav.classList.remove("hidden");
  darkOverlay.classList.remove("hidden");
});

// Hide mobile nav
mobileNavClose.addEventListener("click", () => {
  document.body.style.overflow = "scroll";
  mobileNav.classList.add("hidden");
  darkOverlay.classList.add("hidden");
});
