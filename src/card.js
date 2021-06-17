//tickets card
const btn_addTocart = document.querySelectorAll(".add_to_cart_btn");
const number = document.querySelector(".number");

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
  const totalItem = document.querySelector(".total_items");
  let cartItemsNumber = 0;
  totalItem.innerText = localStorage.length;

  btn_addTocart.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id") - 1;
      localData.push(cart[id]);
      cart[id]["Quantite"] = `${number.value}`;
      localStorage.setItem("tickets", JSON.stringify(localData));
      cartItemsNumber++;
      totalItem.innerText = cartItemsNumber;
      document.querySelector(".add_to_cart_btn").disabled = true;
      console.log("clicked");
    });
  });
});

//cart items DOM

const itemsWrapper = document.querySelector(".item_wrapper");

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
} else {
  
}
