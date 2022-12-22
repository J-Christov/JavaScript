function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var gênero =  ""
        var img = document.createElement ("img")
        img.setAttribute("id", "foto")
        if (fsex [0].checked){
            gênero = "Homem"
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute("src", "imagens/bebehomem.jpg")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imagens/jovemhomem.jpg")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/adultohomem.jpg")

            } else {
                //idoso
                img.setAttribute("src", "imagens/idosohomem.jpg")
            }                

        } else if (fsex [1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute("src", "imagens/bebemulher.jpg")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imagens/jovemmulher.jpg")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/adulomulher.jpg")

            } else {
                //idoso
                img.setAttribute("src", "imagens/idosamulher.jpg")
            }                
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}