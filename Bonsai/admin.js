let state = {
    product: [],
    search: {
        title: "",
        category: "",
    },
    idxEdit: null,
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

    const response = await fetch(state.bonsaiDatabase + ".json");
    bonsaiData = await response.json();

    //remove loading
    document.querySelector(".loading").classList.add("hidden");

    let bonsaiDataText = document.querySelector("#product");
    var str = "";
    for (let [i, data] of Object.entries(bonsaiData)) {
        str += `
           <div class="box col-xs-12 col-sm-6 col-md-4 col-lg-3">
                 <div class="items">
                  <div class="item-img" >
                     <img src="${data.photo}"/>
                  </div>
                  <h3 class="itemName">${data.itemName}</h3>
                  <div>${data.price} €</div><br />
                  <div>${data.stoc} buc</div><br />
                  <div>${data.description}</div><br />
                  <div>
                    <button onclick="edit('${i}')">Edit</button>
                    <button onclick="del('${i}')">Delete</button>
                  </div>
                </div>
          </div>
      `;
    }
    bonsaiDataText.innerHTML = str;
}

//function for add a new product to firebase
async function addNewProduct(event) {
    event.preventDefault();
    let photo = document.querySelector("[name='photo']").value;
    let itemName = document.querySelector("[name='itemName']").value;
    let price = document.querySelector("[name='price']").value;
    let stoc = document.querySelector("[name='stoc']").value;
    let description = document.querySelector("[name = 'description']").value;
    if (state.idxEdit === null) {
        //add  new element
        let response = await fetch(state.bonsaiDatabase + ".json", {
            method: "POST",
            body: JSON.stringify({
                photo: photo,
                itemName: itemName,
                price: price,
                stoc: stoc,
                description: description,
            }),
        });
    } else {
        //edit element
        let response = await fetch(
            state.bonsaiDatabase + state.idxEdit + "/" + ".json",
            {
                method: "PUT",
                body: JSON.stringify({
                    photo: photo,
                    itemName: itemName,
                    price: price,
                    stoc: stoc,
                    description: description,
                }),
            });
        state.idxEdit = null;
    }
    document.querySelector("form").reset();
    await getData();
}

//function for edit a product with save and cancel options
function edit(idx) {
    let data = bonsaiData[idx];
    document.querySelector("[name='photo']").value = data.photo;
    document.querySelector("[name='itemName']").value = data.itemName;
    document.querySelector("[name='price']").value = data.price;
    document.querySelector("[name='stoc']").value = data.stoc;
    document.querySelector("[name='description']").value = data.description;

    state.idxEdit = idx;
}

//function for delete an item from admin page and db
async function del(idx) {
    if (
        confirm(`Sure you want to delete this: ${bonsaiData[idx].itemName}?`)
    ) {
        let url = state.bonsaiDatabase + idx + "/" + ".json";
        let response = await fetch(url, {
            method: "DELETE",
        });
        await getData();
    }
}



