$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){

		// Récupérer le contenu de mon input
		var tryNow = parseInt($('input').val());
		// Stocker un nombre ENTIER généré "aléatoirement"
		var randomNumber = Math.floor(Math.random() * 101);
		console.log(randomNumber);
		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
		if (tryNow === randomNumber) {
			alert('Gagné');
		}
		else if (tryNow > randomNumber){
			alert('Perdu, votre nombre est trop grand');
		}
		else if (tryNow < randomNumber) {
			alert('Perdu, votre nombre est trop petit')
		}
	// /Fin == Fonction clickValider == 
	}


	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	$('button').click(function(){
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	clickValider();
	});

}