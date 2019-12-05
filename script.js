/*
let poids = prompt("quel est votre poids");
let taille= prompt("Quel est votre taille");
if((poids / (taille*taille)) >18.5 && (poids / (taille*taille)) <25)
{alert("Vous êtes une bombasse!!!");}
else if((poids / (taille*taille)) >25 && (poids / (taille*taille)) <30)
{alert("Faites du Sport, ce n'est pas encore trop grave");}
else if((poids / (taille*taille)) >30 && (poids / (taille*taille)) <40)
{alert("La mort te guette Sergio!!!");}
*/
/* Declaration: Une VARIABLE peut avoir plusieurs affectation */
let prenom = " Romain ";
let nom = " BOIDRON ";
let age = 38;
console.log( nom + prenom + "vous avez " + age + " Vous devez à Manu " + age*2 + "€" );
console.log(`${nom} ${prenom} vous avez ${age} ans et vous devez à Manu ${ age * 2}€`); /* ==> Méthode préconisé


/*
Declaration: Une CONSTANTE ne peut avoir qu'une seule affectation (valeur). Elle ne peut commencer par un nombre mais peut contenir ou terminer un nombre. Il faut mettre "" pour une chaine de caractere lorsqu'il n'y a pas de calcul. Mettre => ; pour terminer la ligne.
Pour tester ses variables utiliser => console.log.


const nom = "BOIDRON";
const prenom = "Romain";
console.log("Je m'appelle " + nom + " " + prenom); /* ==> Voici différentes manières pour exclure le signe ' 
console.log('Je m\'appelle ' + nom + ' ' + prenom);
console.log(`Bonjour je m'appelle ${nom} ${prenom}`)  ==> Templating avec back quot `
Lorsque que l'on rajoute les constantes (nom et prenom) cela s'appelle la concatenation

*/
/* Une variable boolean à une valeur soit true ou false */
let senior = true;

if (senior === true) {  /*mettre un triple === pour une valeur stricte => voir operateur de comparaison */
    console.log ("Tu es aussi vieux que Manu !");
}

else {
    console.log ("Ca doit rappeler des souvenirs à Manu");
}
