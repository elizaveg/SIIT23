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
}

function valideazaTelefon(input) {
    let valid = true; // se porneste cu situatia ca este bine, pana cand..
    //camp optional
    if (input.value.length > 0) { //daca se scrie in camp se valideaza, daca n
      for (let ch of input.value) {
        if (ch < "0" || ch > "9") {
          //fiecare caracter trebuie sa fie intre 0 si 9
          valid = false; // caut un exemplu cand nu e ok
        }
      }
      valid = valid && input.value.length === 10;
    }
    showError(input, valid);
    //se da functia mea"input" si daca este valid sau nu
  }

  function valideazaNume(input) {
    let valid = input.value.length >= 3;
    showError(
      input,
      valid
    );
  }

  function showError(input, valid) {
    let span = input.nextElementSibling; //se ia din consola $0 (se selecteaza din elements elementul anterior si in consola se scrie $0)
    if (valid) {
      input.classList.remove("error"); //daca este valid se scoate error-ul
      span.innerHTML = ""; //nu ia nici o valoare
    } else {
      input.classList.add("error"); //altfel adaug
    }
  }

  function valideazaFormular(event) {
    event.preventDefault(); //nu face submit la formular
    //validare campuri
    let nume = document.querySelector("[name='nume']");
    let phone = document.querySelector("[name='phone']");
    nume.onchange(); // valideazaNume(lastname);
    phone.onchange(); //valideazaTelefon(phone);
    }
  




