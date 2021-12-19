//const panels = document.getElementsByClassName('panel'); //identique avec  deuxième ligne
//const panels = document.querySelectorAll ('.container > *');//Accéder à tous les enfants direct du container: 5 div 
//  panels[0].onclick = function() { 
//    console.log('YEAH');
//  };
//  panels[0].onclick = function() {
//   console.log('PAS YEAH');// };  //Va afficher pas yeah si clic sur première photo --> Va écraser le premier "YEAH"
//  panels[0].addEventListener('click', function() {  //Ecouter evènement du clic et va afficher yeah 
//    console.log('YEAH');
//  });
//or (let panels of panel)

const panels = document.querySelectorAll ('.container > *') //Accéder à tous les enfants direct du container: 5 div 
for(let panel of panels) {
  panel.addEventListener('click', function() { 
    panels.forEach(p => p.classList.remove('active')) ; //Supprime sur les autres éléments de la div, 
    //la classe 'active' si présente pour qu'une seule soit active avec la boucle forEach
    panel.classList.add('active'); //Rajoute class 'active' dans le DOM lors du clic sur l'élément (photo) sélectionné.
  });
}

console.log(panels[0].className);


