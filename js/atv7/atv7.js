let num=prompt("Me conte até que número você quer dividir")

console.log(`Os divisores de ${num} são: `)

for(let x = 1; x <= num; x++){
    if(num % x === 0){
        console.log(x)
    }
}