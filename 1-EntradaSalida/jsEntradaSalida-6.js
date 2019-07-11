/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  var valorA
  var valorB

  valorA = document.getElementById("numeroUno").value;
  valorB =document.getElementById("numeroDos").value;

  alert(parseInt(valorA) + parseInt(valorB));
}

