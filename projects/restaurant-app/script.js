const items = [
    { id: 1, name: 'Margherita Pizza', desc: 'Tomato, mozzarella, basil', price: 8.5, emoji: '🍕' },
    { id: 2, name: 'Classic Burger', desc: 'Beef patty, lettuce, tomato', price: 9.0, emoji: '🍔' },
    { id: 3, name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons', price: 7.0, emoji: '🥗' },
    { id: 4, name: 'Loaded Fries', desc: 'Crispy fries, cheese, bacon bits', price: 5.5, emoji: '🍟' },
    { id: 5, name: 'Lemonade', desc: 'Fresh squeezed', price: 2.5, emoji: '🍋' }
];

const menuEl = document.getElementById('menu');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const clearBtn = document.getElementById('clear-cart');

let cart = [];

function format(n) { return n.toFixed(2) }

function renderMenu() {
    menuEl.innerHTML = '';
    items.forEach(it => {
        const card = document.createElement('article');
        card.className = 'menu-card';
        card.innerHTML = `
      <div class="item-image" aria-hidden="true">${it.emoji}</div>
      <div>
        <h3 class="title">${it.name}</h3>
        <div class="desc">${it.desc}</div>
      </div>
      <div class="meta">
        <div class="price">$${format(it.price)}</div>
        <button class="btn" data-id="${it.id}">Add</button>
      </div>
    `;
        menuEl.appendChild(card);
    });
    menuEl.querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', e => addToCart(Number(e.currentTarget.dataset.id)));
    });
}

function addToCart(id) {
    const found = cart.find(c => c.id === id);
    if (found) found.qty++;
    else cart.push({ id, qty: 1 });
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
}

function changeQty(id, delta) {
    const it = cart.find(c => c.id === id);
    if (!it) return;
    it.qty += delta;
    if (it.qty < 1) removeFromCart(id);
    renderCart();
}

function renderCart() {
    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach(ci => {
        const meta = items.find(i => i.id === ci.id);
        total += meta.price * ci.qty;
        const li = document.createElement('li');
        li.innerHTML = `
      <div><span class="qty">x${ci.qty}</span>${meta.name}</div>
      <div>
        <button aria-label="decrease" data-dec="${ci.id}">-</button>
        <button aria-label="increase" data-inc="${ci.id}">+</button>
        <button aria-label="remove" data-rm="${ci.id}">✕</button>
      </div>
    `;
        cartItemsEl.appendChild(li);
    });
    cartTotalEl.textContent = format(total);

    cartItemsEl.querySelectorAll('button[data-rm]').forEach(b => b.addEventListener('click', e => removeFromCart(Number(e.currentTarget.dataset.rm))));
    cartItemsEl.querySelectorAll('button[data-inc]').forEach(b => b.addEventListener('click', e => changeQty(Number(e.currentTarget.dataset.inc), 1)));
    cartItemsEl.querySelectorAll('button[data-dec]').forEach(b => b.addEventListener('click', e => changeQty(Number(e.currentTarget.dataset.dec), -1)));
}

clearBtn.addEventListener('click', () => { cart = []; renderCart(); });

// init
renderMenu();
renderCart();
