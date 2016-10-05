$(document).ready(main);


function main(){

	function aleatoire(min, max){
		random = Math.floor((max - min + 1) * Math.random()) + min;
		console.log('Nombre random = ' + random);
		return random;
	}

	function demarrerPartie(){
		tryLeft1 = prompt('Choisissez le nombre maximal de tentatives');
		$('#tryAgain1').html(tryLeft1);
		tryLeft2 = tryLeft1 ;
		//console.log(tryLeft2);
		$('#tryAgain2').html(tryLeft2);
		//console.log('after tryLeft2')

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
		alert('Gagné ! Félicitations Joueur ' + currentPlayer +', tu as trouvé le nombre mystère qui était ' + nombreMystere + ' ! On relance !');
		demarrerPartie();
	}
	
	function partiePerdue(){
		alert('Dommage, vous avez épuisé toutes vos tentatives. Le nombre mystère était ' + nombreMystere +'. On relance !');
		demarrerPartie();
	}


	function clickValider(){
		var tryNow = parseInt($('input').val());
		if (tryNow === nombreMystere) {
			partieGagnee();
		}
		else if (tryNow > nombreMystere) {
			alert('Perdu, votre nombre est trop grand.');
			if(currentPlayer == 1){ // Changement de joueur
				tryLeft1--;
				currentPlayer = 2;
			}
			else if(currentPlayer == 2){
				tryLeft2--;
				currentPlayer = 1;
			}
		}
		else if(tryNow < nombreMystere) {
			alert('Perdu, votre nombre est trop petit.');
			if(currentPlayer == 1){ //Changement de joueur
				tryLeft1--;
				currentPlayer = 2;
			}
			else if(currentPlayer == 2){
				tryLeft2--;
				currentPlayer = 1;
			}
		}

		$('#tryAgain1').html(tryLeft1);
		$('#tryAgain2').html(tryLeft2);
	
		 if(tryLeft1 === 0 && tryLeft2 === 0){
		 	partiePerdue();
		}
	}

	demarrerPartie();
	var currentPlayer = 1;
	$('button').click(function(){
		clickValider();
	});




}