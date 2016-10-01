var elementoP = document.getElementsByTagName('p');
console.log(elementoP); // imprimiendo el elemento solicitado, traerá sus características

var elementoP2 = document.getElementsByName('prueba');
console.log(elementoP2); // imprime aquellos elementos que contienen el atributo name

var elementoP3 = document.getElementById('titulo');
console.log(elementoP3); // imprime aquellos elementos que contienen el Id titulo

var elementoP4 = document.getElementsByClassName('prueba2');
console.log(elementoP4); //imprime aquellos elementos que contienen solo la clase prueba2

var elementoP5 = document.querySelectorAll('#titulo');
elementoP5[0].innetHTML = <h1> "agregando un elemento HTML desde JavaScript" </h1>; // Agregando elemento HTML desde javascript
elementoP5[0].innetText = "agregando un texto desde JavaScript";


var elementoInput = document.getElementByName('name');
if (elementoInput) {
  console.log("encontre algo");
  if (elementoInput.value.length > 0 && elementoInput.value !== "este es mi elemento") {
    console.log("Es valido");
  } else {
    console.log("Es invalido");
  }
} // Validando si el campo input se encuentra vacío



var elementoH1 = document.createElement('h1');
elementoH1.innetText = "Este es mi H1";
document.body.appendChild(elementoH1); // agregándolo al HTML

document.querySelector('p').appendChild(elementoH1);
var hijoH1 = document.querySelector('p').appendChild(elementoH1);
            document.querySelector('p').removeChild(hijoH1);
