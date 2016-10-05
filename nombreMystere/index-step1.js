$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){


		// Récupérer le contenu de mon input
		var tryNow = parseInt($('input').val());
		console.log(tryNow);
		console.log(typeof tryNow);
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu
		if (tryNow === 40){
			alert('Gagnéééé !');
		}
		else {
			alert('Perdu =(')
		}

	// /Fin == Fonction clickValider == 
	}



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
	$('button').click(function(){
		clickValider();
	});

}