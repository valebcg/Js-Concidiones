// AGREGANDO Y QUITANDO BORDE A IMÁGEN //

btn = document.querySelector("#button-border");
image = document.querySelector("#image-2");
contador = 0;
function border() {
  if (contador == 0) {
    image.setAttribute("style", "border:2px solid red");
    contador = 1;
  } else {
    image.style.removeProperty("border");
    contador = 0;
  }
}
btn.addEventListener("click", border);

// COMPRANDO TICKET SOLO HASTA 10 //
let verificar = document.querySelector("#check-ticket");
messageTicket = document.querySelector("#message-ticket");

function ticket() {
  input1 =
    Number(document.querySelector("#cant1").value) +
    Number(document.querySelector("#cant2").value) +
    Number(document.querySelector("#cant3").value);

    if (isNaN(input1.value)){
      
    }
    if (input1 == 0) {
      messageTicket.innerHTML = " No seleccionaste ningún ticket (?)";
      messageTicket.style.color = "blue";
    } else if (input1 < 10) {
      messageTicket.innerHTML = "Llevas " + input1 + " Tickets";
      messageTicket.style.color = "green";
    } 
    else if (input1 > 10) {
      messageTicket.innerHTML = "x Llevas Demasiados Ticket!! X";
      messageTicket.style.color = "red";
    } 
    
    else {
      messageTicket.innerHTML = "El campo ingresado es Incorrecto";
      messageTicket.style.color = "red";
    }
}
verificar.addEventListener("click", ticket);

// INGRESANDO CONTRASEÑA 1 Y 2 //

check = document.querySelector("#check");
par = document.querySelector("#result");
function clave() {
  password = Number(
    document.querySelector("#select1").value +
      document.querySelector("#select2").value +
      document.querySelector("#select3").value
  );
  if (password == "911") {
    par.innerHTML = "¡Password 1 Correcta!";
    par.style.color = "green";
  } else if (password == "714") {
    par.innerHTML = "¡Password 2 Correcta!";
    par.style.color = "green";
  } else {
    par.innerHTML = "¡Password Incorrecta!";
    par.style.color = "red";
  }
}
check.addEventListener("click", clave);
