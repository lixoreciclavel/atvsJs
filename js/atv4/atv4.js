let seuPeso = parseFloat(prompt('Digite o seu peso em kg (ex: 60kg): '));
let suaAltura = parseFloat(prompt('Digite a sua altura em metros (ex: 1.70m): '))
let imc

imc = (seuPeso / (suaAltura * suaAltura));
imc = document.getElementById('info4').innerHTML = `O seu imc é de: ${imc}`;