const products = [
  {
    id: "mesh-tank",
    category: "tops",
    shape: "tank",
    price: 68,
    wash: "#d9e4dc",
    accent: "#4d8f8b",
    sizes: ["XS", "S", "M", "L", "XL"],
    fr: {
      name: "Mesh Tank Coastline",
      desc: "Débardeur mesh respirant, coupe droite, logo ton sur ton.",
      category: "Hauts",
    },
    en: {
      name: "Coastline Mesh Tank",
      desc: "Breathable mesh tank with a straight fit and tonal branding.",
      category: "Tops",
    },
  },
  {
    id: "crochet-shirt",
    category: "tops",
    shape: "shirt",
    price: 125,
    wash: "#f4f0e8",
    accent: "#d95c46",
    sizes: ["S", "M", "L", "XL"],
    fr: {
      name: "Chemise Crochet Sand",
      desc: "Chemise ouverte en maille crochet, légère et texturée.",
      category: "Hauts",
    },
    en: {
      name: "Sand Crochet Shirt",
      desc: "Open crochet knit shirt with a light textured handfeel.",
      category: "Tops",
    },
  },
  {
    id: "terry-polo",
    category: "tops",
    shape: "polo",
    price: 98,
    wash: "#ded56a",
    accent: "#101010",
    sizes: ["S", "M", "L", "XL"],
    fr: {
      name: "Polo Terry Sunfade",
      desc: "Polo éponge premium, col ouvert, volume relax.",
      category: "Hauts",
    },
    en: {
      name: "Sunfade Terry Polo",
      desc: "Premium terry polo with an open collar and relaxed volume.",
      category: "Tops",
    },
  },
  {
    id: "washed-tee",
    category: "tops",
    shape: "tee",
    price: 58,
    wash: "#ebe4d7",
    accent: "#4d8f8b",
    sizes: ["XS", "S", "M", "L", "XL"],
    fr: {
      name: "T-shirt Studio Washed",
      desc: "Jersey lourd délavé, print dos inspiré des carnets de voyage.",
      category: "Hauts",
    },
    en: {
      name: "Studio Washed Tee",
      desc: "Heavy washed jersey with a travel-notebook back print.",
      category: "Tops",
    },
  },
  {
    id: "cargo-short",
    category: "bottoms",
    shape: "shorts",
    price: 118,
    wash: "#cdd4c9",
    accent: "#101010",
    sizes: ["28", "30", "32", "34", "36"],
    fr: {
      name: "Short Cargo Tidal",
      desc: "Short cargo ample, poches plaquées et cordon intérieur.",
      category: "Bas",
    },
    en: {
      name: "Tidal Cargo Short",
      desc: "Wide cargo short with patch pockets and internal drawcord.",
      category: "Bottoms",
    },
  },
  {
    id: "nylon-pant",
    category: "bottoms",
    shape: "pants",
    price: 145,
    wash: "#b9c7c5",
    accent: "#d95c46",
    sizes: ["S", "M", "L", "XL"],
    fr: {
      name: "Pantalon Nylon Drift",
      desc: "Pantalon léger, jambe large, taille ajustable.",
      category: "Bas",
    },
    en: {
      name: "Drift Nylon Pant",
      desc: "Lightweight wide-leg pant with an adjustable waist.",
      category: "Bottoms",
    },
  },
  {
    id: "swim-short",
    category: "swim",
    shape: "swim",
    price: 89,
    wash: "#4d8f8b",
    accent: "#ded56a",
    sizes: ["S", "M", "L", "XL"],
    fr: {
      name: "Swim Short Lagoon",
      desc: "Short de bain satiné, doublure mesh et séchage rapide.",
      category: "Bain",
    },
    en: {
      name: "Lagoon Swim Short",
      desc: "Satin swim short with mesh lining and fast-dry finish.",
      category: "Swim",
    },
  },
  {
    id: "leather-belt",
    category: "accessories",
    shape: "belt",
    price: 105,
    wash: "#d95c46",
    accent: "#101010",
    sizes: ["80", "85", "90", "95", "100"],
    fr: {
      name: "Ceinture Island Buckle",
      desc: "Cuir grainé, boucle organique argentée et passant gravé.",
      category: "Accessoires",
    },
    en: {
      name: "Island Buckle Belt",
      desc: "Grained leather, organic silver buckle and engraved keeper.",
      category: "Accessories",
    },
  },
  {
    id: "signet-ring",
    category: "accessories",
    shape: "ring",
    price: 78,
    wash: "#f4f0e8",
    accent: "#4d8f8b",
    sizes: ["54", "56", "58", "60", "62"],
    fr: {
      name: "Bague Signet Current",
      desc: "Bague argentée polie, face ondulée et gravure discrète.",
      category: "Accessoires",
    },
    en: {
      name: "Current Signet Ring",
      desc: "Polished silver-tone ring with a waved face and subtle engraving.",
      category: "Accessories",
    },
  },
  {
    id: "chain-necklace",
    category: "accessories",
    shape: "necklace",
    price: 92,
    wash: "#d9e4dc",
    accent: "#101010",
    sizes: ["OS"],
    fr: {
      name: "Collier Tide Chain",
      desc: "Chaîne fine acier, pendentif I minimal et fermoir mousqueton.",
      category: "Accessoires",
    },
    en: {
      name: "Tide Chain Necklace",
      desc: "Fine steel chain with a minimal I pendant and lobster clasp.",
      category: "Accessories",
    },
  },
  {
    id: "rope-bracelet",
    category: "accessories",
    shape: "bracelet",
    price: 64,
    wash: "#ebe4d7",
    accent: "#d95c46",
    sizes: ["S", "M", "L"],
    fr: {
      name: "Bracelet Rope Signal",
      desc: "Cordon tressé, pièce métal argentée et réglage coulissant.",
      category: "Accessoires",
    },
    en: {
      name: "Signal Rope Bracelet",
      desc: "Braided cord, silver-tone hardware and sliding adjustment.",
      category: "Accessories",
    },
  },
  {
    id: "technical-tote",
    category: "accessories",
    shape: "bag",
    price: 112,
    wash: "#101010",
    accent: "#ded56a",
    sizes: ["OS"],
    fr: {
      name: "Tote Technique Marina",
      desc: "Tote résistant, poche zippée, sangles contrastées.",
      category: "Accessoires",
    },
    en: {
      name: "Marina Technical Tote",
      desc: "Durable tote with zipped pocket and contrast straps.",
      category: "Accessories",
    },
  },
];

