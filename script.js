function inserirValor(valor){
    let numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + valor;
}
function clean(){
    let display = document.getElementById('display');
    display.innerHTML = "";
}
function calcular(){
    let resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);
    }else{
        document.getElementById('display').innerHTML = "Nada";
    }
}
function calcLog10(){
    let numero = parseFloat(document.getElementById('display').innerHTML);
    let resultado = Math.log10(numero);
    document.getElementById('display').innerHTML = resultado;
}
function calcLog2(){
    let numero = parseFloat(document.getElementById('display').innerHTML);
    let resultado = Math.log2(numero);
    document.getElementById('display').innerHTML = resultado;
}
function calcLogBaseNatural(){
    let numero = parseFloat(document.getElementById('display').innerHTML);
    let resultado = Math.log(numero);
    document.getElementById('display').innerHTML = resultado;
}
function calcRaiz(){
    let numero = parseFloat(document.getElementById('display').innerHTML);
    let resultado = Math.sqrt(numero);
    document.getElementById('display').innerHTML = resultado;
}
function potencia2(){
    let numero = parseFloat(document.getElementById('display').innerHTML);
    let resultado = numero ** 2;
    document.getElementById('display').innerHTML = resultado;
}
function fatorial(){
    let numero = parseFloat(document.getElementById('display').innerHTML);

    if(numero < 0){
        document.getElementById('display').innerHTML = -1;
    }else if(numero == 0){
        document.getElementById('display').innerHTML = 1;
    }else{
        for(let i = numero-1; i >= 1; i--){
            numero *= i;
        }
        document.getElementById('display').innerHTML = numero;
    }
}