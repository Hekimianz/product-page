const mobileNavOpen = document.querySelector(".menu__icon--open");
const mobileNavClose = document.querySelector(".menu__icon--close");
const mobileNav = document.querySelector(".mobile__nav");
const darkOverlay = document.querySelector(".overlay");
const desktopImage = document.querySelector(".desktop__image");
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox__close");
const mobileImageBtns = document.querySelectorAll(".mobile__image--btn");
let currentImage = "";
currentImage = getImage();

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

// Open lightbox
desktopImage.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
});

// Close lightbox
lightboxClose.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Mobile image slider
mobileImageBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList[1] === "mobilePrev") {
      currentImage = getImage("prev");
      e.target.parentNode.style.background = currentImage;
    } else {
      currentImage = getImage("next");
      e.target.parentNode.style.background = currentImage;
    }
  });
});

// Get prev/next image
function getImage(direction) {
  if (!currentImage) {
    return "url('./images/image-product-1.jpg')  top / cover no-repeat";
  } else if (direction === "next") {
    let num = +currentImage.split("-")[2].split(".")[0] + 1;
    let next = num === 5 ? 1 : num;
    return `url("./images/image-product-${next}.jpg") top / cover no-repeat`;
  } else if (direction === "prev") {
    let num = +currentImage.split("-")[2].split(".")[0] - 1;
    let prev = num === 0 ? 4 : num;
    return `url("./images/image-product-${prev}.jpg") top / cover no-repeat`;
  }
}
