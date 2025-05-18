// Script spécifique pour la page panier

document.addEventListener('DOMContentLoaded', function() {
    console.log("Initialisation de la page panier");
    
    // Initialiser l'affichage du panier
    initPanierPage();
    
    // Ajouter un écouteur d'événement au bouton "Vider le panier"
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            // Vider le panier sans confirmation
            localStorage.removeItem('cart');
            updateCartDisplay();
            console.log("Panier vidé");
        });
    }
});

// Fonction pour initialiser la page panier
function initPanierPage() {
    // Vérifier si nous sommes sur la page panier
    if (window.location.pathname.includes('panier.html')) {
        console.log("Page panier détectée");
        
        // Mettre à jour l'affichage du panier
        updateCartDisplay();
        
        // Configurer le formulaire de commande
        setupOrderForm();
    }
}

// Fonction pour mettre à jour l'affichage du panier avec des images
function updateCartDisplay() {
    console.log("Mise à jour de l'affichage du panier");
    
    // Référence aux éléments du DOM
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!cartItemsContainer || !totalPriceElement) {
        console.error("Éléments du DOM non trouvés");
        return;
    }
    
    // Récupérer le panier depuis localStorage
    let cart = [];
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log("Panier chargé depuis localStorage:", cart);
        }
    } catch (e) {
        console.error("Erreur lors de la récupération du panier:", e);
    }
    
    // Vider le conteneur des articles du panier
    cartItemsContainer.innerHTML = '';
    
    if (!cart || cart.length === 0) {
        // Si le panier est vide, afficher un message
        cartItemsContainer.innerHTML = '<div class="empty-cart-message">Votre panier est vide</div>';
        totalPriceElement.textContent = '0.00';
        console.log("Panier vide");
    } else {
        // Sinon, afficher les articles du panier
        cart.forEach(item => {
            console.log("Affichage de l'article:", item);
            
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            
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
                'pizza3': 'https://images.unsplash.com/photo-1595708684082-61b98681d5cc?w=400&h=300&auto=format&fit=crop', // Pizza Regina
                'pizza4': 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&h=300&auto=format&fit=crop', // Pizza 4 Formaggi
                'pizza5': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&auto=format&fit=crop', // Pizza Capra
                'pizza6': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&auto=format&fit=crop', // Pizza Vegetariana
                'pizza7': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&auto=format&fit=crop', // Pizza Montanara
                'pizza8': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&auto=format&fit=crop', // Pizza Pollocetta
                'pizza9': 'https://images.unsplash.com/photo-1528137871618-6428a0291777?w=400&h=300&auto=format&fit=crop', // Pizza Bolognese
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
            
            // Déterminer la catégorie en fonction de l'ID
            let category = '';
            if (item.id.includes('antipasti')) category = 'antipasti';
            else if (item.id.includes('pizza')) category = 'pizza';
            else if (item.id.includes('pasta')) category = 'pasta';
            else if (item.id.includes('dolce')) category = 'dolce';
            
            // Utiliser l'image spécifique ou une image par défaut selon la catégorie
            if (imageMapping[item.id]) {
                imagePath = imageMapping[item.id];
            } else if (category === 'antipasti') {
                imagePath = 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=400&h=300&auto=format&fit=crop';
            } else if (category === 'pizza') {
                imagePath = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&auto=format&fit=crop';
            } else if (category === 'pasta') {
                imagePath = 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&auto=format&fit=crop';
            } else if (category === 'dolce') {
                imagePath = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&auto=format&fit=crop';
            } else {
                imagePath = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&auto=format&fit=crop';
            }
            
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${imagePath}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-btn" data-id="${item.id}">×</button>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Calculer le total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPriceElement.textContent = total.toFixed(2);
        console.log("Total calculé:", total);
        
        // Ajouter des écouteurs d'événements aux boutons de quantité
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                const cartItem = cart.find(item => item.id === itemId);
                if (cartItem) {
                    if (cartItem.quantity > 1) {
                        cartItem.quantity -= 1;
                    } else {
                        // Supprimer l'article si la quantité est 1
                        cart = cart.filter(item => item.id !== itemId);
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                const cartItem = cart.find(item => item.id === itemId);
                if (cartItem) {
                    cartItem.quantity += 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                }
            });
        });
        
        // Ajouter des écouteurs d'événements aux boutons de suppression
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                cart = cart.filter(item => item.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            });
        });
    }
}

// Fonction pour configurer le formulaire de commande
function setupOrderForm() {
    const orderForm = document.getElementById('order-form');
    if (!orderForm) return;
    
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Vérifier si le panier n'est pas vide
        if (cart.length === 0) {
            console.log("Panier vide - commande non envoyée");
            return;
        }
        
        // Récupérer les données du formulaire
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const comments = document.getElementById('comments').value;
        
        // Créer l'objet de commande
        const orderData = {
            customer: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                comments: comments
            },
            items: cart,
            total: calculateTotal(),
            date: new Date().toISOString(),
            status: 'pending'
        };
        
        // Envoyer la commande
        submitOrder(orderData);
    });
}
