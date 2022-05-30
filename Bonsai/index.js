let state = {
  search: {
    title: "",
    category: "",
    tags: "",
  },
  idxEdit: null,
  sortColumn: null,
  sortDirection: 1, //1 e asc, -1 e desc

  category: {
    0: "Jewelry & Accessories",
    1: "Clothing & Shoes",
    2: "Home & Living",
    3: "Toys & Entertainment",
    4: "Art & Tools",
    5: "Vintage",
  },

  bonsaiDatabase:
    "https://bonsai-d465c-default-rtdb.europe-west1.firebasedatabase.app/",
};
let bonsaiData = {};

async function getData() {
  const response = await fetch(state.bonsaiDatabase + ".json");
  bonsaiData = await response.json();
  let bonsaiDataText = document.querySelector("#product");
  var str = "";
  for (let [i, data] of Object.entries(bonsaiData)) {
    str += `
         <div class="box col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <a href="details.html?id=${i}">
               <div class="items">
                <div class="item-img">
                   <img src="${data.photo}"/><br />
                </div>
                <h3 class="itemName">${data["item-name"]}</h3>
                <div>${data.price} €</div><br />
              </div>
            </a>
        </div>
    `;
  }
  bonsaiDataText.innerHTML = str;
}

function searchItem() {
  let input = document.querySelector('[name="input"]').value;

  let items = document.querySelectorAll(".box");
  input = input.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let text = item.querySelector(".itemName").innerText;
    if (!text.includes(input)) {
      item.classList.add("hidden");
      //show no_items
      document.querySelector("#no_items").classList.remove("hidden");
    } else {
      item.classList.remove("hidden");
      //hide no_items
      document.querySelector("#no_items").classList.add("hidden");
    }
  }
}
let product = {};
let index = window.location.search.substring(4);

async function getDetails() {
  const response = await fetch(state.bonsaiDatabase + index + ".json");
  curentItem = await response.json();
  let curentItemText = document.querySelector("#curentDetails");
  var str = "";
  str += `
    <div>
      <h3>${curentItem["item-name"]}</h3>
      <div>
          <div class="item-img">
            <img src="${curentItem.photo}"/><br />
          </div>
          <div>${curentItem["description"]}</div>
          <div>${curentItem["price"]} €</div>
      </div>
    </div>
    <input type="number" name="quantity" />
    <a href="cart.html">
      <button class="shop-item-button" onclick="addItem()">Add to cart</button>
    </a>
    `;
  curentItemText.innerHTML = str;

}
function addItem() {
  let itemID = index;
  let quantity = document.querySelector("[name=quantity]").value;
  quantity = Number(quantity);
  if (isNaN(quantity) || quantity <= 0) {
    document.querySelector("[name=quantity]").classList.add("invalid");
    alert("Nu e cantitate buna!");
    return;
  }
  let product = {
    itemID: itemID,
    photo: curentItem.photo,
    name: curentItem["item-name"],
    price: curentItem["price"],
    quantity: quantity,
  };
  let cart = localStorage.getItem("cart");
  if (cart === null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }
  let found = false;
  for (let p of cart) {
    if (p.itemID === product.itemID) {
      p.quantity += product.quantity;
      found = true;
    }
  }
  if (!found) {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function displayCart() {
  let cartItems = localStorage.getItem("cart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");
  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">x
        <img src="${product.photo}" />
        <span>${product.name}</span>
        <div class="price">${product.price} </div>
      </div>
        `;
    });
  }
}

