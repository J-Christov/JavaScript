// Esse código só vai retornar um resultado no console.log ou então posso executar ele no CodePen. 

var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}