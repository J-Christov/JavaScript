const turista = prompt("Oi turista! Qual seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista + "\nQuantidade de cidades visitadas: " + contagem + "\n\nCidades visitadas:\n" + cidades
)