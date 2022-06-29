let state = {
  search: {
    title: "",
    category: "",
  },
  idxEdit: null,
  inCart: 0,

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
  //add loading 
  document.querySelector(".loading").classList.remove("hidden");
  document.querySelector("#myCarousel").classList.add("hidden");

  const response = await fetch(state.bonsaiDatabase + ".json");
  bonsaiData = await response.json();

  //remove loading
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#myCarousel").classList.remove("hidden");

  let bonsaiDataText = document.querySelector("#product");
  var str = "";
  for (let [i, data] of Object.entries(bonsaiData)) {
    str += `
         <div class="box col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <a href="details.html?id=${i}">
               <div class="items">
                <div class="item-img">
                   <img src="${data.photo}"/>
                </div>
                <h3 class="itemName">${data.itemName}</h3>
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
      //show no_items&carousel
      document.querySelector("#no_items").classList.remove("hidden");
      document.querySelector("#myCarousel").classList.add("hidden");
    } else {
      item.classList.remove("hidden");
      //hide no_items&carousel
      document.querySelector("#no_items").classList.add("hidden");
      document.querySelector("#myCarousel").classList.remove("hidden");
    }
  }
}
let product = {};
let index = window.location.search.substring(4);

async function getDetails() {

  document.querySelector(".loading").classList.remove("hidden");

  const response = await fetch(state.bonsaiDatabase + index + ".json");
  curentItem = await response.json();

  document.querySelector(".loading").classList.add("hidden");

  let curentItemText = document.querySelector("#curentDetails");
  var str = "";
  str += `
      <div class="details-content">
          <div class="item-img box">
            <img src="${curentItem.photo}"/><br />
          </div>
          <div class="text-details box">
            <div class="details-text">
              <h3>${curentItem.itemName}</h3>
              <div>${curentItem["description"]}</div>
              <br />
              <div class="price">Price: ${curentItem["price"]} €</div>
            </div>
            <br />
            <div class="detais-input">
              <input type="number" name="quantity" />
              <a href="cart.html">
                <button class="shop-item-button" onclick="addItem()">Add to cart</button>
              </a>
            </div>
          </div>
      </div>
    `;
  curentItemText.innerHTML = str;
}

function addItem() {
  let itemID = index;
  let quantity = document.querySelector("[name=quantity]").value;
  quantity = Number(quantity);

  //if quantity is lower than 1
  if (isNaN(quantity) || quantity <= 0) {
    document.querySelector("[name=quantity]").classList.add("invalid");
    alert("Not a good quantity!");
    return;
  }
  let product = {
    itemID: itemID,
    photo: curentItem.photo,
    name: curentItem.itemName,
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
  let s = 0;
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';

    Object.values(cartItems).map(product => {
      productContainer.innerHTML += `
      <div class="product grid-container">
          <span class="grid-item1" onclick="delCartItem(${product.itemID})">&nbsp; ✖️ &nbsp;&nbsp;</span>
          <img src="${product.photo}" class="grid-item2"/>&nbsp;
          <span class="grid-item3">${product.name}</span>
          
          <div class="quantity grid-item4"><span>➖</span>${product.quantity}<span>➕</span></div>&nbsp;
          
          <div class="price grid-item5">${product.price} </div>&nbsp;
          <div class="total grid-item6">$${(product.quantity * product.price).toFixed(2)}</div>
      </div>
      <hr />
        `;
      // display total price of cart
      s += product.quantity * product.price;
    });
  }
  document.querySelector("#result").innerHTML = "$" + s.toFixed(2);
}

function delCartItem(pID) {
  if (confirm(`Are you sure you want to delete this item?`)) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let newCart = cart.filter((product) => product.itemID != pID)
    localStorage.setItem('cart', JSON.stringify(newCart));
    displayCart();
  }
}