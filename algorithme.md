# PREMIERE IDÉE

DEBUT 
    DECLARER feuVert, feuRouge, feuOrange;
    DECLARER onVert, onRouge, onOrange : BOOLEN;
    DECLARER onVert, onRouge, onOrange <- faux;
    DECLARER minuteEnCours/10;

    FONCTION feuAuto 
        SI minuteEnCours <= 2 ALORS
            onVert = vraie;
            onOrange = faux;
            onRouge = faux;
        SINON SI minuteEnCours > 2 ET minuteEnCours <= 4 ALORS 
            onVert = faux;
            onOrange = vraie;
            onRouge = faux;
        SI minuteEnCours > 4 ALORS 
            onVert = faux;
            onOrange = faux;
            onRouge = vraie;
        FIN
    FIN


    DECLARER boutonManuel;

    FONCTION feuManuel 
    
FIN


# DEUXIÈME IDÉE

DECLARER feuVert, feuRouge, feuOrange;

DECLARER tableau : feux[3] de ENTIER;
feux[1] <- 1;
feux[2] <- 2;
feux[3] <- 3;

DECLARER minuteEnCours ENTIER;
DECLARER minuteReduite REEL;
minute Reduite <- minuteEnCours/20;

FONCTION feuAuto
    DECLARER nvCouleur ENTIER;
    nvCouleur <- feux[1];        

    SI minuteReduite >= 2 ALORS
        feux[1] <- supprimer 
        feux[3] <- nvCouleur
    SINON
    
    FIN