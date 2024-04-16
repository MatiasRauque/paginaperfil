let botones_aceptar = document.querySelectorAll(".boton-aceptar");
let botones_rechazar = document.querySelectorAll(".boton-rechazar");
let contador = document.querySelector("#contador");
let contador1 = document.querySelector("#contador1");
let edit = document.querySelector("#editp")

botones_aceptar.forEach(function(node){
    node.addEventListener("click", function(){
        node.parentElement.parentElement.remove();
        let num = Number(contador.innerHTML);
        num++;
        contador.innerHTML= num;

        let num1 = Number(contador1.innerHTML);
        num1--;
        contador1.innerHTML= num1;
    });

});

botones_rechazar.forEach(function(node){
    node.addEventListener("click", function(){
        node.parentElement.parentElement.remove();
        let num = Number(contador1.innerHTML);
        num--;
        contador1.innerHTML= num;
    });

});
let namee = document.querySelectorAll("#name1");
edit.addEventListener("click", function(){
    let nombre = "Nicolas Jaramillo"
    document.getElementById("name1").innerHTML = nombre;
    
})