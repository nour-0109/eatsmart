/*
 * CONFIGURATION FIREBASE
 * 
 * Configuration Firebase pour le projet MIPA-MIBLU
 */

// Configuration Firebase fournie
const firebaseConfig = {
  apiKey: "AIzaSyCFbo7swu8BFfjzbldhZ2fnQk7F1dNX6tI",
  authDomain: "mipa-miblu.firebaseapp.com",
  projectId: "mipa-miblu",
  storageBucket: "mipa-miblu.firebasestorage.app",
  messagingSenderId: "590246343269",
  appId: "1:590246343269:web:a39eab23ab4ef65dff4c8c"
};

// Variables pour Firebase
let firebase;
let db;
let firebaseInitialized = false;

// Fonction pour initialiser Firebase
function initFirebase() {
  try {
    // Vérifier si Firebase est déjà défini
    if (typeof window.firebase !== 'undefined') {
      firebase = window.firebase;
      
      // Vérifier si Firebase est déjà initialisé
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
      // Initialiser Firestore
      db = firebase.firestore();
      
      // Définir les paramètres de Firestore
      db.settings({
        timestampsInSnapshots: true
      });
      
      firebaseInitialized = true;
      console.log("Firebase initialisé avec succès");
      
      // Charger les données du menu dans Firebase
      setTimeout(function() {
        if (typeof loadMenuDataToFirebase === 'function') {
          loadMenuDataToFirebase();
        }
      }, 1000);
    } else {
      console.warn("Firebase n'est pas disponible. Le site fonctionnera en mode local.");
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de Firebase:", error);
    console.warn("Le site fonctionnera en mode local sans Firebase.");
  }
}

// Fonction pour vérifier si la connexion à Firebase est établie
function checkFirebaseConnection() {
  if (!firebaseInitialized) {
    console.log("Firebase n'est pas initialisé. Le site fonctionnera en mode local.");
    return false;
  }
  
  console.log("Tentative de connexion à Firebase...");
  
  // Essayer d'accéder à la collection "menu" pour vérifier la connexion
  return db.collection("menu").limit(1).get()
    .then(() => {
      console.log("Connexion à Firebase établie avec succès!");
      return true;
    })
    .catch(error => {
      console.error("Erreur de connexion à Firebase:", error);
      console.warn("Le site fonctionnera en mode local sans Firebase.");
      return false;
    });
}

// Initialiser Firebase au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  initFirebase();
  if (firebaseInitialized) {
    checkFirebaseConnection();
  }
});
