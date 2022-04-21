let state = {
    list:[
        {
            product:"Milk",
        },
        {
            product:"Ketchup",
        },
        {
            product:"Pasta",
        },
        {
            product:"Cereals",
        },
        {
            product:"Cheese",
        },
        {
            product:"Eggs",
        },
    ],
idxEdit:null,
sortColumn: null,
sortDirection: 1,
};

function draw(){
    let table = document.querySelector("#list tbody");
    let str = "";
    for(let i = 0; i < state.list.length; i++){
        let elem = state.list[i];
        str+=`
            <tr>
                <td>${elem.product}</td>
                <td>
                    <button onclick="showMarked(${i})">Mark as buyed</button>
                </td>
            </tr>
            `;
    }
    table.innerHTML = str;
}

function adauga(event) {
    event.preventDefault();
    let product = document.querySelector("[name='product']").value.trim();
    if(state.idxEdit===null){
        state.list.push({
            product: product,
        });
    } else {
        state.list[state.idxEdit] = {
            product: product,
        };
        state.idxEdit = null;
    }
    document.querySelector("form").reset();
    draw();
}

function showMarked(idx) {
    let elem = state.list[idx];
    document.querySelector("[name='product']").value = elem.product;
    if(state.idxEdit=== "none") {
        state.idxEdit.toggle("comleted", false)
    } else {
        state.idxEdit.toggle("completed", true)
    }
    state.idxEdit = idx;
}

function showTable() {
    document.querySelector("#list").classList.remove("hidden");
}

function sortTable(column) {

    state.list.sort();
}
