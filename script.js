// 1 - Fonctionnement automatique du feu
let tabFeu = ["1", "2", "3"];
let timer;
let chrono = 0;
let onAuto = new Boolean(true);

function feuAuto() {
    let nvCouleur = tabFeu[0]; // On enregistre la première valeur
    
    // Boucle du tab à condition que le boolean auto soit activé
    if (onAuto == true) {
        tabFeu.shift(); // On supprime la première valeur
        tabFeu.push(nvCouleur); // On réinsert la première valeur à la fin        
    }

    timer = setTimeout(() => feuAuto(), chrono);

    activeCouleur();
    feuAttribuer();
}


// 2 - Attribuer les couleurs aux feux
const feuVert = document.getElementById('feu-vert');
const feuOrange = document.getElementById('feu-orange');
const feuRouge = document.getElementById('feu-rouge');

const feux = document.getElementsByClassName('feux');

function feuAttribuer() {
    if (onVert) {
        for (i = 0; i < feux.length; i++) {
            feux[i].classList.remove("active");
        }
        feuVert.classList.add("active");
    } else if (onOrange) {
        for (i = 0; i < feux.length; i++) {
            feux[i].classList.remove("active");
        }
        feuOrange.classList.add("active");
    } else if (onRouge) {
        for (i = 0; i < feux.length; i++) {
            feux[i].classList.remove("active");
        }
        feuRouge.classList.add("active");
    }
}


// 3 - Activer/désactiver les couleurs
let onVert = new Boolean(false);
let onOrange = new Boolean(false);
let onRouge = new Boolean(true);

function activeCouleur() {
    if (tabFeu[0] == 1) {
        onVert = false;
        onOrange = true;
        onRouge = false;
        chrono = 2000;
    } else if (tabFeu[1] == 1) {
        onVert = true;
        onOrange = false;
        onRouge = false;
        chrono = 700;
    } else if (tabFeu[2] == 1) {
        onVert = false;
        onOrange = false;
        onRouge = true;
        chrono = 2000;
    }
}

feuAuto();



// 4 - Les boutons manuel et automatique 
const buttonNext = document.getElementById('next');
const buttonAuto = document.getElementById('auto');

buttonNext.addEventListener('click', function(event) {
    // - On  désactive le mode auto
    onAuto = false; 

    // - On passe à la valeur suivante dans le tableau
    let nvCouleur = tabFeu[0];
    tabFeu.shift();
    tabFeu.push(nvCouleur);

    // - On réactive les fonctions
    activeCouleur();
    feuAttribuer();

    // - Ajouter et supprimer la class active des bouttons
    buttonNext.classList.add("active");
    buttonAuto.classList.remove("active");
});

buttonAuto.addEventListener('click', function(event) {
    // - On  désactive le mode auto
    if (onAuto != true) {
        onAuto = true; 

        // - Ajouter et supprimer la class active des bouttons
        buttonAuto.classList.add("active");
        buttonNext.classList.remove("active");
    }
});