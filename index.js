// Desafio classificação do herói
let nomeDoHeroi = "Ash"
let xpDoHeroi = 5768
let nivelDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let nivelEncontrado = ""

if(xpDoHeroi<1000){nivelEncontrado=nivelDoHeroi[0]}
else if((xpDoHeroi>=1001) && (xpDoHeroi<=2000)){nivelEncontrado=nivelDoHeroi[1]}
else if((xpDoHeroi>=2001) && (xpDoHeroi<=5000)){nivelEncontrado=nivelDoHeroi[2]} 
else if((xpDoHeroi>=5001) && (xpDoHeroi<=7000)){nivelEncontrado=nivelDoHeroi[3]} 
else if((xpDoHeroi>=7001) && (xpDoHeroi<=8000)){nivelEncontrado=nivelDoHeroi[4]} 
else if((xpDoHeroi>=8001) && (xpDoHeroi<=9000)){nivelEncontrado=nivelDoHeroi[5]} 
else if((xpDoHeroi>=9001) && (xpDoHeroi<=10000)){nivelEncontrado=nivelDoHeroi[6]} 
else if((xpDoHeroi>=10001)){nivelEncontrado=nivelDoHeroi[7]} 

console.log("O herói " + nomeDoHeroi + " está no nível: " + nivelEncontrado) 