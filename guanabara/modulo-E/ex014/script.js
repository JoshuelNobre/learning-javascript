function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = window.document.querySelector('div#msg')

    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando:<br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c=i; c<=f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i ; c>=f; c -=p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

        }
    } 
    
