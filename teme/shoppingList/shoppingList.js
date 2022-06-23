let state = {
  list: [
    {
      product: "Milk",
    },
    {
      product: "Ketchup",
    },
    {
      product: "Pasta",
    },
    {
      product: "Cereals",
    },
    {
      product: "Cheese",
    },
    {
      product: "Eggs",
    },
  ],
  idxEdit: null,
  sortColumn: null,
  sortDirection: 1,
};

function draw() {
  let table = document.querySelector("#list tbody");
  let str = "";
  for (let i = 0; i < state.list.length; i++) {
    let elem = state.list[i];
    str += `
            <tr>
                <td>${elem.product}</td>
                <td class="completed">
                    <button onclick="showMarked(${i})"> Mark as buyed </button>
                </td>
            </tr>
            `;
    if (elem.marked === true) {
      showMarked();
      draw();
    } else {
      continue;
    }
  }
  table.innerHTML = str;
}

function adauga(event) {
  event.preventDefault();
  let product = document.querySelector("[name='product']").value.trim();
  if (state.idxEdit === null) {
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
  document.querySelector("td").classList.add("completed");
  state.list[idx].marked = true;
  draw();
}

function showTable() {
  document.querySelector("#list").classList.remove("hidden");
}

function sortTableasc(column) {
  //    state.list.sort(compareProduct);
  /*function compare(a,b) {
    return a-b;
}*/
  state.list.sort(function (a, b) {
    //function compareProduct(a,b){
    let columnA = a[column];
    let columnB = b[column];
    columnA = columnA.toLowerCase();
    columnB = columnB.toLowerCase();
    if (columnA < columnB) {
      return 1;
    } else if (columnA > columnB) {
      return -1;
    } else {
      return 0;
    }
  });
  draw();
}

function sortTabledesc(column) {
  state.list.sort(function (a, b) {
    //function compareProduct(a,b){
    let columnA = a[column];
    let columnB = b[column];
    columnA = columnA.toLowerCase();
    columnB = columnB.toLowerCase();
    if (columnA < columnB) {
      return -1;
    } else if (columnA > columnB) {
      return 1;
    } else {
      return 0;
    }
  });
  draw();
}
