// 1 - Activer/désactiver les couleurs
let onVert = new Boolean(false);
let onOrange = new Boolean(false);
let onRouge = new Boolean(false);

function activeCouleur() {
    if (tabFeu[0] == 1) {
        onVert = true;
        onOrange = false;
        onRouge = false;
    } else if (tabFeu[1] == 1) {
        onVert = false;
        onOrange = true;
        onRouge = false;
    } else if (tabFeu[2] == 1) {
        onVert = false;
        onOrange = false;
        onRouge = true;
    }
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


// 3 - Fonctionnement automatique du feu
let tabFeu = ["1", "2", "3"];
let seconde = 0;
let onAuto = new Boolean(true);

function feuAuto() {
    
    let nvCouleur = tabFeu[0]; // On enregistre la première valeur

    if (onAuto) {
        tabFeu.shift(); // On supprime la première valeur
        tabFeu.push(nvCouleur); // On réinsert la première valeur à la fin
        seconde = setTimeout("feuAuto()", 2000);
    }
    
    activeCouleur();
    feuAttribuer();
}

feuAuto();


// 4 - Bouton manuel 
const buttonNext = document.getElementById('next');

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
});


// 5 - Bouton automatique
const buttonAuto = document.getElementById('auto');

buttonAuto.addEventListener('click', function(event) {
    // - On  désactive le mode auto
    onAuto = true; 
    feuAuto();
});