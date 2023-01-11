const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const a = parseFloat(entrada1)
const b = parseFloat(entrada2)

const soma = a + b
const subtração = a - b
const multiplicação = a * b
const divisão = a / b

alert("Resultados:\n" + 
"\nSoma: "+ soma + 
"\nSubtração: "+ subtração +
"\nMultiplicação: " + multiplicação +
"\nDivisão: " + divisão
)