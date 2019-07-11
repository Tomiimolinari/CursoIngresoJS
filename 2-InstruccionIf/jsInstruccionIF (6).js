function mostrar()
{
//tomo la edad

  var edad

  edad=document.getElementById("edad").value;

    if (edad >= 18)
    {
      alert("es mayor de edad")
    }
    else if (edad >= 13 && edad <= 17)
    {
      alert("es adolescente")
    }
    else
    {
      alert ("es un niño")
    }
}//FIN DE LA FUNCIÓN