const copy = {
  fr: {
    navHome: "Accueil",
    navShop: "Shop",
    navAbout: "À propos",
    navContact: "Contact",
    heroEyebrow: "Drop 01 / Été 2026",
    heroSubtitle: "Streetwear premium pour les chaleurs de ville, les fins de journée salées et les nuits qui commencent tôt.",
    heroPrimary: "Shop la collection",
    heroSecondary: "Découvrir l'univers",
    heroMetaOne: "Paris design",
    heroMetaTwo: "Summer capsule",
    heroMetaThree: "Limited run",
    ticker: "Coastline Studies est maintenant disponible",
    shopEyebrow: "Nouvelle collection",
    shopTitle: "Coastline Studies",
    shopIntro: "Une garde-robe été complète : coupes fluides, textures légères, bijoux argentés et accessoires de ville.",
    filterAll: "Tout",
    filterTops: "Hauts",
    filterBottoms: "Bas",
    filterSwim: "Bain",
    filterAccessories: "Accessoires",
    sortLabel: "Trier",
    sortFeatured: "Sélection",
    sortPriceAsc: "Prix croissant",
    sortPriceDesc: "Prix décroissant",
    lookbookEyebrow: "Looks d'été",
    lookbookTitle: "Du sable au studio.",
    lookbookText: "Des silhouettes pensées pour passer de l'après-midi dehors à la soirée en ville sans changer d'attitude.",
    lookOneTitle: "Mesh tank, cargo short, bijoux argent",
    lookTwoTitle: "Chemise crochet, pantalon nylon, ceinture cuir",
    lookThreeTitle: "Terry polo, swim short, tote technique",
    aboutEyebrow: "À propos",
    aboutTitle: "Une marque insulaire avec une énergie de ville.",
    aboutTextOne: "Islander part d'une idée simple : garder la liberté des vacances dans une silhouette que tu peux porter tous les jours.",
    aboutTextTwo: "Le logo associe un wordmark net à un I minimal, posé entre deux lignes comme un horizon et un lagon.",
    contactEyebrow: "Contact",
    contactTitle: "Rester proche du prochain drop.",
    contactIntro: "Inscris-toi pour recevoir les dates de sortie, les précommandes et les premières pièces disponibles.",
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Message",
    contactCta: "Envoyer",
    cartEyebrow: "Panier",
    cartTitle: "Ta sélection",
    cartTotal: "Total",
    checkoutCta: "Commander",
    checkoutNote: "Prototype local : paiement à connecter plus tard.",
    addToCart: "Ajouter",
    viewProduct: "Voir",
    emptyCart: "Ton panier est vide pour le moment.",
    formSuccess: "Message reçu. Pour l'instant il reste local, on connectera l'envoi lors de la publication.",
  },
  en: {
    navHome: "Home",
    navShop: "Shop",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "Drop 01 / Summer 2026",
    heroSubtitle: "Premium streetwear for city heat, salty late afternoons and nights that start early.",
    heroPrimary: "Shop the collection",
    heroSecondary: "Explore the world",
    heroMetaOne: "Paris design",
    heroMetaTwo: "Summer capsule",
    heroMetaThree: "Limited run",
    ticker: "Coastline Studies is now available",
    shopEyebrow: "New collection",
    shopTitle: "Coastline Studies",
    shopIntro: "A complete summer wardrobe: fluid cuts, light textures, silver jewelry and city-ready accessories.",
    filterAll: "All",
    filterTops: "Tops",
    filterBottoms: "Bottoms",
    filterSwim: "Swim",
    filterAccessories: "Accessories",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortPriceAsc: "Price low",
    sortPriceDesc: "Price high",
    lookbookEyebrow: "Summer looks",
    lookbookTitle: "From sand to studio.",
    lookbookText: "Silhouettes made to move from an outdoor afternoon to a city night without changing attitude.",
    lookOneTitle: "Mesh tank, cargo short, silver jewelry",
    lookTwoTitle: "Crochet shirt, nylon pant, leather belt",
    lookThreeTitle: "Terry polo, swim short, technical tote",
    aboutEyebrow: "About",
    aboutTitle: "An island state of mind with city energy.",
    aboutTextOne: "Islander starts with a simple idea: keep the freedom of a holiday inside a silhouette you can wear every day.",
    aboutTextTwo: "The logo pairs a clean wordmark with a minimal I, held between two lines like a horizon and a lagoon.",
    contactEyebrow: "Contact",
    contactTitle: "Stay close to the next drop.",
    contactIntro: "Sign up for release dates, preorders and first access to new pieces.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    contactCta: "Send",
    cartEyebrow: "Cart",
    cartTitle: "Your selection",
    cartTotal: "Total",
    checkoutCta: "Checkout",
    checkoutNote: "Local prototype: payment will be connected later.",
    addToCart: "Add",
    viewProduct: "View",
    emptyCart: "Your cart is empty for now.",
    formSuccess: "Message received. It stays local for now, sending can be connected before publishing.",
  },
};

