$(document).ready(main);

// Fonction principale
function main(){

	function demarrerPartie(){
		tryLeft = 15;
		$('span').html(tryLeft);
		nombreMystere = Math.floor(Math.random() * 101);
		console.log('Nombre Mystère = ' + nombreMystere);
	}

	function partieGagnee(){
		alert('Gagné ! Félicitations tu as trouvé le nombre mystère qui était ' + nombreMystere + ' !');
		demarrerPartie();
	}
	
	function partiePerdue(){
		alert('Dommage, tu as épuisé tes 15 tentatives. Le nombre mystère était ' + nombreMystere +'.');
		demarrerPartie();
	}

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	demarrerPartie();


	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){


		// Récupérer le contenu de mon input
		var tryNow = parseInt($('input').val());
		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/
			if (tryNow === nombreMystere) {
				partieGagnee();
			}
			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand
			else if (tryNow > nombreMystere) {
				alert('Perdu, votre nombre est trop grand.');
				tryLeft--; 
			}
			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			else if(tryNow < nombreMystere) {
				alert('Perdu, votre nombre est trop petit.');
				tryLeft--;
			}
			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives
			$('span').html(tryLeft);
			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
			 if(tryLeft === 0){
			 	partiePerdue();
			 }
			
	// /Fin == Fonction clickValider == 
	}

	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$('button').click(function(){
		clickValider();
	})

	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}