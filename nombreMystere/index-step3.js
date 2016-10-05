$(document).ready(main);


function main(){

	function aleatoire(min, max){
		random = Math.floor((max - min + 1) * Math.random()) + min;
		console.log('Nombre random = ' + random);
		return random;
	}

	function demarrerPartie(){
		tryLeft = prompt('Choisissez le nombre maximal de tentatives');
		$('#tryAgain').html(tryLeft);

		min = parseInt(prompt('Choisissez le nombre minimum du Nombre Mystère'));
		$('#min').html(min);
		//console.log(typeof(min));
		max = parseInt(prompt('Choisissez le nombre maximum du nombreMystere'));
		$('#max').html(max);
		//console.log(typeof(max));

		nombreMystere = aleatoire(min, max);
		//nombreMystere = Math.floor(Math.random() * 101);
		console.log('Nombre Mystère = ' + nombreMystere);
	}

	function partieGagnee(){
		alert('Gagné ! Félicitations tu as trouvé le nombre mystère qui était ' + nombreMystere + ' !');
		demarrerPartie();
	}
	
	function partiePerdue(){
		alert('Dommage, tu as épuisé toutes tes tentatives. Le nombre mystère était ' + nombreMystere +'.');
		demarrerPartie();
	}


	function clickValider(){
		var tryNow = parseInt($('input').val());
		if (tryNow === nombreMystere) {
			partieGagnee();
		}
		else if (tryNow > nombreMystere) {
			alert('Perdu, votre nombre est trop grand.');
			tryLeft--; 
		}
		else if(tryNow < nombreMystere) {
			alert('Perdu, votre nombre est trop petit.');
			tryLeft--;
		}

		$('#tryAgain').html(tryLeft);
	
		 if(tryLeft === 0){
		 	partiePerdue();
		}
	}

	demarrerPartie();
	$('button').click(function(){
		clickValider();
	});
}