const ContentBtns = $(".header_btns button");
const content = $(".agenda .wrapper");
console.log(content);

for (let i = 0; i <= ContentBtns.length; i++) {
  ContentBtns.eq(i).on("click", () => {
    content.removeClass("active");
    ContentBtns.removeClass("active");
    content.eq(i).addClass("active");
    ContentBtns.eq(i).addClass("active");
  });
}
