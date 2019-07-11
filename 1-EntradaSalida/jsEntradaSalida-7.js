/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  var valorA
  var valorB

  valorA = document.getElementById("numeroUno").value;
  valorB = document.getElementById("numeroDos").value;

  alert(parseInt(valorA) + parseInt(valorB));

}

function restar() {
  var valorA
  var valorB

  valorA = document.getElementById("numeroUno").value;
  valorB = document.getElementById("numeroDos").value;

  alert(parseInt(valorA) - parseInt(valorB));
}

function multiplicar() {
  var valorA
  var valorB

  valorA = document.getElementById("numeroUno").value;
  valorB = document.getElementById("numeroDos").value;

  alert(parseInt(valorA) * parseInt(valorB));
}

function dividir() {
  var valorA
  var valorB

  valorA = document.getElementById("numeroUno").value;
  valorB = document.getElementById("numeroDos").value;

  alert(parseInt(valorA) / parseInt(valorB));
}

