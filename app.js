const mobileNavOpen = document.querySelector(".menu__icon--open");
const mobileNavClose = document.querySelector(".menu__icon--close");
const mobileNav = document.querySelector(".mobile__nav");
const darkOverlay = document.querySelector(".overlay");
const desktopImage = document.querySelector(".desktop__image");
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox__close");
const mobileImageBtns = document.querySelectorAll(".mobile__image--btn");
const lightboxBtns = document.querySelectorAll(".lightbox__btn");
const thumbs = document.querySelectorAll(".thumbnail");
const cartIcon = document.querySelector(".cart__icon");
const mobileCart = document.querySelector(".mobile__cart");
const desktopCart = document.querySelector(".desktop__cart");

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

// Lightbox image slider
lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let thumbnails = Array.from(thumbs).slice(4);
    thumbnails.forEach((t) => {
      t.classList.remove("active");
    });
    if (e.target.classList.contains("prev")) {
      currentImage = getImage("prev");
      e.target.closest(".lightbox__image").style.background = currentImage;
    } else {
      currentImage = getImage("next");
      e.target.closest(".lightbox__image").style.background = currentImage;
    }
    thumbnails[+currentImage.split("-")[2].split(".")[0] - 1].classList.add(
      "active"
    );
  });
});
// Home thumbnails
thumbs.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    thumbs.forEach((t) => {
      t.classList.remove("active");
    });
    let img = e.target.getAttribute("data-img");
    if (e.target.classList.contains("home__thumbnail")) {
      desktopImage.style.background = `url('./images/image-product-${img}.jpg')  top / cover no-repeat`;
    } else {
      currentImage = `url('./images/image-product-${img}.jpg')  top / cover no-repeat`;
      document.querySelector(".lightbox__image").style.background =
        currentImage;
    }
    e.target.classList.add("active");
  });
});

// Show / hide mobile cart
cartIcon.addEventListener("click", () => {
  mobileCart.classList.toggle("hidden");
});

// Show / hide desktop cart
cartIcon.addEventListener("click", () => {
  desktopCart.classList.toggle("hidden");
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
