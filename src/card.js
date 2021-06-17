//tickets card
const btn_standard = document.querySelectorAll(".btn_standard");
const number = document.querySelector(".number");
const totalItem = document.querySelector("total_items");

const cart = [
  {
    name: "Standard",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Standard",
  },
  {
    name: "Premium",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Premium",
  },
  {
    name: "Deluxe",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Deluxe",
  },
];

const localData = [];

document.addEventListener("DOMContentLoaded", () => {
  btn_standard.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id") - 1;
      localData.push(cart[id]);
      cart[id]["Quantite"] = `${number.value}`;
      localStorage.setItem("tickets", JSON.stringify(localData));
    });
  });
});

//cart items DOM

const itemsWrapper = document.querySelector(".item_wrapper");
console.log(itemsWrapper);

if (localStorage.length == 0) {
  const noItems = document.createElement("div");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const btn = document.createElement("button");

  noItems.classList.add("no_items_found");
  p.innerHTML = "No items Found";
  btn.innerHTML = "Buy Tickets";
  a.href = "../tickets.html";
  a.appendChild(btn);

  noItems.appendChild(p);
  noItems.appendChild(a);

  itemsWrapper.appendChild(noItems);
}
