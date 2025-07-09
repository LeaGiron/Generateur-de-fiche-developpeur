// Récupérer les id des champs et leurs valeurs
function genererFiche() {
let prenom = document.getElementById("prenom").value;
let age = document.getElementById("age").value;
let specialite = document.getElementById("specialite").value;
let années = document.getElementById("annees").value;
let langages = document.getElementById("langages").value;
let technos = document.getElementById("technos").value;
let objectif = document.getElementById("objectif").value;


// Créer la description
let description = "👩‍💻 Bonjour, je m'appelle " + prenom + ", j'ai " + age + " ans.\n" + 
"🧭 Ma spécialité en informatique est " + specialite + ".\n" +
"🗓️ J'ai " + annees + " d'expérience dans le milieu.\n" +
"💻 Je maîtrise : " + langages + ".\n" +
"⚙️ Mes technologies favorites sont : " + technos + ".\n" +
"🎯 Mon objectif professionel est de : " + objectif + "."

// Insérer la description dans la page
document.getElementById("fiche-resultat").innerText = description;
}


