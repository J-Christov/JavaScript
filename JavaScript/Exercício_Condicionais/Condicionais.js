let namePilot = prompt("Qual seu nome, piloto");

let initialVelocity = 0

alert("Olá " + namePilot + "! Informo que a velocidade inicial da nave é " + initialVelocity + "km/s");

let desiredVelocity = prompt("A quantos km/s deseja acelerar a nave?")

let confirmation = confirm("Estamos acelerando para " + desiredVelocity + "km/s. \n\nClique em 'OK' para prosseguir, ou clique em 'CANCELAR' para voltar a velocidade inicial de 0km/s.")

if (confirmation) {
    initialVelocity = desiredVelocity
}

if (initialVelocity <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
}
else if (initialVelocity < 40) {
        alert("Você está devagar, podemos aumentar mais a velocidade")
    }
    else if (initialVelocity >=40 && initialVelocity < 80) {
        alert("Parece uma boa velocidade para manter")
    }
    else if (initialVelocity >=80 && initialVelocity < 100){
        alert("Velocidade alta. Considere diminuir.")
    }
    else if (initialVelocity >=100) {
        alert("Velocidade perigosa. Controle automático forçado.")
    }
alert ("Nome do piloto: " + namePilot + "\nVelocidade atual: " + initialVelocity + " km/s.")