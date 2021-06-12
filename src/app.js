const burgerIcon = document.querySelector(".burger_icon");
const navLinks = document.querySelector(".nav_links");
const logoImg = document.querySelector(".logo-img");
const nav = document.querySelector(".navigation");

burgerIcon.addEventListener("click", () => {
  if (burgerIcon.classList.contains("active")) {
    burgerIcon.classList.remove("active");
    navLinks.classList.remove("active");
    logoImg.src = "images/logo.svg";
    document.body.style.overflow = "scroll";
  } else {
    burgerIcon.classList.add("active");
    navLinks.classList.add("active");
    logoImg.src = "images/logo-white.svg";
    document.body.style.overflow = "hidden";
  }
});

const cartOpenBtn = document.querySelector(".cart_icon");
const closeCartBtn = document.querySelector(".clost_cart_btn");
const cartWrapper = document.querySelector(".cart_items_wrapper");
const cart_items = document.querySelector(".cart_items");

cartOpenBtn.addEventListener("click", () => {
  cartWrapper.classList.add("active");
  cart_items.classList.add("active");
});

function closeCart() {
  cartWrapper.classList.remove("active");
  cart_items.classList.remove("active");
}

//scroll to view

const learnBtn = document.querySelector(".learn");

learnBtn.addEventListener("click", () => {
  const el = document.getElementById(learnBtn.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