const state = {
  lang: "fr",
  filter: "all",
  sort: "featured",
  cart: [],
  modalProduct: null,
  selectedSize: null,
};

const formatPrice = (price) => `${price.toLocaleString("fr-FR")} €`;
const t = (key) => copy[state.lang][key] || key;
const getProduct = (id) => products.find((product) => product.id === id);

const productGrid = document.querySelector("[data-products]");
const filters = document.querySelectorAll("[data-filter]");
const sortSelect = document.querySelector("[data-sort]");
const langToggle = document.querySelector("[data-lang-toggle]");
const langCurrent = document.querySelector("[data-lang-current]");
const header = document.querySelector("[data-header]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartCount = document.querySelector("[data-cart-count]");
const scrim = document.querySelector("[data-scrim]");
const quickView = document.querySelector("[data-quick-view]");
const modalVisual = document.querySelector("[data-modal-visual]");
const modalCategory = document.querySelector("[data-modal-category]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDesc = document.querySelector("[data-modal-desc]");
const modalPrice = document.querySelector("[data-modal-price]");
const modalAdd = document.querySelector("[data-modal-add]");
const sizePicker = document.querySelector("[data-size-picker]");

function iconFor(shape, product) {
  const main = product.accent;
  const base = product.wash;
  const dark = product.wash === "#101010" ? "#f4f0e8" : "#101010";
  const common = `fill="${base}" stroke="${dark}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;

  if (shape === "shirt") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M62 59 92 42h36l30 17 26 39-28 18-14-20v80H78V96l-14 20-28-18 26-39Z"/><path fill="${main}" d="M93 45 110 75l17-30v132H93V45Z" opacity=".78"/><path fill="none" stroke="${dark}" stroke-width="3" d="M93 45 110 76l17-31M110 76v100M84 104h17M119 104h17"/></svg>`;
  }
  if (shape === "tank") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M80 45h22c2 17 14 17 16 0h22c-8 35 9 59 21 87l-16 43H75l-16-43c12-28 29-52 21-87Z"/><path fill="${main}" d="M82 93h56l13 40-10 28H79l-10-28 13-40Z" opacity=".52"/><path fill="none" stroke="${dark}" stroke-width="2" opacity=".45" d="M82 111h56M78 128h65M75 145h70"/></svg>`;
  }
  if (shape === "polo") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M67 64 92 44h36l25 20 30 34-25 20-13-17v75H75v-75l-13 17-25-20 30-34Z"/><path fill="${main}" d="M92 44h36l-18 33-18-33Z"/><path fill="none" stroke="${dark}" stroke-width="3" d="M92 44 110 77l18-33M110 77v28"/></svg>`;
  }
  if (shape === "tee") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M64 57 91 43c8 11 30 11 38 0l27 14 31 43-29 18-13-18v77H75v-77l-13 18-29-18 31-43Z"/><circle cx="110" cy="112" r="20" fill="${main}" opacity=".65"/><path fill="none" stroke="${dark}" stroke-width="2" opacity=".38" d="M87 138h46M91 150h38"/></svg>`;
  }
  if (shape === "shorts" || shape === "swim") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M62 61h96l8 100h-47l-9-45-10 45H53L62 61Z"/><path fill="${main}" d="M62 61h96l2 23H60l2-23Z"/><path fill="none" stroke="${dark}" stroke-width="3" d="M110 84v32M72 99h24M124 99h24"/></svg>`;
  }
  if (shape === "pants") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M70 42h80l13 138h-43l-10-86-10 86H57L70 42Z"/><path fill="${main}" d="M70 42h80l4 35H66l4-35Z" opacity=".7"/><path fill="none" stroke="${dark}" stroke-width="3" d="M110 77v105M81 93h18M122 93h18"/></svg>`;
  }
  if (shape === "belt") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path fill="${base}" stroke="${dark}" stroke-width="3" d="M38 102h116a28 28 0 0 1 0 56H38v-24h114a4 4 0 0 0 0-8H38v-24Z"/><rect x="139" y="91" width="48" height="78" rx="16" fill="none" stroke="${main}" stroke-width="10"/><path stroke="${dark}" stroke-width="3" d="M58 113v35M78 113v35M98 113v35"/></svg>`;
  }
  if (shape === "ring") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><circle cx="110" cy="120" r="48" fill="none" stroke="${dark}" stroke-width="17"/><path fill="${main}" stroke="${dark}" stroke-width="3" d="M82 52h56l17 44-45 23-45-23 17-44Z"/><path fill="none" stroke="${dark}" stroke-width="2" d="M90 75h40"/></svg>`;
  }
  if (shape === "necklace") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path fill="none" stroke="${dark}" stroke-width="10" stroke-dasharray="10 12" d="M53 55c12 82 102 82 114 0"/><path fill="${main}" stroke="${dark}" stroke-width="3" d="M96 125h28l9 44H87l9-44Z"/><path stroke="${dark}" stroke-width="4" d="M110 134v24"/></svg>`;
  }
  if (shape === "bracelet") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path fill="none" stroke="${dark}" stroke-width="17" stroke-linecap="round" d="M55 111c16-56 94-56 110 0 13 47-38 78-70 54"/><path fill="${main}" stroke="${dark}" stroke-width="3" d="M84 141h52v26H84z"/><path stroke="${dark}" stroke-width="3" d="M96 141v26M124 141v26"/></svg>`;
  }
  if (shape === "bag") {
    return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M58 75h104l12 106H46L58 75Z"/><path fill="none" stroke="${main}" stroke-width="10" d="M82 79c2-30 54-30 56 0"/><path fill="${main}" d="M78 112h64v36H78z"/><path fill="none" stroke="${dark}" stroke-width="3" d="M91 129h38"/></svg>`;
  }
  return `<svg viewBox="0 0 220 220" role="img" aria-label="${product[state.lang].name}"><path ${common} d="M64 57 91 43c8 11 30 11 38 0l27 14 31 43-29 18-13-18v77H75v-77l-13 18-29-18 31-43Z"/></svg>`;
}

