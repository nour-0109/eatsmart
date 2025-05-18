// Références aux éléments du DOM
let cartItemsContainer;
let totalPriceElement;
let orderForm;

// Panier d'achat
let cart = [];

/**
 * Ajoute un article au panier ou augmente sa quantité s'il existe déjà
 * @param {string} itemId - ID de l'article à ajouter
 */
function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    
    if (!item) {
        console.error(`Article avec l'ID ${itemId} non trouvé`);
        return;
    }
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            img: item.img
        });
    }
    
    // Sauvegarde dans localStorage et log
    saveCart();
    console.log(`${item.name} ajouté au panier.`);
}

/**
 * Sauvegarde le panier dans localStorage
 */
function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde du panier:", e);
    }
}

/**
 * Supprime un article du panier
 * @param {string} itemId - ID de l'article à supprimer
 */
function removeFromCart(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartDisplay();
    }
}

/**
 * Met à jour la quantité d'un article dans le panier
 * @param {string} itemId - ID de l'article à mettre à jour
 * @param {number} newQuantity - Nouvelle quantité
 */
function updateItemQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    
    if (!item) return;
    
    if (newQuantity <= 0) {
        removeFromCart(itemId);
    } else {
        item.quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    }
}

/**
 * Calcule le total du panier
 * @returns {number} - Montant total
 */
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Met à jour l'affichage du panier dans l'interface
 */
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide</p>';
        totalPriceElement.textContent = '0.00';
        return;
    }
    
    // Créer un fragment pour améliorer les performances
    const fragment = document.createDocumentFragment();
    
    // Ajouter chaque article au fragment
    cart.forEach(item => {
        const cartItemElement = createCartItemElement(item);
        fragment.appendChild(cartItemElement);
    });
    
    // Ajouter le fragment au conteneur
    cartItemsContainer.appendChild(fragment);
    
    // Mettre à jour le total
    totalPriceElement.textContent = calculateTotal().toFixed(2);
    
    // Ajouter les écouteurs d'événements
    addEventListeners();
}

/**
 * Crée un élément HTML pour un article du panier
 * @param {Object} item - Article du panier
 * @returns {HTMLElement} - Élément HTML de l'article
 */
function createCartItemElement(item) {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    
    cartItemElement.innerHTML = `
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
    
    return cartItemElement;
}

/**
 * Ajoute les écouteurs d'événements aux boutons du panier
 */
function addEventListeners() {
    // Boutons de diminution de quantité
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id;
            const item = cart.find(item => item.id === itemId);
            if (item) updateItemQuantity(itemId, item.quantity - 1);
        });
    });
    
    // Boutons d'augmentation de quantité
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id;
            const item = cart.find(item => item.id === itemId);
            if (item) updateItemQuantity(itemId, item.quantity + 1);
        });
    });
    
    // Boutons de suppression
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            removeFromCart(e.target.dataset.id);
        });
    });
}

/**
 * Envoie la commande à Firebase ou simule localement
 * @param {Object} orderData - Données de la commande
 */
function submitOrder(orderData) {
    const orderId = 'order_' + Date.now();
    
    if (firebaseInitialized) {
        sendOrderToFirebase(orderData, orderId);
    } else {
        simulateLocalOrder(orderData, orderId);
    }
}

/**
 * Envoie la commande à Firebase
 * @param {Object} orderData - Données de la commande
 * @param {string} orderId - ID unique de la commande
 */
function sendOrderToFirebase(orderData, orderId) {
    db.collection("orders").doc(orderId).set(orderData)
        .then(() => {
            clearCartAfterOrder();
            console.log("Commande envoyée avec succès");
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi de la commande:", error);
            simulateLocalOrder(orderData, orderId);
        });
}

/**
 * Simule l'envoi de commande en mode local
 * @param {Object} orderData - Données de la commande
 * @param {string} orderId - ID unique de la commande
 */
function simulateLocalOrder(orderData, orderId) {
    try {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({ id: orderId, ...orderData });
        localStorage.setItem('orders', JSON.stringify(orders));
        clearCartAfterOrder();
        console.log("Commande enregistrée localement");
    } catch (e) {
        console.error("Erreur lors de l'enregistrement local:", e);
    }
}

/**
 * Nettoie le panier après une commande réussie
 */
function clearCartAfterOrder() {
    cart = [];
    saveCart();
    updateCartDisplay();
    orderForm.reset();
    console.log("Panier vidé et commande traitée avec succès");
}

/**
 * Configure les écouteurs d'événements pour le formulaire de commande
 */
function setupEventListeners() {
    if (!orderForm) {
        console.warn("Le formulaire de commande n'existe pas sur cette page");
        return;
    }
    
    orderForm.addEventListener('submit', handleOrderSubmit);
}

/**
 * Gère la soumission du formulaire de commande
 * @param {Event} e - Événement de soumission
 */
function handleOrderSubmit(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        console.log("Panier vide - commande non envoyée");
        return;
    }
    
    const formData = getFormData();
    submitOrder(formData);
}

/**
 * Récupère les données du formulaire de commande
 * @returns {Object} - Données de la commande formatées
 */
function getFormData() {
    return {
        customer: {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        },
        items: cart,
        total: calculateTotal(),
        date: new Date().toISOString(),
        status: 'pending'
    };
}

/**
 * Initialise le panier et les éléments DOM associés
 */
function initCart() {
    // Initialiser les références DOM
    cartItemsContainer = document.querySelector('.cart-items');
    totalPriceElement = document.getElementById('total-price');
    orderForm = document.getElementById('order-form');
    
    // Charger le panier depuis localStorage
    loadCartFromStorage();
    
    // Configurer les écouteurs d'événements
    setupEventListeners();
    
    // Mettre à jour l'affichage du panier
    updateCartDisplay();
}

/**
 * Charge le panier depuis localStorage
 */
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.error("Erreur lors du chargement du panier:", e);
    }
}

// Initialiser le panier au chargement de la page
document.addEventListener('DOMContentLoaded', initCart);
