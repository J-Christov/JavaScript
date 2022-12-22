let value = prompt ("Qual o valor em reais você deseja converter?");

let optionsCurrency = prompt ("Com base na cotação de 31/03/2022 o valor de cada moeda está em: \n\nEuro (€) = R$5,25\nDólar (U$) = R$4,74 \nLibra Esterlina (£) = R$6,23\n\n\n Para qual moeda deseja converter? Informe: \n\n1- Euro € \n2- Dólar U$ \n3- Libra £");

switch (optionsCurrency) {
    case "1":
        alert ("Atualmente R$" + value + " equivalem a " + Math.round(value/5,25) + "€");
        break
    case "2":
        alert ("Atualmente R$" + value + " equivalem a " + Math.round(value/4,74) + "U$");
        break
    case "3":
        alert ("Atualmente R$" + value + " equivalem a " + Math.round(value/6,23) + "£");
        break
    default: 
        alert ("Opção de moeda inválida!")
} 