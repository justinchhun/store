let cart = []; // array to store items in cart
   
const checkoutBtn = document.getElementById('checkout-button');
const removeBtn = document.getElementById('remove-all-button');

document.getElementById("remove-all-button").addEventListener("click", removeAllItems);

function AddItem(id, price) {
    // find the name of the item using the id
    let itemName = document.getElementById(id).textContent;
    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        // add item to cart
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
  
    // update cart display
    UpdateCartDisplay();
  
    // show alert message
    alert(itemName + " added to cart!");
}

function RemoveItem(index) {
  // decrease the quantity of the item at the given index
  let item = cart[index];
  item.quantity--;
  
  // remove the item from the cart array if the quantity is zero
  if (item.quantity === 0) {
    cart.splice(index, 1);
  }
  
  UpdateCartDisplay();
}
function isCartEmpty() {
    // Check if cart is empty
    // Return true if cart is empty, false otherwise
    if (cartItems.length === 0) {
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
    }
}

function removeAllItems() {
    // Clear the cart array
    cart = [];
    
    // Update the cart display
    var cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    var cartTotal = document.getElementById("cart-total");
    cartTotal.innerHTML = "0";
    
     // Clear the total item count
    let totalItems = document.getElementById("total-items");
    totalItems.innerHTML = "0";
    
    // Disable checkout button
    var checkoutBtn = document.getElementById("checkout-button");
    checkoutBtn.disabled = true;
}

function UpdateQuantity(index, newQuantity) {
    // update the quantity of the item at the given index
    cart[index].quantity = parseInt(newQuantity);
    
    UpdateCartDisplay();
  }

function UpdateCartDisplay() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let totalItems = document.getElementById("total-items");
    let total = 0;
  
    // clear existing cart items
    cartItems.innerHTML = "";
  
    // add new cart items
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price} x <input type="number" value="${item.quantity}" min="1" max="20" onchange="UpdateQuantity(${i}, this.value)"> = $${(item.price * item.quantity).toFixed(2)} <button onclick="RemoveItem(${i})">Remove</button>`;
      cartItems.appendChild(li);
      total += item.price * item.quantity;
    }
  
    
    // update total and total items
    cartTotal.innerHTML = `${total.toFixed(2)}`;
    totalItems.innerHTML = `${cart.reduce((acc, curr) => acc + curr.quantity, 0)}`;
  
    if (cart.length === 0) {
      checkoutBtn.disabled = true;
      checkoutBtn.classList.remove("active");
    } else {
      checkoutBtn.disabled = false;
      checkoutBtn.classList.add("active");
    }
  }


  


  