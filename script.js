var operandoa;
var operacionb;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resdown');
    var resetall = document.getElementById('resetall');
    var sum = document.getElementById('opM');
    var resta = document.getElementById('opm');
    var multi = document.getElementById('opx');
    var divi = document.getElementById('divi');
    var equal = document.getElementById('igual');
    var quote = document.getElementById('cq');
    var reset = document.getElementById('reset');
    //Numeros
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var n6 = document.getElementById("n6"); 
    var n7 = document.getElementById("n7");
    var n8 = document.getElementById("n8");
    var n9 = document.getElementById('nueve');
    var n0 = document.getElementById("n0");

    //Eventos
    n1.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
        alert("hola");
    }
    n2.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    n3.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    n4.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    n5.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    n6.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    n7.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    n8.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    n9.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    n0.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    resetall.onclick = function(e){
        resetear();
    }
    reset.onclick = function(e){
        resetope();
    }
    sum.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    equal.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

    quote.onclick = function(e){

    }

}
function resetope(){
    if(operacion == ""){
        operandoa = 0;        
    }else{
        operandob = 0;
    }
    resdown.textContent = "";
}
function limpiar(){
    resdown.textContent = "";
}
function resetear(){
    resdown.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resdown.textContent = res;
}