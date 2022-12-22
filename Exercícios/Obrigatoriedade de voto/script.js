// Esse código só vai retornar um resultado no console.log ou então posso executar ele no CodePen. 

var idade = 25;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18) {
  console.log("Voto Opcional");
} else {
  console.log("Voto Obrigatório");
}