
let jugadorUno = document.getElementById('jugadorUno')
let jugadorDos = document.getElementById('jugadorDos')
let PrimeraSeccion = document.getElementById('PrimeraSeccion')
let SegundaSeccion = document.getElementById('SegundaSeccion')
let TercerSeccion = document.getElementById('TercerSeccion')
let CuartaSeccion = document.getElementById('CuartaSeccion')
let QuintaSeccion = document.getElementById('QuintaSeccion')
let carta = document.getElementById('carta')
let pic00 = document.getElementById('pic00')
let pic01 = document.getElementById('pic01')
let pic02 = document.getElementById('pic02')
let titulo00 = document.getElementById('titulo00')
let titulo01 = document.getElementById('titulo01')
let titulo02 = document.getElementById('titulo02')
let txt00 = document.getElementById('txt00')
let txt01 = document.getElementById('txt01')
let txt02 = document.getElementById('txt02')

let pic03 = document.getElementById('pic03')
let pic04 = document.getElementById('pic04')
let pic05 = document.getElementById('pic05')
let titulo03 = document.getElementById('titulo03')
let titulo04 = document.getElementById('titulo04')
let titulo05 = document.getElementById('titulo05')
let txt03 = document.getElementById('txt03')
let txt04 = document.getElementById('txt04')
let txt05 = document.getElementById('txt05')
let partidasAnteriores = []
let salir = document.getElementById('salir')

let h2_ = document.getElementById('h2_nombre')
let h2_2 = document.getElementById('h2_nombre_2')
let h2_3 = document.getElementById('h2_nombre_3')
let h2_4 = document.getElementById('h2_nombre_4')
let h2_5 = document.getElementById('h2_nombre_5')
let h2_6 = document.getElementById('h2_nombre_6')

let h3_01 = document.getElementById('h3_01')
let h3_02 = document.getElementById('h3_02')

let voyATenerSuerte = document.getElementById('voyATenerSuerte')

let match2 = document.getElementById('match2')

let dameRandom = (min, max) =>{
    let random = Math.round(Math.random()* (max - min) + min);
    return random
}

let tiradas = 0
let resultados = []
let jugar = () => {
    
    let elegidos = data[dameRandom(0, data.length)]
    if(resultados.indexOf(elegidos) == -1){
        resultados.push(elegidos)
        tiradas++
    }else{
        console.log('este fue repetido: ', elegidos.nombre)
    }
    
    if (tiradas < 6) {
        jugar()
    }else{
        console.log(resultados)
        partidasAnteriores.push(resultados)
        iterarResultados()
    }
}

let img00_ = document.getElementById('img00_')
let img01_ = document.getElementById('img01_')
let img02_ = document.getElementById('img02_')
let h2_00 = document.getElementById('h2_00')
let h2_01 = document.getElementById('h2_01')
let h2_02 = document.getElementById('h2_02')

let img03_ = document.getElementById('img03_')
let img04_ = document.getElementById('img04_')
let img05_ = document.getElementById('img05_')
let h2_03 = document.getElementById('h2_03')
let h2_04 = document.getElementById('h2_04')
let h2_05 = document.getElementById('h2_05')

