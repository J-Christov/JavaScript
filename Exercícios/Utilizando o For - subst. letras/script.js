let spaceship = prompt("Informe o nome da espaçonave:");
let whatSubs = prompt("Informe QUAL caracter deseja substituir?");
let newCaracter = prompt("Agora informe POR QUAL caractere deseja substituir?");
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == whatSubs) {
    newSpaceship += newCaracter;
  } else {
    newSpaceship += spaceship[i];
  }
}

alert("O novo nome da nave será: " + newSpaceship)
