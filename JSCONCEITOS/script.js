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
/*
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
        console.log("Segunda-Feira")
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
*/

/* LAÇOS DE REPETIÇÃO */
/*
let cont = 0

do{
    console.log("JavaScript!")
    cont++
}while(cont < 10)

while(cont < 10){
    console.log("JavaScript!")
    cont++
}
for(let cont = 0; cont< 10; cont++) {
    console.log("JavaScript") 
}
*/

let anos = [[2000, 2001, 2002], 
            [2010, 2011, 2012], 
            [2020, 2021, 2022]]

for(let linha = 0; linha < anos.length; linha++) {
    for(let coluna = 0; coluna < anos[0].length; coluna++){
        console.log(anos[linha][coluna])
    }
}

for(let i in anos){
    console.log(i)
}

let pessoa = {
    nome: 'Davi',
    telefone: '470000000',
    exibirInfo() {
        console.log("Nome: " + this.nome + " " + "Telefone" + this.telefone)
    }
}


let pessoas = [
    {
        nome: 'Davi',
        telefone: '470000000', 
    },
    {
        nome: 'João',
        telefone: '470000000',
    },
    {
        nome: 'Maria',
        telefone: '470000000'
    },
];

for(let i = 0; i < pessoas.length, i++){
    console.log(pessoas[i].nome);
}