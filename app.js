const products = [
    {
        id: 'midnight-crest',
        name: 'Midnight Crest',
        collection: 'mens',
        inspired: 'Inspired by Sauvage',
        desc: 'Bold, fresh, and undeniably powerful, Midnight Crest opens with crisp bergamot and spicy pepper, settling into deep amber and woody notes. It’s a scent of confidence and quiet intensity.',
        size: '30ml – sleek and travel-ready',
        uniqueness: 'A smoother, more refined take with added warmth, creating a balanced scent that lasts without overpowering.',
        image: 'assets/midnight_crest_bottle.png',
        price: 49.99
    },
    {
        id: 'aqua-verge',
        name: 'Aqua Verge',
        collection: 'mens',
        inspired: 'Inspired by Men in White',
        desc: 'Clean and invigorating, Aqua Verge captures the feeling of fresh air meeting cool waters. Bright citrus blends seamlessly with soft florals and musk for a crisp, modern finish.',
        size: '30ml – perfect for everyday wear',
        uniqueness: 'A lighter, more refreshing profile with a calm, airy quality that feels effortlessly sophisticated.',
        image: 'assets/aqua_verge_bottle.png',
        price: 45.99
    },
    {
        id: 'wild-ember',
        name: 'Wild Ember',
        collection: 'mens',
        inspired: 'Inspired by Eros',
        desc: 'Passionate and energetic, Wild Ember ignites with fresh mint and green apple, layered over warm vanilla and tonka bean. It’s bold, seductive, and unforgettable.',
        size: '30ml – compact and stylish',
        uniqueness: 'A richer, smoother sweetness that enhances wearability while maintaining its powerful presence.',
        image: 'assets/wild_ember_bottle.png',
        price: 54.99
    },
    {
        id: 'noir-prestige',
        name: 'Noir Prestige',
        collection: 'mens',
        inspired: 'Inspired by Polo Black',
        desc: 'Dark, smooth, and luxurious, Noir Prestige blends rich fruits with deep woods and a sensual base. It’s mystery, elegance, and confidence in every note.',
        size: '30ml – refined and portable',
        uniqueness: 'A deeper, slightly smokier character that adds a modern edge to a classic masculine scent.',
        image: 'assets/noir_prestige_bottle.png',
        price: 52.99
    },
    {
        id: 'obsidian-rush',
        name: 'Obsidian Rush',
        collection: 'mens',
        inspired: 'Inspired by Acqua di Gio',
        desc: 'Fresh, aquatic, and energizing, Obsidian Rush reflects the power and calm of the ocean. Marine notes combine with citrus and soft woods for a clean, timeless aroma.',
        size: '30ml – ideal for daily refreshment',
        uniqueness: 'A smoother, longer-lasting aquatic blend with a subtle depth that elevates its freshness.',
        image: 'assets/obsidian_rush_bottle.png',
        price: 48.99
    },
    {
        id: 'heavenly-mist',
        name: 'Heavenly Mist',
        collection: 'womens',
        inspired: 'Inspired by Cloud',
        desc: 'Soft, airy, and comforting, Heavenly Mist wraps you in a delicate blend of lavender, pear, and creamy coconut. Light and dreamy, it feels like floating in a serene cloud.',
        size: '30ml – elegant and travel-friendly',
        uniqueness: 'A more refined and airy sweetness, offering a smoother, less sugary finish for everyday elegance.',
        image: 'assets/heavenly_mist_bottle.png',
        filterClass: '',
        price: 49.99
    },
    {
        id: 'velvet-vanilla',
        name: 'Velvet Vanilla',
        collection: 'womens',
        inspired: 'Inspired by Vanilla Lace',
        desc: 'Warm and sensual, Velvet Vanilla is a rich embrace of creamy vanilla layered with soft florals and a gentle musk. It’s cozy, luxurious, and timeless.',
        size: '30ml – perfectly sized for daily use',
        uniqueness: 'A deeper, slightly toasted vanilla note that adds richness and a sophisticated warmth.',
        image: 'assets/velvet_vanilla_bottle.png',
        filterClass: '',
        price: 45.99
    },
    {
        id: 'purple-allure',
        name: 'Purple Allure',
        collection: 'womens',
        inspired: 'Inspired by Amethyste',
        desc: 'Graceful and enchanting, Purple Allure blends delicate florals with subtle fruity undertones. It’s feminine, elegant, and effortlessly captivating.',
        size: '30ml – compact and chic',
        uniqueness: 'A brighter, modern floral twist that enhances freshness while maintaining a soft, alluring trail.',
        image: 'assets/purple_allure_bottle.png',
        filterClass: '',
        price: 54.99
    },
    {
        id: 'rose-bliss',
        name: 'Rose Bliss',
        collection: 'womens',
        inspired: 'Inspired by Strawberries & Champagne',
        desc: 'Romantic and playful, Rose Bliss combines sweet berries with soft floral notes and a sparkling touch of elegance. It’s fresh, flirty, and luxurious.',
        size: '30ml – ideal for on-the-go glamour',
        uniqueness: 'A more balanced sweetness with a delicate rosy finish, making it feel refined rather than overly sugary.',
        image: 'assets/rose_bliss_bottle.png',
        filterClass: '',
        price: 48.99
    },
    {
        id: 'fresh-serenity',
        name: 'Fresh Serenity',
        collection: 'womens',
        inspired: 'Inspired by Cucumber Melon',
        desc: 'Clean, crisp, and refreshing, Fresh Serenity captures the essence of cool cucumber and juicy melon with a soft green finish. It’s light, uplifting, and effortlessly calming.',
        size: '30ml – refreshing and easy to carry',
        uniqueness: 'A more natural, dewy freshness that feels like a peaceful morning in nature.',
        image: 'assets/fresh_serenity_bottle.png',
        filterClass: '',
        price: 42.99
    }
];

