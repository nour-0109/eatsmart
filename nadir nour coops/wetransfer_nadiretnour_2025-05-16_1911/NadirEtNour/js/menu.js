// Références aux éléments du DOM (seront initialisées après le chargement du DOM)
let menuItemsContainer;
let categoryButtons;

// Données du menu avec URLs d'images pour chaque plat
const menuData = [
    // Antipasti - Regroupe Antipasti, Bruschetta et Dito
    { id: 'antipasti1', name: 'ANTIPASTI', price: 5.00, description: '', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta1.jpg' },
    { id: 'antipasti2', name: 'INVOLTINI DE SPECK', price: 5.00, description: 'Jambon speck, ricotta', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread10.jpg' },
    { id: 'antipasti3', name: 'MINI POIVRONS FARCIS AU THON', price: 5.00, description: '', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/rice/rice24.jpg' },
    { id: 'antipasti4', name: 'BRUSCHETTA', price: 9.50, description: '', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread1.jpg' },
    { id: 'antipasti5', name: 'BRUSCHETTA VEGETARIANA', price: 9.50, description: 'Coulis de tomates,aubergines, tomates confites, artichauts, aubergines, poivrons, mozzarella', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread2.jpg' },
    { id: 'antipasti6', name: 'BRUSCHETTA SALMONE', price: 9.50, description: 'Crème fraîche, saumon fumé, mozzarella', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread3.jpg' },
    { id: 'antipasti7', name: 'BRUSCHETTA BOLOGNESE', price: 9.50, description: 'Sauce bolognaise, saucisse calabraise, tomates confites, mozzarella', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread4.jpg' },
    { id: 'antipasti8', name: 'DITO', price: 3.00, description: '', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread5.jpg' },
    { id: 'antipasti9', name: 'DITO JAMBON', price: 3.00, description: 'Coulis de tomates, jambon supérieur, mozzarella, origan', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread6.jpg' },
    { id: 'antipasti10', name: 'DITO VIANDE HACHÉE', price: 3.00, description: 'Coulis de tomates, viande hachée de bœuf, mozzarella, origan', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread7.jpg' },
    { id: 'antipasti11', name: 'DITO SALMONE', price: 3.00, description: 'Crème fraîche, saumon fumé, mozzarella, origan', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread8.jpg' },
    { id: 'antipasti12', name: 'DITO 3 FORMAGGI', price: 3.00, description: 'Coulis de tomates, chèvre, parmesan, mozzarella, origan', category: 'antipasti', img: 'https://foodish-api.herokuapp.com/images/bread/bread9.jpg' },
    
    // Pizza
    { id: 'pizza1', name: 'PIZZA VERDI', price: 9.00, description: 'Coulis de tomates, jambon supérieur, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza1.jpg' },
    { id: 'pizza2', name: 'PIZZA NAPOLETANA', price: 9.00, description: 'Coulis de tomates, anchois, câpres, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza2.jpg' },
    { id: 'pizza3', name: 'PIZZA REGINA', price: 10.00, description: 'Coulis de tomates, champignons, jambon supérieur, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza3.jpg' },
    { id: 'pizza4', name: 'PIZZA 4 FORMAGGI', price: 12.00, description: 'Coulis de tomates, gorgonzola, mozzarella, parmesan, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza4.jpg' },
    { id: 'pizza5', name: 'PIZZA CAPRA', price: 12.00, description: 'Coulis de tomates, chèvre, jambon de parme, oignons confits, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza5.jpg' },
    { id: 'pizza6', name: 'PIZZA VEGETARIANA', price: 12.00, description: 'Coulis de tomates, champignons, tomates, poivrons, artichauts, aubergines, oignons, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza7.jpg' },
    { id: 'pizza7', name: 'PIZZA MONTANARA', price: 12.00, description: 'Coulis de tomates, gorgonzola, jambon cru, roquette, oignons confits, pancetta, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza8.jpg' },
    { id: 'pizza8', name: 'PIZZA POLLOCETTA', price: 12.00, description: 'Coulis de tomates, champignons, pancetta, poulet, crème fraîche, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza9.jpg' },
    { id: 'pizza9', name: 'PIZZA MIPA', price: 12.00, description: 'Coulis de tomates, saucisse calabraise, merguez, poivrons, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza10.jpg' },
    { id: 'pizza10', name: 'PIZZA ROMANA', price: 12.00, description: 'Coulis de tomates, champignons, viande hachée, oignons confits, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza11.jpg' },
    { id: 'pizza11', name: 'PIZZA 52', price: 12.00, description: 'Une nouvelle proposition chaque semaine', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza12.jpg' },
    { id: 'pizza12', name: 'PIZZA MARINA', price: 13.00, description: 'Coulis de tomates, saumon fumé, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza13.jpg' },
    { id: 'pizza13', name: 'PIZZA ROSSINI', price: 13.00, description: 'Coulis de tomates, bresaola, oignons confits, saucisse calabraise, tomates, mozzarella, origan', category: 'pizza', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza14.jpg' },
    
    // Pasta
    { id: 'pasta1', name: 'PASTA ALLA BOLOGNESE', price: 7.50, description: 'Sauce tomate, viande hachée, carottes, oignons', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta10.jpg' },
    { id: 'pasta2', name: 'LASAGNE BOLOGNESE', price: 9.00, description: 'Pâte, Béchamel, sauce bolognaise, crème fraîche, mozzarella', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta3.jpg' },
    { id: 'pasta3', name: 'LASAGNE VEGETARIANA', price: 9.00, description: 'Pâte, Béchamel, crème fraîche, aubergines, tomates, courgettes, oignons, poivrons, mozzarella', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta4.jpg' },
    { id: 'pasta4', name: 'PASTA AL PESTO', price: 9.50, description: 'Crème fraîche, basilic, pignons de pin, ail', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta5.jpg' },
    { id: 'pasta5', name: 'PASTA AL SALMONE', price: 9.50, description: 'Crème fraîche, saumon fumé', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta6.jpg' },
    { id: 'pasta6', name: 'PASTA ALLA CARBONARA', price: 9.50, description: 'Crème fraîche, pancetta, œuf', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta7.jpg' },
    { id: 'pasta7', name: 'PASTA AL GORGONZOLA', price: 9.50, description: 'Crème fraîche, gorgonzola', category: 'pasta', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta8.jpg' },
    
    // Dolce
    { id: 'dolce1', name: 'PANTOFOLA CHOCOLAT', price: 3.00, description: 'Chausson pâte à pizza chocolat', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert1.jpg' },
    { id: 'dolce2', name: 'PANTOFOLA CARAMEL BEURRE SALÉ', price: 3.00, description: 'Chausson pâte à pizza caramel au beurre salé', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert2.jpg' },
    { id: 'dolce3', name: 'PANTOFOLA FRUITS', price: 3.00, description: 'Chausson pâte à pizza crème de fruits rouges', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert3.jpg' },
    { id: 'dolce4', name: 'PANNA COTTA FRUITS ROUGES', price: 4.00, description: 'Crème cuite nappée de coulis de fruits rouges', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert4.jpg' },
    { id: 'dolce5', name: 'PANNA COTTA CARAMEL BEURRE SALÉ', price: 4.00, description: 'Crème cuite nappée de caramel au beurre salé', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert5.jpg' },
    { id: 'dolce6', name: 'MINI BABA LIMONCELLO', price: 4.00, description: '', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert18.jpg' },
    { id: 'dolce7', name: 'TIRAMISU', price: 4.00, description: 'Biscuit, mascarpone, café', category: 'dolce', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert24.jpg' }
];

// Fonction pour charger les données du menu dans Firebase (à exécuter une seule fois)
function loadMenuDataToFirebase() {
    console.log("Tentative de chargement des données dans Firebase...");
    
    // Vérifier si Firebase est initialisé
    if (!window.firebase || !firebase.firestore) {
        console.error("Firebase n'est pas correctement initialisé. Vérifiez que les scripts Firebase sont chargés.");
        return;
    }
    
    // Initialiser Firestore si ce n'est pas déjà fait
    if (!db) {
        try {
            db = firebase.firestore();
            console.log("Firestore initialisé avec succès.");
        } catch (error) {
            console.error("Erreur lors de l'initialisation de Firestore:", error);
            return;
        }
    }
    
    // Forcer le rechargement des données avec les URLs d'images
    db.collection("menu").get().then((querySnapshot) => {
        console.log("Rechargement des données du menu avec les images...");
        
        // Créer un tableau de promesses pour suivre toutes les opérations d'écriture
        const writePromises = [];
        
        // Ajouter chaque élément du menu à la collection "menu"
        menuData.forEach(item => {
            const promise = db.collection("menu").doc(item.id).set(item)
                .then(() => {
                    console.log(`Article ajouté: ${item.name}`);
                })
                .catch(error => {
                    console.error(`Erreur lors de l'ajout de ${item.name}:`, error);
                });
            
            writePromises.push(promise);
        });
        
        // Attendre que toutes les opérations d'écriture soient terminées
        Promise.all(writePromises)
            .then(() => {
                console.log("Toutes les données ont été chargées avec succès dans Firebase!");
            })
            .catch(error => {
                console.error("Erreur lors du chargement des données:", error);
            });
    }).catch(error => {
        console.error("Erreur lors de la vérification des données:", error);
    });
}

// Fonction pour obtenir une image spécifique pour chaque plat
function getImageForMenuItem(item) {
    // Images pour différentes catégories de plats
    const categoryImages = {
        'antipasti': 'https://source.unsplash.com/300x200/?antipasti,appetizer',
        'pizza': 'https://source.unsplash.com/300x200/?pizza',
        'pasta': 'https://source.unsplash.com/300x200/?pasta,spaghetti',
        'dolce': 'https://source.unsplash.com/300x200/?dessert,italian'
    };
    
    // Images spécifiques pour certains plats (basées sur des mots-clés dans le nom)
    const nameKeywords = {
        'JAMBON': 'https://source.unsplash.com/300x200/?ham,prosciutto',
        'THON': 'https://source.unsplash.com/300x200/?tuna,fish',
        'VIANDE': 'https://source.unsplash.com/300x200/?meat,beef',
        'VEGETARIANA': 'https://source.unsplash.com/300x200/?vegetable,vegetarian',
        'SALMONE': 'https://source.unsplash.com/300x200/?salmon,fish',
        'FROMAGE': 'https://source.unsplash.com/300x200/?cheese,italian',
        'SPECK': 'https://source.unsplash.com/300x200/?speck,ham',
        'POIVRONS': 'https://source.unsplash.com/300x200/?peppers,bell',
        'BRUSCHETTA': 'https://source.unsplash.com/300x200/?bruschetta,bread',
        'CARBONARA': 'https://source.unsplash.com/300x200/?carbonara,pasta',
        'PESTO': 'https://source.unsplash.com/300x200/?pesto,basil',
        'GORGONZOLA': 'https://source.unsplash.com/300x200/?gorgonzola,cheese',
        'CHOCOLAT': 'https://source.unsplash.com/300x200/?chocolate,dessert',
        'CARAMEL': 'https://source.unsplash.com/300x200/?caramel,dessert',
        'FRUITS': 'https://source.unsplash.com/300x200/?berries,fruits',
        'TIRAMISU': 'https://source.unsplash.com/300x200/?tiramisu,dessert'
    };
    
    // Vérifier si le nom du plat contient un mot-clé spécifique
    for (const keyword in nameKeywords) {
        if (item.name.includes(keyword)) {
            return nameKeywords[keyword];
        }
    }
    
    // Si aucun mot-clé spécifique n'est trouvé, utiliser l'image de la catégorie
    if (categoryImages[item.category]) {
        return categoryImages[item.category];
    }
    
    // Image par défaut si aucune correspondance n'est trouvée
    return 'https://source.unsplash.com/300x200/?food,italian';
}

// Fonction pour afficher les articles du menu par catégorie
function displayMenuItems(category) {
    // Vider le conteneur
    menuItemsContainer.innerHTML = '';
    
    // Vérifier si Firebase est initialisé
    if (!firebaseInitialized) {
        // Utiliser les données locales si Firebase n'est pas disponible
        const filteredItems = menuData.filter(item => item.category === category);
        renderMenuItems(filteredItems);
        return;
    }
    
    // Récupérer les articles du menu depuis Firebase
    db.collection("menu")
        .where("category", "==", category)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                // Si aucun élément n'est trouvé dans Firebase, utiliser les données locales
                const filteredItems = menuData.filter(item => item.category === category);
                renderMenuItems(filteredItems);
            } else {
                // Sinon, utiliser les données de Firebase
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                renderMenuItems(items);
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données:", error);
            
            // En cas d'erreur, utiliser les données locales
            const filteredItems = menuData.filter(item => item.category === category);
            renderMenuItems(filteredItems);
        });
}

// Fonction pour afficher les articles du menu dans le DOM
function renderMenuItems(items) {
    console.log("Rendu des éléments du menu:", items.length, "articles");
    
    // Vider le conteneur avant d'ajouter les nouveaux éléments
    if (menuItemsContainer) {
        menuItemsContainer.innerHTML = '';
    } else {
        console.error("Conteneur des éléments du menu non trouvé");
        return;
    }
    
    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.setAttribute('data-id', item.id);
        
        // Déterminer l'image spécifique pour chaque plat
        let imagePath;
        
        // Images spécifiques pour chaque plat par ID - Images réelles de nourriture italienne
        const imageMapping = {
            // Antipasti
            'antipasti1': 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=400&h=300&auto=format&fit=crop', // Antipasti
            'antipasti2': 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&auto=format&fit=crop', // Involtini de Speck
            'antipasti3': 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&auto=format&fit=crop', // Mini poivrons farcis
            'antipasti4': 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&auto=format&fit=crop', // Bruschetta
            'antipasti5': 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&auto=format&fit=crop', // Bruschetta Vegetariana
            'antipasti6': 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=300&auto=format&fit=crop', // Bruschetta Salmone
            'antipasti7': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=400&h=300&auto=format&fit=crop', // Bruschetta Bolognese
            'antipasti8': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&auto=format&fit=crop', // Dito
            'antipasti9': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&h=300&auto=format&fit=crop', // Dito Jambon
            'antipasti10': 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=400&h=300&auto=format&fit=crop', // Dito Viande hachée
            'antipasti11': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&auto=format&fit=crop', // Dito Salmone
            'antipasti12': 'https://images.unsplash.com/photo-1505575967455-40e256f73376?w=400&h=300&auto=format&fit=crop', // Dito 3 Formaggi
            
            // Pizza
            'pizza1': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&auto=format&fit=crop', // Pizza Verdi
            'pizza2': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&auto=format&fit=crop', // Pizza Napoletana
            'pizza3': 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&h=300&auto=format&fit=crop', // Pizza Regina
            'pizza4': 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&h=300&auto=format&fit=crop', // Pizza 4 Formaggi
            'pizza5': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&auto=format&fit=crop', // Pizza Capra
            'pizza6': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&auto=format&fit=crop', // Pizza Vegetariana
            'pizza7': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&auto=format&fit=crop', // Pizza Montanara
            'pizza8': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&auto=format&fit=crop', // Pizza Pollocetta
            'pizza9': 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&h=300&auto=format&fit=crop', // Pizza Bolognese
            'pizza10': 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=400&h=300&auto=format&fit=crop', // Pizza Romana
            'pizza11': 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&h=300&auto=format&fit=crop', // Pizza S2
            'pizza12': 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=400&h=300&auto=format&fit=crop', // Pizza Marina
            'pizza13': 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&auto=format&fit=crop', // Pizza Rossini
            
            // Pasta
            'pasta1': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&auto=format&fit=crop', // Pasta alla Bolognese
            'pasta2': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&auto=format&fit=crop', // Lasagne Bolognese
            'pasta3': 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&auto=format&fit=crop', // Lasagne Vegetariana
            'pasta4': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&auto=format&fit=crop', // Pasta al Pesto
            'pasta5': 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400&h=300&auto=format&fit=crop', // Pasta al Salmone
            'pasta6': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&auto=format&fit=crop', // Pasta alla Carbonara
            'pasta7': 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&auto=format&fit=crop', // Pasta al Gorgonzola
            
            // Dolce
            'dolce1': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&auto=format&fit=crop', // Pantofola Chocolat
            'dolce2': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&auto=format&fit=crop', // Pantofola Caramel
            'dolce3': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&auto=format&fit=crop', // Pantofola Fruits
            'dolce4': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&auto=format&fit=crop', // Panna Cotta Fruits Rouges
            'dolce5': 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&auto=format&fit=crop', // Panna Cotta Caramel
            'dolce6': 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=400&h=300&auto=format&fit=crop', // Mini Baba Limoncello
            'dolce7': 'https://images.unsplash.com/photo-1542124948-dc391252a940?w=400&h=300&auto=format&fit=crop' // Tiramisu
        };
        
        // Utiliser l'image spécifique ou une image par défaut selon la catégorie
        if (imageMapping[item.id]) {
            imagePath = imageMapping[item.id];
        } else if (item.category === 'antipasti') {
            imagePath = 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=400&h=300&auto=format&fit=crop';
        } else if (item.category === 'pizza') {
            imagePath = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&auto=format&fit=crop';
        } else if (item.category === 'pasta') {
            imagePath = 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&auto=format&fit=crop';
        } else if (item.category === 'dolce') {
            imagePath = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&auto=format&fit=crop';
        } else {
            imagePath = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&auto=format&fit=crop';
        }
        
        menuItemElement.innerHTML = `
            <div class="menu-item-image">
                <img src="${imagePath}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <div class="price">
                    <span>${item.price.toFixed(2)} €</span>
                    <button class="add-to-cart" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
    
    // Ajouter des écouteurs d'événements aux boutons "Ajouter au panier"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const itemId = this.getAttribute('data-id');
            console.log("Clic sur le bouton d'ajout au panier pour l'article ID:", itemId);
            
            // Appeler la fonction addToCart définie dans cart.js
            if (typeof addToCart === 'function') {
                addToCart(itemId);
            } else {
                console.error("La fonction addToCart n'est pas définie");
            }
        });
    });
    
    console.log("Écouteurs d'événements ajoutés aux boutons d'ajout au panier");
}

// Fonction pour ajouter des écouteurs d'événements aux boutons de catégorie
function setupCategoryButtons() {
    categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe 'active' de tous les boutons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe 'active' au bouton cliqué
            button.classList.add('active');
            
            // Afficher les articles de la catégorie sélectionnée
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

// Fonction pour initialiser l'affichage du menu
function initMenu() {
    // Initialiser les références DOM
    menuItemsContainer = document.querySelector('.menu-items-container');
    
    // Configurer les boutons de catégorie
    setupCategoryButtons();
    
    // Charger les données du menu dans Firebase (si ce n'est pas déjà fait)
    loadMenuDataToFirebase();
    
    // Afficher la première catégorie par défaut (antipasti)
    displayMenuItems('antipasti');
    
    // Activer le premier bouton par défaut
    const firstCategoryBtn = document.querySelector('.category-btn[data-category="antipasti"]');
    if (firstCategoryBtn) {
        firstCategoryBtn.classList.add('active');
    }
}

// Initialiser le menu au chargement de la page
document.addEventListener('DOMContentLoaded', initMenu);
