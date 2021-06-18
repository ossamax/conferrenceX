//tickets card
const btn_addTocart = document.querySelectorAll(".add_to_cart_btn");
const number = document.querySelector(".number");

const cart = [
  {
    name: "Standard",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Standard",
    quantity: "1",
  },
  {
    name: "Premium",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Premium",
    quantity: "1",
  },
  {
    name: "Deluxe",
    img: "../images/icon_tickets_1.png",
    price: "$ 49.00",
    ticket: "Deluxe",
    quantity: "1",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const itemsWrapper = document.querySelector(".item_wrapper");
  const totalItem = document.querySelector(".total_items");
  const data = JSON.parse(localStorage.getItem("ticket"));
  let cartItemsNumber = data.length;
  totalItem.innerText = cartItemsNumber;
  const localData = [JSON.stringify(localStorage.getItem("ticket"))];

  btn_addTocart.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id") - 1;
      localData.push(cart[id]);
      cart[id]["Quantite"] = `${number.value}`;
      cartItemsNumber++;
      totalItem.innerText = cartItemsNumber;
      document.querySelector(".add_to_cart_btn").disabled = true;
      localStorage.setItem("ticket", JSON.stringify(localData));

      const itemDiv = localData.map((item) => {
        const div = `<div class="item">
                  <div class="img">
                    <img
                      src=${item.img}
                      alt="standard ticket"
                    />
                  </div>
                  <div class="item_info">
                    <div class="item_name">${item.name}</div>
                    <div class="item_price">${item.price}</div>
                    <div class="item_ticket">Ticket: <span>${item.name}</span></div>
                    <button class="btn_remove">Remove</button>
                  </div>
                  <div class="quantity">${item.quantity}</div>
                </div>`;

        return div;
      });

      itemsWrapper.innerHTML = itemDiv;
      itemsWrapper.classList.remove("flex");
      cartWrapper.classList.add("active");
      cart_items.classList.add("active");
    });
  });

  //cart items DOM

  if (localStorage.length == 0) {
    const noItems = document.createElement("div");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const btn = document.createElement("button");

    noItems.classList.add("no_items_found");
    btn.classList.add("buy_items");
    p.innerHTML = "No items Found";
    btn.innerHTML = "Buy Tickets";
    a.href = "../tickets.html";
    a.appendChild(btn);

    noItems.appendChild(p);
    noItems.appendChild(a);
    itemsWrapper.appendChild(noItems);
    itemsWrapper.classList.add("flex");
  } else {
    const data = JSON.parse(localStorage.getItem("ticket"));

    const itemDiv = data.map((item) => {
      const div = `<div class="item">
                  <div class="img">
                    <img
                      src=${item.img}
                      alt="standard ticket"
                    />
                  </div>
                  <div class="item_info">
                    <div class="item_name">${item.name}</div>
                    <div class="item_price">${item.price}</div>
                    <div class="item_ticket">Ticket: <span>${item.name}</span></div>
                    <button class="btn_remove">Remove</button>
                  </div>
                  <div class="quantity">${item.quantity}</div>
                </div>`;

      return div;
    });

    itemsWrapper.innerHTML = itemDiv;
    itemsWrapper.classList.remove("flex");
    cartWrapper.classList.add("active");
    cart_items.classList.add("active");
  }
});
