let spaceshipName
let velocityStart = 0
let chosenOptions

spaceshipName = prompt ("Qual o nome da nave?")
options();

function options(){
    chosenOptions = prompt ("Escolha entre as seguintes opções: \n1) Acelerar a nave em 5km/s \n2) Desacelerar em 5km/s \n3) Imprimir dados de bordo \n4) Sair do programa")

switch(chosenOptions){
    case "1":
        acelerationSpaceship()
        break
    case "2":
        desacelerationSpaceship()
        break
    case "3":
        printdata()
        break
    case "4":
        alert("Programa encerrado. Se desejar iniciar novamente basta recarregar a página.")
        break
    default:
        alert("Função não encontrada. Tente novamente.")     
            options()   
}
}

function acelerationSpaceship() {
    velocityStart += 5
    alert("Acelerando a nave para " + velocityStart + "km/s")
    options();
}

function desacelerationSpaceship() {
    velocityStart -= 5
    if (velocityStart <= 0) {
        alert ("A nave encontra-se parada nesse momento.")
        velocityStart = 0
    } else {
        alert ("Reduzindo a velocidade da nave para " + velocityStart + "km/s")
        options ()
    }    
}

function printdata() {
    alert ("Exibindo os dados atuais da sua navegação: \n\nO nome da nave escolhida é: " + spaceshipName + "\nA velocidade atual da nave é: " + velocityStart + "km/s.")
}