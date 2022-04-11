function valideazaTelefon(input) {
    let valid = true;
    if (input.value.length > 0) {
      for (let ch of input.value) {
        if (ch < "0" || ch > "9") {
          valid = false;
        }
      }
      valid = valid && input.value.length === 10;
    }
    showError(input, valid, "Numarul de telefon nu este de 10 cifre");
  }
  
function showError(input, valid) {
    if(valid) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
    }
}

function valideazaNume(input) {
    let valid = input.value.length >= 3;
    showError(
      input,
      valid,
      "Numele trebuie sa fie de cel putin 3 caractere"
    );
  }

function showError(input, valid, message) {
    let span = input.nextElementSibling;
    if (valid) {
      input.classList.remove("error");
      span.innerHTML = "";
    } else {
      input.classList.add("error");
      span.innerHTML = message;
    }
  }

  function valideazaFormular(event) {
    event.preventDefault();
    let firstname = document.querySelector("[name='iname']");
    let phone = document.querySelector("[name='phone']");
    iname.onchange();
    phone.onchange();
    // valideazanume(name);
    //valideazaTelefon(phone);
  }