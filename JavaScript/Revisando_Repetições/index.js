let spaceshipName = prompt("Informe o nome da espaçonave")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i --) {
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após a ocultação: " + invertedName)

