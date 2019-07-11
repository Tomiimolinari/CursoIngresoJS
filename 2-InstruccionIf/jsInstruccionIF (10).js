function mostrar() {
  //Genero el número RANDOM entre 1 y 10

  var numero;

  numero = Math.floor(Math.random() * (11 - 1)) + 1;

  alert(numero)

  if (numero == 9 || numero == 10)
    {
      alert("Exelente");
    }
  else if (numero >= 4 && numero < 9)
    {
      alert("Aprobó");
    }
  else
    {
      alert("Vamos, la proxima se puede")
    }
}//FIN DE LA FUNCIÓN
