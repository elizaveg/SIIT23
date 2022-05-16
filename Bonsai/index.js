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


    bonsaiDatabase: "https://bonsai-d465c-default-rtdb.europe-west1.firebasedatabase.app/",
}
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
  //input = input.toLowerCase();
  let items = document.querySelectorAll(".box");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let text = item.querySelector(".itemName").innerText;
    if (!text.includes(input)) {
      item.classList.add("hidden");
      document.querySelector("#no_items").classList.remove("hidden");
      //show no_items

    } else {
      item.classList.remove("hidden");
      document.querySelector("#no_items").classList.add("hidden");
    
    }
  }
}