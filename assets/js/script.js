// AGREGANDO Y QUITANDO BORDE A IMÁGEN //

let btn = document.querySelector("#button-border");
let image = document.querySelector("#image-2");
let counter = 0;
function border() {
  if (counter == 0) {
    image.setAttribute("style", "border:2px solid red");
    counter = 1;
  } else {
    image.style.removeProperty("border");
    counter = 0;
  }
}
btn.addEventListener("click", border);

// COMPRANDO TICKET SOLO HASTA 10 //
let verify = document.querySelector("#check-ticket");
let messageTicket = document.querySelector("#message-ticket");

function ticket() {
  let input1 = document.querySelector("#cant1").value;
  let input2 = document.querySelector("#cant2").value;
  let input3 = document.querySelector("#cant3").value;
  let additionInput = Number(input1) + Number(input2)+ Number(input3);

  if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
    messageTicket.innerHTML = "Sólo debes ingresar números";
    messageTicket.style.color = "red";
  } 

  else if (additionInput == 0) {
    messageTicket.innerHTML = " No seleccionaste ningún ticket (?)";
    messageTicket.style.color = "blue";
  } 
  else if (additionInput <= 10) {
    messageTicket.innerHTML = `Llevas  ${additionInput} Tickets`;
    messageTicket.style.color = "green";
    } 

  else {
    messageTicket.innerHTML = "X Llevas Demasiados Ticket!! X";
    messageTicket.style.color = "red";
  }
}
verify.addEventListener("click", ticket);

// INGRESANDO CONTRASEÑA 1 Y 2 //

let check = document.querySelector("#check");
let par = document.querySelector("#result");
function clave() {
  let password = Number(
    document.querySelector("#select1").value +
      document.querySelector("#select2").value +
      document.querySelector("#select3").value
  );
  if (password === 911) {
    par.innerHTML = "¡Password 1 Correcta!";
    par.style.color = "green";
  } else if (password === 714) {
    par.innerHTML = "¡Password 2 Correcta!";
    par.style.color = "green";
  } else {
    par.innerHTML = "¡Password Incorrecta!";
    par.style.color = "red";
  }
}
check.addEventListener("click", clave);
