let count = 0; // Initialize count to 0
function increaseCount() {
  count++; // Incrémente le compte de 1
  displayCount(); // Affiche le compte
  checkCountValue(); // Vérifier la valeur du count et afficher les messages
}
function reinitialiseCount(){
    let count = 0;
    document.getElementById('countDisplay').innerHTML=count;
    if (count === 0) {
        alert("le compteur de followers a été réinitialisé")
    }
}
function checkCountValue(){
    if (count === 10) {
        alert("Votre publication Instagram a gagné 10 abonnés")
    } else if (count === 20) {
        alert("Votre publication Instagram a gagné 20 abonnés")    }
}
function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Affiche le compte dans l'HTML
}