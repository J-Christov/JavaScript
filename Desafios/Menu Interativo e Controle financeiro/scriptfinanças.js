let saldo = prompt("Informe a quantidade de dinheiro inicial:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$ " + saldo + "\n1. Fazer um depósito" + "\n2.Fazer um saque" + "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor do depósito:"))
            break
        case "2":
            saldo -= prompt("Informe o valor do saque:")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida.")            
    }

} while (opcao !== "3")