let cart = [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

function init() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
}

function renderProducts() {
    const mensGrid = document.getElementById('mens-grid');
    const womensGrid = document.getElementById('womens-grid');

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}" class="product-image ${p.filterClass || ''}">
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="inspired">${p.inspired}</p>
                <p class="price">$${p.price.toFixed(2)}</p>
                <div class="actions">
                    <button class="btn btn-outline" onclick="openProductModal('${p.id}')">View Details</button>
                    <button class="btn btn-add-cart" onclick="addToCart('${p.id}')">🛒 Add to Cart</button>
                    <button class="btn btn-dark" onclick="buyNow('${p.id}')">Buy Now</button>
                </div>
            </div>
        `;
        if (p.collection === 'mens') mensGrid.appendChild(card);
        else womensGrid.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    alert(`Added ${product.name} to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-product-content">
            <img src="${product.image}" class="${product.filterClass || ''}" style="max-width:200px; border-radius:12px;">
            <div class="modal-details">
                <h2>${product.name}</h2>
                <p class="inspired-text">${product.inspired}</p>
                <p class="desc">${product.desc}</p>
                <ul>
                    <li><strong>Size:</strong> ${product.size}</li>
                    <li><strong>Uniqueness:</strong> ${product.uniqueness}</li>
                </ul>
                <div class="actions" style="margin-top:20px; justify-content: flex-start;">
                    <button class="btn btn-add-cart" onclick="addToCart('${product.id}')">🛒 Add to Cart - $${product.price.toFixed(2)}</button>
                    <button class="btn btn-dark" onclick="buyNow('${product.id}')">Buy Now</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('productModal').style.display = 'flex';
    document.getElementById('submit-review').onclick = () => addReview(id);
    renderReviews(id);
}

window.buyNow = function (id) {
    addToCart(id);
    document.getElementById('productModal').style.display = 'none';
    openCheckout();
}
window.openProductModal = openProductModal;
window.addToCart = addToCart;

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCartCount();
    openCheckout();
}

function openCheckout() {
    document.getElementById('checkoutModal').style.display = 'flex';
    const summary = document.getElementById('order-summary');

    const deliveryOptions = document.querySelector('.delivery-options');
    const paymentOptions = document.querySelector('.payment-options');
    const confirmBtn = document.getElementById('confirm-order');

    if (cart.length === 0) {
        summary.innerHTML = '<p style="text-align:center; padding: 20px; color: #888; font-style: italic;">Your cart is currently empty.</p>';
        if (deliveryOptions) deliveryOptions.style.display = 'none';
        if (paymentOptions) paymentOptions.style.display = 'none';
        if (confirmBtn) confirmBtn.style.display = 'none';
        return;
    }

    if (deliveryOptions) deliveryOptions.style.display = 'block';
    if (paymentOptions) paymentOptions.style.display = 'block';
    if (confirmBtn) confirmBtn.style.display = 'block';

    let total = 0;
    summary.innerHTML = cart.map((p, index) => {
        total += p.price;
        return `<div class="summary-item">
            <span>${p.name}</span>
            <span>
                $${p.price.toFixed(2)}
                <button class="btn-remove" onclick="removeFromCart(${index})" title="Remove from cart">&times;</button>
            </span>
        </div>`;
    }).join('') + `<hr><div class="summary-total"><strong>Total:</strong> <strong>$${total.toFixed(2)}</strong></div>`;
}

function renderReviews(id) {
    const list = document.getElementById('reviews-list');
    const productReviews = reviews[id] || [];
    if (productReviews.length === 0) {
        list.innerHTML = '<p style="color:var(--text-light);font-style:italic;">No reviews yet. Be the first!</p>';
        return;
    }
    list.innerHTML = productReviews.map(r => `
        <div class="review-item">
            <strong>${r.name}</strong> <span style="color:#f5b041;">${'⭐'.repeat(r.rating || 5)}</span>
            <p>${r.text}</p>
        </div>
    `).join('');
}

function addReview(id) {
    const nameStr = document.getElementById('reviewer-name').value;
    const textStr = document.getElementById('review-text').value;
    const ratingVal = parseInt(document.getElementById('review-rating').value) || 5;
    if (!nameStr || !textStr) return alert("Please fill both name and review.");

    if (!reviews[id]) reviews[id] = [];
    reviews[id].push({ name: nameStr, text: textStr, rating: ratingVal });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';
    renderReviews(id);
}

function setupEventListeners() {
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.onclick = function () {
            this.closest('.modal').style.display = 'none';
        }
    });

    document.getElementById('cartBtn').onclick = openCheckout;

    document.getElementById('confirm-order').onclick = () => {
        const payment = document.querySelector('input[name="payment"]:checked').value;
        const delivery = document.querySelector('input[name="delivery"]:checked').value;
        alert(`Order confirmed! via ${payment.toUpperCase()} with ${delivery} delivery. Your signature scent is on the way!`);
        cart = [];
        updateCartCount();
        document.getElementById('checkoutModal').style.display = 'none';
    };
}

init();
