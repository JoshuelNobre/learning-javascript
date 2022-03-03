var a = 5 == 5
var b = 5 == '5'
var c = 5 === '5' // Igualdade restrita
var d = 5 !== '5'

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// ! negação
// && conjunção (and)
// || disjunção (or)

console.log(a && b)
console.log(a && c)
console.log(a || c)


var idade = 19
var resultado1 = idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
console.log(resultado1)

var estado = 'RJ'
var resultado2 = estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
console.log(resultado2)

var salario = 2000
var sexo = 'F'
var resultado3 = salario > 1500 && sexo != 'M'
console.log(resultado3)

// Ordem de Precedência
// () ** /
// > <  >=
// !
// &&
// ||

// Ternário 
// Condição ? True : False
var media = 8
var resultado = media >=7 ? "Aprovado" : 'Reprovado'
console.log(resultado)