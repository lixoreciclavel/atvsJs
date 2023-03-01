let maxNumber = 0;

for(let i = 0; i < 10; i++) {
    const number = parseFloat(prompt('Digite um número'));

    maxNumber = number > maxNumber ? number : maxNumber;
}

document.getElementById('info6').innerHTML = `O maior número digitado foi: ${maxNumber}`