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

function calcular(){
    let valor1 = Number(document.getElementById("primeirovalor").value)
    let valor2 = Number(document.getElementById("segundovalor").value)
    const option = document.querySelector("input[name='option']:checked").value;

    if((valor1 >=0 && valor1 <=100) && (valor2 >=0 && valor2 <=100)){
        switch (option){
           case "+":
            document.getElementById("resultado").innerHTML = valor1 + valor2
            break;
           case "-":
            document.getElementById("resultado").innerHTML = valor1 - valor2
            break; 
           case "*":
            document.getElementById("resultado").innerHTML = valor1 * valor2
            break; 
           case "/": 
           document.getElementById("resultado").innerHTML = valor1 / valor2
        }
    }else{
        alert("Digite valores válidos");
    }    
}
