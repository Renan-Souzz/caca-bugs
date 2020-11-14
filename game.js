
//definindo o tamanho do game
var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaBugTempo = 1500


//recuperando e ajusatando a dificuldade

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'junior'){
	//1500
	criaBugTempo = 1500
} else if(nivel === 'pleno'){
	//1000
	criaBugTempo = 1000
} else if(nivel === 'senior'){
	criaBugTempo = 750
}

function ajustaTamanhoGame() {
	
	altura = window.innerHeight
	largura = window.innerWidth
	
	console.log(largura, altura)
}

ajustaTamanhoGame()

//cronometro

var cronometro = setInterval(function () {
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarbug)
		window.location.href = 'youwin.html'
	} else {
	document.getElementById('cronometro').innerHTML =  tempo
	}
} , 1000)



function posicaoRandom(){

//remover os bugs antes de gerar um novo
 if (document.getElementById('bug')) {
	document.getElementById('bug').remove()

	if(vidas > 5) {
		window.location.href ='fim_jogo.html'
	} 
	else{
	document.getElementById('v' + vidas).src= "img/coracao_vazio.png"
	vidas++
	}
}


//posição randomicas dos bugs

var posicaoX = Math.floor(Math.random() * largura) - 100	
var posicaoY = Math.floor(Math.random() * altura) - 100

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY 

console.log(posicaoX, posicaoY)

//criar elemento html 

var bug = document.createElement('img')
bug.src = 'img/bug.png'
bug.className = tamanhoBugAleatorio() + ' ' + ladoAleatório()
bug.style.left = posicaoX + 'px'
bug.style.top = posicaoY + 'px'
bug.style.position = 'absolute'
bug.id = 'bug'
bug.onclick = function() {
	this.remove()
}
document.body.appendChild(bug)

}



//tamanho aleatório dos bugs

function tamanhoBugAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'bug1'
		case 1: 
			return 'bug2'
		case 2:
			return 'bug3'
	} 

}

//visão do Bug para esquerda ou direita

function ladoAleatório () {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1: 
			return 'ladoB'
	} 

}


