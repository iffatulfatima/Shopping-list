// Retrieve the shopping list from local storage or create a new one
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Display the shopping list items
function displayShoppingList() {
  const shoppingListElement = document.getElementById('shopping-list');
  shoppingListElement.innerHTML = '';
  shoppingList.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}</span>
      <button onclick="markAsPurchased(${index})">Purchased</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    if (item.purchased) {
      li.classList.add('purchased');
    }
    shoppingListElement.appendChild(li);
  });
}

// Add a new item to the shopping list
function addItem() {
  const itemInput = document.getElementById('item');
  const itemName = itemInput.value.trim();
  if (itemName !== '') {
    shoppingList.push({ name: itemName, purchased: false });
    saveShoppingList();
    displayShoppingList();
    itemInput.value = '';
  }
}

// Mark an item as purchased
function markAsPurchased(index) {
  shoppingList[index].purchased = true;
  saveShoppingList();
  displayShoppingList();
}

// Delete an item from the shopping list
function deleteItem(index) {
  shoppingList.splice(index, 1);
  saveShoppingList();
  displayShoppingList();
}

// Save the shopping list to local storage
function saveShoppingList() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Display the initial shopping list
displayShoppingList();

      // Calculate and display total
      const totalElement = document.getElementById('total');
      let total = parseFloat(totalElement.textContent);
      total += quantityValue * priceValue;
      totalElement.textContent = total.toFixed(2);
  