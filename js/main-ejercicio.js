var week = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(week);

var elementoTitulo = document.createElement('h1');
elementoTitulo.innerText = "Días";
document.body.appendChild(elementoTitulo);

var elementoLista = document.createElement('ul');
document.body.appendChild(elementoLista);

for (var i=0; i<7; i++) {
  var elementoListaLi = document.createElement('li');
  elementoListaLi.innerHTML =  checkWeekendAndBold(week[i]);
  document.getElementsByTagName('ul')[0].appendChild(elementoListaLi);
}

function checkWeekendAndBold (dayOfWeek) {
  if (dayOfWeek == "sabado" || dayOfWeek == "domingo") {
    return "<b>" + dayOfWeek + "</b>";
  } else {
    return dayOfWeek;
  }

}
