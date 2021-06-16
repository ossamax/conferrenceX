const burgerIcon = document.querySelector(".burger_icon");
const navLinks = document.querySelector(".nav_links");
const logoImg = document.querySelector(".logo-img");
const nav = document.querySelector(".navigation");
const src = logoImg.src;

burgerIcon.addEventListener("click", () => {
  if (burgerIcon.classList.contains("active")) {
    burgerIcon.classList.remove("active");
    navLinks.classList.remove("active");
    logoImg.src = src;
    document.body.style.overflow = "scroll";
  } else {
    burgerIcon.classList.add("active");
    navLinks.classList.add("active");
    logoImg.src = "../images/logo-white.svg";
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

//videos switcher
const yearsBtns = $(".years_wrapper .years");
const videos = $(".video_wrapper .video");
console.log(yearsBtns);

for (let i = 0; i <= yearsBtns.length; i++) {
  yearsBtns.eq(i).on("click", () => {
    videos.removeClass("active");
    yearsBtns.removeClass("active");
    videos.eq(i).addClass("active");
    yearsBtns.eq(i).addClass("active");
  });
}

//agenda switcher
const ContentBtns = $(".header_btns button");
const content = $(".agenda .wrapper");

for (let i = 0; i <= ContentBtns.length; i++) {
  ContentBtns.eq(i).on("click", () => {
    content.removeClass("active");
    ContentBtns.removeClass("active");
    content.eq(i).addClass("active");
    ContentBtns.eq(i).addClass("active");
  });
}
