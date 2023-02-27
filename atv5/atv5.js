let seuSalario = parseFloat(prompt('Informe o seu salário: '))
let aumento

aumento = seuSalario + (seuSalario * (30 / 100));

if(seuSalario <= 500){
    document.getElementById('info5').innerHTML = `Parabéns!!! Você tem direito a um aumento de 30% do seu salário. O seu salário agora é de: ${aumento}.`
}else{
    document.getElementById('info5').innerHTML = `Você não tem direito a um aumento no salário.`
}