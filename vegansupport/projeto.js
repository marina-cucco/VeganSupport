 let lista= []
let selec = document.getElementById('vegan')
let res = document.getElementById('res')
let i = selec.selectedIndex

function solution() {
    var valor = selec.value;
    if (valor == "first"){
        window.location.href = 'projetopg2.html'
    } else if (valor == "second"){
        window.location.href = 'projetopg3.html'
    } else if (valor == "third"){
        res.innerHTML += "you lack support from family and/or friends. "
    } else if (valor == "fourth"){
        res.innerHTML += "you think going vegan might affect your fitness. "
    } else if (valor == "fifth"){
        res.innerHTML += "you lack nutritional information to healthly go vegan. "
    } else if (valor == "sixth"){
        res.innerHTML += "you lack motivation to finally go vegan. "
    } else if (valor == "seventh"){
        res.innerHTML += "you don't empathize with animals enough to go vegan. "
    } else if (valor == "eigth"){
        res.innerHTML += "you follow a non-vegan diet. "
    } 

   
    if (valor == "other") {
        let input = document.createElement("input")
        input.setAttribute('type', 'text')
        let botao2 = document.createElement("button")
        botao2.innerHTML = "Compute"
        res.innerHTML = "<br>E-mail us with your issue: "
        res.appendChild(input) 
        res.appendChild(botao2)
        botao2.onclick = function(){
            res.innerHTML = `<br>Thanks for the contribution! Our team will colect more issue reports like yours and try incorporate it to VeganSupport in the future.`
        }
    }
    
let img = document.createElement("img")
img.setAttribute('src', 'doggie.png')
res.appendChild(img)



}


