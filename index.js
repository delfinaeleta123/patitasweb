document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".formulario button");

  boton.addEventListener("click", function (event) {
    event.preventDefault(); 

   
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";

    
    alert("¡Gracias por contactarnos!");
  });
});