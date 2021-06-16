//tickets card
const btn_standard = document.querySelectorAll(".btn_standard");

btn_standard.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.getAttribute("data-id"));
  });
});
