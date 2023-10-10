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
    document.getElementById('display').innerHTML = eval(resultado);
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