let temperaturaGeral;
let temperaturaCelsius = parseInt(prompt('Digite a temperatura em graus celsius: '));

temperaturaGeral = temperaturaCelsius * 1.8 + 32;
temperaturaGeral = document.getElementById('info2').innerHTML = `A temperatura em Faahrenheit é ${temperaturaGeral}`;