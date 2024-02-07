/*var nome= "Davi"
let nome= "Davi"

const PI = 3.14


console.log("Seja bem-vindo a aula de JavaScript" + nome)
console.log(PI)

nome= "Antonio"
PI= 3.18

console.log("Seja bem-vindo a aula de JavaScript" + nome)
console.log(PI)

let nome="Davi"

const dbhost = "localhost"
const dbuser = "root"
const dbpass = "123"

*/

//Estruturas condicionais

let nota = 8

if (nota>=7){
    console.log("Aluno Aprovado")
}else{
    if (nota>=5){
    console.log("Aluno recuperação")
    }else{
    console.log("Aluno Reprovado")
    }
}

let dia = 10

switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segund-Feira")
        break;
    case 3:
        console.log("Terça-Feira")
        break;
    default:
        console.log("Valor Inválido")    
        
}