function sortedProducts() {
  const filtered = state.filter === "all" ? [...products] : products.filter((product) => product.category === state.filter);
  if (state.sort === "priceAsc") return filtered.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") return filtered.sort((a, b) => b.price - a.price);
  return filtered;
}

function renderProducts() {
  productGrid.innerHTML = sortedProducts()
    .map((product) => {
      const content = product[state.lang];
      return `
        <article class="product-card reveal is-visible" style="--wash:${product.wash};--accent:${product.accent}">
          <button class="product-art" type="button" data-view="${product.id}" aria-label="${t("viewProduct")} ${content.name}">
            ${iconFor(product.shape, product)}
          </button>
          <div class="product-info">
            <div class="product-topline">
              <h3>${content.name}</h3>
              <span class="price">${formatPrice(product.price)}</span>
            </div>
            <p>${content.desc}</p>
            <div class="product-actions">
              <button class="button ghost" type="button" data-view="${product.id}">${t("viewProduct")}</button>
              <button class="button primary" type="button" data-add="${product.id}">${t("addToCart")}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!copy[state.lang][key]) return;
    if (node.tagName === "OPTION") {
      node.textContent = copy[state.lang][key];
    } else {
      node.textContent = copy[state.lang][key];
    }
  });
  langCurrent.textContent = state.lang.toUpperCase();
  renderProducts();
  renderCart();
  if (state.modalProduct) openQuickView(state.modalProduct.id, false);
}

function addToCart(productId, size) {
  const product = getProduct(productId);
  const chosenSize = size || product.sizes[0];
  const line = state.cart.find((item) => item.id === productId && item.size === chosenSize);
  if (line) {
    line.qty += 1;
  } else {
    state.cart.push({ id: productId, size: chosenSize, qty: 1 });
  }
  renderCart();
  openCart();
}

function renderCart() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
  cartCount.textContent = totalItems;
  cartTotal.textContent = formatPrice(totalPrice);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="cart-empty">${t("emptyCart")}</p>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = getProduct(item.id);
      const content = product[state.lang];
      return `
        <article class="cart-line" style="--wash:${product.wash};--accent:${product.accent}">
          <div class="cart-thumb">${iconFor(product.shape, product)}</div>
          <div class="cart-line-info">
            <h3>${content.name}</h3>
            <p>${item.size} / ${formatPrice(product.price)}</p>
          </div>
          <div class="qty-controls" aria-label="${content.name}">
            <button type="button" data-qty="${item.id}" data-size="${item.size}" data-change="-1">-</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="${item.id}" data-size="${item.size}" data-change="1">+</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateQuantity(productId, size, change) {
  const line = state.cart.find((item) => item.id === productId && item.size === size);
  if (!line) return;
  line.qty += change;
  if (line.qty <= 0) {
    state.cart = state.cart.filter((item) => !(item.id === productId && item.size === size));
  }
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  scrim.classList.add("is-active");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  scrim.classList.remove("is-active");
}

function openQuickView(productId, show = true) {
  const product = getProduct(productId);
  state.modalProduct = product;
  state.selectedSize = state.selectedSize && product.sizes.includes(state.selectedSize) ? state.selectedSize : product.sizes[0];

  modalVisual.style.setProperty("--wash", product.wash);
  modalVisual.style.setProperty("--accent", product.accent);
  modalVisual.innerHTML = iconFor(product.shape, product);
  modalCategory.textContent = product[state.lang].category;
  modalTitle.textContent = product[state.lang].name;
  modalDesc.textContent = product[state.lang].desc;
  modalPrice.textContent = formatPrice(product.price);
  sizePicker.innerHTML = product.sizes
    .map((size) => `<button class="${size === state.selectedSize ? "active" : ""}" type="button" data-size-choice="${size}">${size}</button>`)
    .join("");
  if (show && !quickView.open) quickView.showModal();
}

function closeQuickView() {
  quickView.close();
  state.modalProduct = null;
  state.selectedSize = null;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const viewButton = event.target.closest("[data-view]");
  const qtyButton = event.target.closest("[data-qty]");
  const sizeButton = event.target.closest("[data-size-choice]");

  if (addButton) addToCart(addButton.dataset.add);
  if (viewButton) openQuickView(viewButton.dataset.view);
  if (qtyButton) updateQuantity(qtyButton.dataset.qty, qtyButton.dataset.size, Number(qtyButton.dataset.change));
  if (sizeButton) {
    state.selectedSize = sizeButton.dataset.sizeChoice;
    sizePicker.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button === sizeButton));
  }
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-selected", String(active));
    });
    renderProducts();
  });
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

