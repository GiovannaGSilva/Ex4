// EX4

// FAZER UM LEVANTAMENTO DE DADOS!

// DE 5 USUARIOS
// NOME
// SOBRENOME
// CIDADE
// IDADE
// CPF
// SALDO DA CONTA BANCARIA

// FAZER UMA MENSAGEM PARA CADA USUARIO!

// FAZER A SOMA DE TODAS AS CONTAS BANCARIAS
// DIVIDIR POR 4

// PRECISA TER!!
// LISTA
//IF E ELSE

// MILHONARIO
//RICO
// BEM DE VIDA
// POBRE


var listanomes = ["Sofia", "Anna","Mariana","Pedro","Paulo"];

var listasobrenomes = ["Silva","Gomes","Pereira","Pontes","Alves"];

var listacidade = ["Blumenau","Indaial","Gaspar","Pomerode","Jaragua"];

var listaidade = ["19","25","30","40","55"];

var listacpf = ["123.456.789-12","234.567.891-23","345.678.912-34","456.789.123-45","567.891.234-56"];

var saldo0 = 300;
var saldo1 = 1000;
var saldo2 = 2500;
var saldo3 = 50000;
var saldo4 = 200000;

// test
//var listacpfs = ["123.456.789-12","234.567.891-23","345.678.912-34","456.789.123-45","567.891.234-56"];
//var listacpfs = parseInt(prompt("Digite seu CPF:"));
//console.log(listacpfs);

var soma = saldo1 + saldo2 + saldo3 + saldo4 + saldo0;
console.log(soma);
var mensagemsoma =`A soma das contas é de ${soma} reais`
console.log(mensagemsoma);

var divisao = saldo1 + saldo2 + saldo3 + saldo4 + saldo0 / 5;
console.log(divisao);
var mensagemdivisao = `A divisão das contas é de ${divisao} reais`;
console.log(mensagemdivisao);


var mensagem01 = `Olá, ${listanomes[0]} ${listasobrenomes[0]}! Seu CPF é ${listacpf[0]} e você tem ${listaidade[0]} anos, mora na cidade ${listacidade[0]} e seu saldo é de ${saldo0} reais.`;
console.log(mensagem01);
document.write(mensagem01);


if(saldo0 >= 0, saldo0 <= 500){
    console.log("Você é pobre")
}
else if(saldo0 >= 501){
    console.log("Você é bem de vida")
}
else if(saldo0 >= 10000){
    console.log("Você é rico")
}
else if(saldo0 >= 100000){
    console.log("Você é milhonario")
}
else{
    console.log("Invalido")
};





var mensagem01 = `Olá, ${listanomes[1]} ${listasobrenomes[1]}! Seu CPF é ${listacpf[1]} e você tem ${listaidade[1]} anos, mora na cidade ${listacidade[1]} e seu saldo é de ${saldo1} reais.`;
console.log(mensagem01);
document.write(mensagem01);


if(saldo1 >= 0, saldo1 <= 500){
    console.log("Você é pobre")
}
else if(saldo1 >= 501){
    console.log("Você é bem de vida")
}
else if(saldo1 >= 10000){
    console.log("Você é rico")
}
else if(saldo1 >= 100000){
    console.log("Você é milhonario")
}
else{
    console.log("Invalido")
};


var mensagem01 = `Olá, ${listanomes[2]} ${listasobrenomes[2]}! Seu CPF é ${listacpf[2]} e você tem ${listaidade[2]} anos, mora na cidade ${listacidade[2]} e seu saldo é de ${saldo2} reais.`;
console.log(mensagem01);
document.write(mensagem01);


if(saldo2 >= 0, saldo2 <= 500){
    console.log("Você é pobre")
}
else if(saldo2 >= 501){
    console.log("Você é bem de vida")
}
else if(saldo2 >= 10000){
    console.log("Você é rico")
}
else if(saldo2 >= 100000){
    console.log("Você é milhonario")
}
else{
    console.log("Invalido")
};


var mensagem01 = `Olá, ${listanomes[3]} ${listasobrenomes[3]}! Seu CPF é ${listacpf[3]} e você tem ${listaidade[3]} anos, mora na cidade ${listacidade[3]} e seu saldo é de ${saldo3} reais.`;
console.log(mensagem01);
document.write(mensagem01);


if(saldo3 >= 0, saldo3 <= 500){
    console.log("Você é pobre")
}
else if(saldo3 >= 501){
    console.log("Você é bem de vida")
}
else if(saldo3 >= 10000){
    console.log("Você é rico")
}
else if(saldo3 >= 100000){
    console.log("Você é milhonario")
}
else{
    console.log("Invalido")
};


var mensagem01 = `Olá, ${listanomes[4]} ${listasobrenomes[4]}! Seu CPF é ${listacpf[0]} e você tem ${listaidade[0]} anos, mora na cidade ${listacidade[0]} e seu saldo é de ${saldo0} reais.`;
console.log(mensagem01);
document.write(mensagem01);


if(saldo0 >= 0, saldo0 <= 500){
    console.log("Você é pobre")
}
else if(saldo0 >= 501){
    console.log("Você é bem de vida")
}
else if(saldo0 >= 10000){
    console.log("Você é rico")
}
else if(saldo0 >= 100000){
    console.log("Você é milhonario")
}
else{
    console.log("Invalido")
};
