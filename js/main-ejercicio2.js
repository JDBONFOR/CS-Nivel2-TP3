var $btnAdd = document.getElementById('btn-add');
var $btnRem = document.getElementById('btn-rem');
var $inputDay = document.getElementById('input-days');
var Lista = document.createElement('ul');
var $listSection = document.getElementById('listSection');

$btnAdd.addEventListener('click', function(event){
  createListElement();
  addElementToList();
  emptyValue();
}, false);

$btnRem.addEventListener('click', function(event){
  removeElementToList();
  emptyValue();
}, false);

// Funciones creadas para la interacción.
function createListElement(){
  $listSection.appendChild(Lista);
}

function addElementToList() {
  var elementoLista = document.createElement('li');
  elementoLista.innerText = $inputDay.value.toLowerCase();
  Lista.appendChild(elementoLista);
}

function removeElementToList() {
  var listContent = document.querySelectorAll('ul li');
  for (var i = 0; i < listContent.length; i++) {
    if (listContent[i].innerText.toLowerCase() === $inputDay.value) {
      console.log(listContent);
      Lista.removeChild(listContent[i]);
    }
  }
}

function emptyValue() {
  $inputDay.value = "";
}
