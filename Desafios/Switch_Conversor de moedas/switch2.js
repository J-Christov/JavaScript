let value = prompt ("Qual o valor em reais você deseja converter?");

let chosenOption = prompt ("Com base na cotação de 31/03/2022 o valor de cada moeda está em: \n\nEuro (€) = R$5,25\nDólar (U$) = R$4,74 \nLibra Esterlina (£) = R$6,23\n\n\n Para qual moeda deseja converter? Informe: \n\n1- Euro € \n2- Dólar U$ \n3- Libra £");

let chosenUnity
let convertedValue

switch (chosenOption) {
    case "1":
        chosenUnity = "Euros"
        convertedValue = Math.round(value / 5, 25)
        break
    case "2":
        chosenUnity = "Dólares"
        convertedValue = Math.round(value / 4, 74)
        break
    case "3":
        chosenUnity = "Libras Esterlinas"
        convertedValue = Math.round(value / 6, 23)
        break
    default:
        chosenUnity = "Opção de moeda inválida!"
        convertedValue = "Opção de moeda inválida!"
}

alert ("Conversão: " + value + "R$\n" + chosenUnity + ": " + convertedValue)