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
      4: "Vintage",
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
         <div class="box col-xs-12 col-md-4 col-lg-3">
            <div class="items">
             <h3>${data["item-name"]}</h3>
             <hr>
             <div class="item-img">
                <img src="${data.photo}"/><br />
             </div>
             <div>${data.price} €</div><br />
           </div>
        </div>
    `;
}

bonsaiDataText.innerHTML = str;
}
  