let iterarResultados = (juego) => {
    pic00.setAttribute('src', resultados[0].img)
    img00_.setAttribute('src', resultados[0].img)
    pic01.setAttribute('src', resultados[1].img)
    img01_.setAttribute('src', resultados[1].img)
    pic02.setAttribute('src', resultados[2].img)
    img02_.setAttribute('src', resultados[2].img)
    titulo00.innerHTML = resultados[0].nombre
    h2_00.innerHTML = resultados[0].nombre
    titulo01.innerHTML = resultados[1].nombre
    h2_01.innerHTML = resultados[1].nombre
    titulo02.innerHTML = resultados[2].nombre
    h2_02.innerHTML = resultados[2].nombre
    txt00.innerHTML = resultados[0].descripcion
    txt01.innerHTML = resultados[1].descripcion
    txt02.innerHTML = resultados[2].descripcion

    pic03.setAttribute('src', resultados[3].img)
    img03_.setAttribute('src', resultados[3].img)
    pic04.setAttribute('src', resultados[4].img)
    img04_.setAttribute('src', resultados[4].img)
    pic05.setAttribute('src', resultados[5].img)
    img05_.setAttribute('src', resultados[5].img)
    titulo03.innerHTML = resultados[3].nombre
    h2_03.innerHTML = resultados[3].nombre
    titulo04.innerHTML = resultados[4].nombre
    h2_04.innerHTML = resultados[4].nombre
    titulo05.innerHTML = resultados[5].nombre
    h2_05.innerHTML = resultados[5].nombre
    txt03.innerHTML = resultados[3].descripcion
    txt04.innerHTML = resultados[4].descripcion
    txt05.innerHTML = resultados[5].descripcion

    h2_.innerHTML = 'Carta de: ' + jugadorUno.value
    h2_2.innerHTML = 'Carta de: ' + jugadorUno.value
    h2_3.innerHTML = 'Carta de: ' + jugadorUno.value

    h2_4.innerHTML = 'Carta de: ' + jugadorDos.value
    h2_5.innerHTML = 'Carta de: ' + jugadorDos.value
    h2_6.innerHTML = 'Carta de: ' + jugadorDos.value

    h3_01.innerHTML = 'Carta de: ' + jugadorUno.value
    h3_02.innerHTML = 'Carta de: ' + jugadorDos.value

    let match = 0

    resultados.forEach(carta => {
        match = match + carta.id
    });

    console.log(match)
    if(match % 2 === 0){
        match2.innerHTML = 'HAY MATCH!!!'
    }else{
        match2.innerHTML = 'NO HAY MATCH :('
    }
}

let jugarViejo = (partida) => {
    iterarResultados(partidasAnteriores[partida])
    mostrarResultados()
}

let resetAndPlay = (estado) => {
    tiradas = 0
    resultados = []
    if(estado){
        jugar()
    }
}

let mostrarResultados = () => {
    let inputDos = jugadorDos.value
    let inputUno = jugadorUno.value
    if(inputUno != '' && inputDos != ''){
    PrimeraSeccion.classList.add('ocultar')
    SegundaSeccion.classList.remove('ocultar')
    SegundaSeccion.classList.add('mostrar')
    setTimeout(function(){
        SegundaSeccion.classList.add('ocultar')
        TercerSeccion.classList.remove('ocultar')
    }, 3000);
    
    TercerSeccion.classList.add('mostrar')
    }else{
        let lleneForm = document.getElementById('lleneForm').innerHTML='llene los nombres porfavor'
    }
    resetAndPlay(true)
}

voyATenerSuerte.addEventListener('click', function(){
    mostrarResultados()
})

salir.addEventListener('click', () => {
    TercerSeccion.style.display = 'none'
    CuartaSeccion.classList.remove('ocultar')
})

const close = document.getElementById('close')
let verResultados = document.getElementById('verResultados')

verResultados.addEventListener('click', () => {
    CuartaSeccion.classList.add('ocultar')
    QuintaSeccion.classList.remove('ocultar')
    QuintaSeccion.style.display = 'flex'
})

let volverTirar = document.getElementById('volverTirar')

close.addEventListener('click', () => {
    CuartaSeccion.classList.add('ocultar')
    TercerSeccion.style.display = 'block'
})

volverTirar.addEventListener('click', () => {
    CuartaSeccion.classList.add('ocultar')
    PrimeraSeccion.classList.remove('ocultar')
})

let volverAInicio = document.getElementById('volverAInicio')

volverAInicio.addEventListener('click', () => {
    QuintaSeccion.style.display = 'none'
    PrimeraSeccion.style.display = 'block'
})




