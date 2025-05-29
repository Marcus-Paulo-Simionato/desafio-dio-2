let nomeJogador = "Paolo"
let vitorias = 97
let derrotas = 36
let saldoDeVitorias = subtrai(vitorias, derrotas)
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let nivelEncontrado = ""

function subtrai(vitorias, derrotas){
    let subtracao = vitorias - derrotas
    return subtracao
}

if(saldoDeVitorias<10  ){nivelEncontrado = nivel[0]} 
    else if((saldoDeVitorias>=11) && (saldoDeVitorias<=20)){nivelEncontrado = nivel[1]}
    else if((saldoDeVitorias>=21) && (saldoDeVitorias<=50)){nivelEncontrado = nivel[2]}
    else if((saldoDeVitorias>=51) && (saldoDeVitorias<=80)){nivelEncontrado = nivel[3]}
    else if((saldoDeVitorias>=81) && (saldoDeVitorias<=90)){nivelEncontrado = nivel[4]}
    else if((saldoDeVitorias>=91) && (saldoDeVitorias<=100)){nivelEncontrado = nivel[5]}
    else if((saldoDeVitorias>=101)){nivelEncontrado = nivel[6]}

console.log(" O jogador "+ nomeJogador + " tem o saldo de " + saldoDeVitorias + " vitórias e está no nível " + nivelEncontrado)    