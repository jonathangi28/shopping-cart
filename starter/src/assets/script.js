/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

// Setup 3 object products.
const product1 = {
  name: 'Product1',
  price: 8.88,
  quantity: 0,
  productId: 1001,
  image: 'images/cherry.jpg'
};

const product2 = {
  name: 'Product2',
  price: 9.99,
  quantity: 0,
  productId: 1002,
  image: 'images/orange.jpg'
};

const product3 = {
  name: 'Product3',
  price: 10.10,
  quantity: 0,
  productId: 1003,
  image: 'images/strawberry.jpg'
};

// Add product objects to products array.
products.push(product1, product2, product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/**
* @description Adds a product to the cart and increments the quantity.
* @param {string} productId - The productId from the product object.
*/
function addProductToCart(productId) {
  let product = products.find(item => item.productId === productId );

  if (product != undefined) {
    // Check if product is already in cart.
    let inCart = cart.find(item => item.productId === productId);

    // If product is not in cart, add it.
    if (inCart === undefined) {
      product.quantity += 1;
      cart.push(product);
    }
    // Product is already in cart, increase quantity.
    else {
      product.quantity += 1;
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/**
* @description Increments the quantity of the product.
* @param {string} productId - The productId from the product object.
*/
function increaseQuantity(productId) {
  switch (productId) {
    case 1001:
      product1.quantity += 1;
    break;
    case 1002:
      product2.quantity += 1;
    break;
    case 1003:
      product3.quantity += 1;
    break;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/**
* @description Decreases the quantity from the product. If quantity equals 0 we remove from our cart array.
* @param {string} productId - The productId from the product object.
*/
function decreaseQuantity(productId) {
  switch (productId) {
    case 1001:
      if (product1.quantity <= 1) { removeProductFromCart(productId); }
      else { product1.quantity -= 1; }
    break;
    case 1002:
      if (product2.quantity <= 1) { removeProductFromCart(productId); }
      else { product2.quantity -= 1; }
    break;
    case 1003:
      if (product3.quantity <= 1) { removeProductFromCart(productId); }
      else { product3.quantity -= 1; }
    break;
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/**
* @description Removes the product from the cart.
* @param {string} productId - The productId from the product object.
*/
function removeProductFromCart(productId) {
  cart.forEach(function(item) {
    if (item.productId === productId) {
      item.quantity = 0;
      cart.splice(cart.indexOf(item), 1);
    }
  });
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
// Calculate the total cost of the products in the cart.

/**
* @description Adds a product to the cart and increments the quantity.
* @returns {number} - The total cost of the products in the cart.
*/
function cartTotal() {
  let totalCost = 0;

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].quantity * cart[i].price;

    totalCost += itemTotal;
  }

  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

/**
* @description Removes and zeros out cart and quantity numbers.
*/
function emptyCart() {
  cart.forEach(function(item) {
    item.quantity = 0;
  });

  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart
*/

// Global variable used to handle the total amount paid by the customer.
let totalPaid = 0;

/**
* @description Calculates the amount of change to give back to the customer.
* @param {number} amount - The amount paid by the customer.
* @returns {number} - The amount of change to give back to the customer.
*/
function pay(amount) {
  totalPaid += amount;

  return (cartTotal() - totalPaid);
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests.
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay,
   emptyCart
   /* Uncomment the following line if completing the currency converter bonus */
   //currency
};
