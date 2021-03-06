// declaring variables
var input = document.querySelector("input[type= 'text']");
var lista = document.querySelector("ul");
var container = document.querySelector("div");


function deleteClick(){
    var spans = document.querySelectorAll('span');
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            // event.stopPropagation();
        });
    }
}

// adding new items to the list
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

        lista.appendChild(iteme).append(newItem, addSpan);

        deleteClick();
    }
});

// strike through finished task
lista.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle('checked');
    }
},false
);

// button-menu functionality
var save = document.querySelector('.save');
var clear = document.querySelector('.clear');

save.addEventListener('click', function(){
    localStorage.setItem('tiniLista', lista.innerHTML);
});

function loadLista(){ //if there is anything stored in localStorage();
    if(localStorage.getItem('tiniLista')){
        lista.innerHTML = localStorage.getItem('tiniLista');
        deleteClick();
    }
}

clear.addEventListener('click', function(){
  lista.innerHTML = "";
  localStorage.removeItem('tiniLista', lista.innerHTML);
});


loadLista();
deleteClick();


var tips = document.querySelector(".tips");
tips.addEventListener('click', function(){
    document.getElementById("overlay").style.display ="block";
});
overlay.addEventListener('click', function(){
    document.getElementById("overlay").style.display ="none";
})
