function suma(){

    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let total = n1 + n2;
    resultado.innerHTML='La suma de: ' + n1 +" + " + n2 +"  Es  "+ total;
}

function resta(){

    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let total = n1 - n2;
    resultado.innerHTML='La resta de: ' + n1 +" - " + n2 +"  Es  "+ total;
}

function multiplicar(){

    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let total = n1 * n2;
    resultado.innerHTML='La multiplicacion de: ' + n1 +" * " + n2 +"  Es  "+ total;
}

function dividir(){

    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let total = n1 / n2;
    resultado.innerHTML='La divicion de: ' + n1 +" / " + n2 +"  Es  "+ total;
}