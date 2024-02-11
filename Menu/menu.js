let cartItems = [];
let totalAmount = 0;
let cartVisible = false;

function showMenu(menuId) {
  // Hide all menu sections
  const menuSections = document.querySelectorAll('.menu-section');
  menuSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected menu section
  const selectedMenu = document.getElementById(menuId);
  selectedMenu.style.display = 'block';
}

function toggleCart() {
  const cartContent = document.getElementById('cart-content');
  cartVisible = !cartVisible;

  if (cartVisible) {
    cartContent.style.display = 'block';
  } else {
    cartContent.style.display = 'none';
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function addToCart(itemName, itemPrice) {
  const existingItem = cartItems.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name: itemName, price: itemPrice, quantity: 1, selected: false });
  }

  updateCart();
  updateCartNotification();
  //updateMenuCheckboxes();
}

function removeItem(index) {
  const item = cartItems[index];
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cartItems.splice(index, 1);
  }

  updateCart();
  updateCartNotification();
  //updateMenuCheckboxes();
}

function toggleSelection(index) {
  cartItems[index].selected = !cartItems[index].selected;
  updateCart();
  //updateMenuCheckboxes();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  totalAmount = 0;

  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${item.name} - ₹${item.price.toFixed(2)}</span>
      <div>
        <button onclick="removeItem(${index})">-</button>
        <span>${item.quantity}</span>
        <button onclick="addToCart('${item.name}', ${item.price})">+</button>
      </div>
    `;

    listItem.addEventListener('click', stopPropagation);

    cartList.appendChild(listItem);
    totalAmount += item.price * item.quantity;
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = totalAmount.toFixed(2);
}

function updateCartNotification() {
  const cartNotification = document.getElementById('cart-notification');
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartNotification.textContent = itemCount;
}

// function updateMenuCheckboxes() {
//   const menuItems = document.querySelectorAll('.menu-item');

//   menuItems.forEach(menuItem => {
//     const itemName = menuItem.dataset.itemname;
//     const matchingCartItem = cartItems.find(item => item.name === itemName);

//     if (matchingCartItem) {
//       menuItem.classList.toggle('selected', matchingCartItem.selected);
//     }
//   });
// }

function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
  } else {
    alert(`Order placed! Thank you for choosing RestroRelish.\nTotal: ₹${totalAmount.toFixed(2)}`);
    cartItems = [];
    updateCart();
    updateCartNotification();
    toggleCart();
  }
}

