/*
 * Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
 * para completar las preguntas debajo cuando hagas "submit" en el formulario:
 * 1. ✓ Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
 * 2. ✓ Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
 * 3. ✓ Haz un loop que cambie la clase de cada <li> a "list-item"
 * 4. ✓ Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
 * de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
 * pero crédito extra si lo logras sin añadir elementos adicionales.
 * 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */

document.addEventListener("DOMContentLoaded", function() {
  let restaurantInput = document.getElementById("restaurantsInput");
  let neighborhoodInput = document.getElementById("neighborhoodInput");
  let hometownInput = document.getElementById("hometownInput");

  let restaurantSpan = document.getElementById("restaurant");
  let neighborhoodSpan = document.getElementById("neighborhood");
  let hometownSpan = document.getElementById("hometown");

  function handleSubmit(event) {
    event.preventDefault();

    restaurantSpan.textContent = restaurantInput.value;
    neighborhoodSpan.textContent = neighborhoodInput.value;
    hometownSpan.textContent = hometownInput.value;

    alert("Submit!");
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  let ul = document.querySelector("ul");
  let lis = ul.querySelectorAll("li");

  lis.forEach(function(elem) {
    elem.classList.add("list-item");
  });

  const elemDiv = document.getElementById("picture-div");
  const image = document.createElement("img");
  image.src =
    "https://images.pexels.com/photos/15879564/pexels-photo-15879564/free-photo-of-madera-barra-animal-mascota.png";
  elemDiv.appendChild(image);
});
