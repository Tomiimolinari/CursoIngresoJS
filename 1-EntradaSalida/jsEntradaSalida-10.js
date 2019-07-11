/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var sueldo;
  var resultado;
  var porcentaje;

  sueldo = document.getElementById("importe").value;

  porcentaje = 25;

  resultado = parseInt(sueldo) - ((parseInt(sueldo) / 100 ) * (porcentaje));

  document.getElementById("resultado").value = resultado;

}