langToggle.addEventListener("click", () => {
  state.lang = state.lang === "fr" ? "en" : "fr";
  applyLanguage();
});

document.querySelector("[data-cart-open]").addEventListener("click", openCart);
document.querySelector("[data-cart-close]").addEventListener("click", closeCart);
scrim.addEventListener("click", closeCart);
document.querySelector("[data-modal-close]").addEventListener("click", closeQuickView);

modalAdd.addEventListener("click", () => {
  if (!state.modalProduct) return;
  addToCart(state.modalProduct.id, state.selectedSize);
  closeQuickView();
});

quickView.addEventListener("click", (event) => {
  const rect = quickView.getBoundingClientRect();
  const outside =
    event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeQuickView();
});

document.querySelector("[data-contact-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector("[data-form-status]").textContent = t("formSuccess");
});

document.querySelector("[data-checkout]").addEventListener("click", () => {
  document.querySelector("[data-form-status]").textContent = state.lang === "fr"
    ? "Le paiement sera ajouté quand on passera le site en ligne."
    : "Payment will be added when the site goes online.";
  closeCart();
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
});

window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  document.documentElement.style.setProperty("--hero-x", `${x}px`);
  document.documentElement.style.setProperty("--hero-y", `${y}px`);
});

applyLanguage();
