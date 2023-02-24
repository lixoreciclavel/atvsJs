let nome = parseInt(prompt('Digite o seu nome: '));
let genero = parseInt(prompt('Digite o seu gênero (m ou f): '));
let idade = parseInt(prompt('Digite a sua idade: '));
let tempoContribuicao = parseInt(prompt('Digite o seu tempo de contribuição: '));

if(genero == "m" && idade >= 65 && tempoContribuicao >=35){
    document.getElementById('info3').innerHTML = `Você tem ${idade} anos de idade, e ${tempoContribuicao} anos de contribuição, ou seja, pode se aposentar.`
}else{
    document.getElementById('info3').innerHTML = `Você tem ${idade} anos de idade, e ${tempoContribuicao} anos de contribuição, ou seja, pode se aposentar.`
} 

if(genero == "f" && idade >= 62 && tempoContribuicao >= 30){
    document.getElementById('info3').innerHTML = `Você tem ${idade} anos de idade, e ${tempoContribuicao} anos de contribuição, ou seja, pode se aposentar.`
}else{
    document.getElementById('info3').innerHTML = `Você tem ${idade} anos de idade, e ${tempoContribuicao} anos de contribuição, ou seja, pode se aposentar.`
}
