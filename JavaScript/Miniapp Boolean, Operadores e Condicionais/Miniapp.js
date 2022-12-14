let departureDateEntry = prompt ("Digite a data de partida para a sua viagem à Europa \n\n(formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o formato do tempo faltante para sua viagem\n\n1- Segundos \n2- Minutos \n3- Horas \n4- Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Faltam: " + secondsOfDeparture + " segundos para sua viagem para a Europa")
} else if(chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Faltam: " + minutesOfDeparture + " minutos para sua viagem para a Europa")
} else if(chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Faltam: " + hoursOfDeparture + " horas para sua viagem para a Europa")
} else if(chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Faltam: " + daysOfDeparture + " dias para sua viagem para a Europa")
}   else {
    alert("Opção Inválida")
}