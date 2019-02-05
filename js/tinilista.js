var input = document.querySelector("input[type= 'text']");
var lista = document.querySelector("ul");

input.addEventListener("keypress",function(pressedKey){

    if(pressedKey.which === 13){
// create a new item with icon wrapped in span
var iteme = document.createElement("li");
var addSpan = document.createElement("span");
var icon = document.createElement("i");
icon.innerHTML = "clear";

var newItem = this.value;
this.value = " ";

icon.classList.add('material-icons'); // add material Icons to span
addSpan.append(icon);

lista.appendChild(iteme).append(addSpan, newItem);

    }
});