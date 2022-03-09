let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)

num[2] = 5
console.log(`Nosso vetor é o ${num}`)

// Adiciona outro valor no fim do vetor
num.push(7)
console.log(`Nosso vetor é o ${num}`)

// Tamanho
console.log(`O vetor tem atualizado ${num.length} posições`)

// Organiza em ordem
console.log(`O vetor organizado fica: ${num.sort()}`)

// Existe um jeito mais simplificado logo a baixo!
// for (let pos=0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }


for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Buscar valores dentro de vetor, se o valor não existir ele retorna a posição "-1"
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}
