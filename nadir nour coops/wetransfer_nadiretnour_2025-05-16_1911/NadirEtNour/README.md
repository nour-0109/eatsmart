# MIPA-MIBLU - Site Web de Restaurant

![Licence](https://img.shields.io/badge/licence-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 📖 Présentation

MIPA-MIBLU est un site web de restaurant présentant une authentique expérience culinaire italienne. Ce site permet aux clients de parcourir le menu, d'ajouter des articles au panier et de passer commande.

## ✨ Fonctionnalités

- Design responsive pour tous les appareils
- Menu interactif avec catégories
- Fonctionnalité de panier d'achat
- Formulaire de commande pour livraison ou à emporter
- Belles images de plats

## 👷 Installation

1. Cloner le dépôt
   ```bash
   git clone https://github.com/votrenomdutilisateur/mipa-miblu.git
   cd mipa-miblu
   ```

2. Ouvrir le site localement
   - Ouvrez simplement index.html dans votre navigateur
   - Ou utilisez un serveur local : `npx serve`

## Structure du projet

```
MIPA-MIBLU/
│
├── css/
│   └── style.css          # Styles du site
│
├── js/
│   ├── firebase-config.js # Configuration Firebase
│   ├── menu.js            # Gestion du menu
│   └── cart.js            # Gestion du panier et des commandes
│
├── img/                   # Dossier pour les images
│
└── index.html             # Page principale du site
```

## Déploiement

Pour déployer le site sur Firebase Hosting :

1. Installez Firebase CLI : `npm install -g firebase-tools`
2. Connectez-vous à Firebase : `firebase login`
3. Initialisez votre projet : `firebase init`
4. Sélectionnez "Hosting" et suivez les instructions
5. Déployez votre site : `firebase deploy`


