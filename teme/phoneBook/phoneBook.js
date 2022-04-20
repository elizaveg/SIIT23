let state = {
    list:[
        {
            nume:"Anastasia",
            phone:"0712345678",
        },
    ],
idxEdit:null,
};

function draw(){
    let table = document.querySelector("#list tbody");
    let str = "";
    for(let i = 0; i < state.list.length; i++){
        let elem = state.list[i];
        str+=`
            <tr>
                <td>${elem.nume}</td>
                <td>${elem.phone}</td>
                <td>
                    <button onclick="del(${i})">Delete</button>
                    <button onclick="edit(${i})">Edit</button>
                </td>
            </tr>
            `;
    }
    table.innerHTML = str;
}

function edit(idx) {
    let elem = state.list[idx];
    document.querySelector("[name='nume']").value = elem.nume;
    document.querySelector("[name='phone']").value = elem.phone;
    state.idxEdit = idx;
}

function del(idx){
    if(
        confirm(`Are you sure you want to delete this item: ${state.list[idx].nume}?`)) {
        state.list.splice(idx,1);
        draw();
    }
}

function adauga(event) {
    event.preventDefault();
    let nume = document.querySelector("[name='nume']").value.trim();
    let phone = document.querySelector("[name='phone']").value.trim();
    if(state.idxEdit===null){
        state.list.push({
            nume: nume,
            phone: phone,
        });
    } else {
        state.list[state.idxEdit] = {
            nume: nume,
            phone: phone,
        };
        state.idxEdit = null;
    }
    document.querySelector("form").reset();
    draw();
}


function showTable() {
    document.querySelector("#list").classList.remove("hidden");
    document.querySelector("#form").classList.add("hidden");
}
