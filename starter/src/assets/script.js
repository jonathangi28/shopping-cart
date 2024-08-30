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
const product1 = {
  name: 'Product1',
  price: 8.88,
  quantity: 0,
  productId: 888,
  image: 'images/cherry.jpg'
};

const product2 = {
  name: 'Product2',
  price: 9.99,
  quantity: 0,
  productId: 999,
  image: 'images/orange.jpg'
};

const product3 = {
  name: 'Product3',
  price: 10.10,
  quantity: 0,
  productId: 1010,
  image: 'images/strawberry.jpg'
};

products.push(product1, product2, product3); // Add product objects to products array.
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
function addProductToCart(productId) {
  if (productId === 888) {
    // Check if product is already in cart.
    if (cart.indexOf(product1) !== -1) {
      product1.quantity += 1;
    } else {
      product1.quantity += 1;
      cart.push(product1);
    }
  }
  else if (productId === 999) {
    if (cart.indexOf(product2) !== -1) {
      product2.quantity += 1;
    } else {
      product2.quantity += 1;
      cart.push(product2);
    }
  }
  else if (productId === 1010) {
    if (cart.indexOf(product3) !== -1) {
      product3.quantity += 1;
    } else {
      product3.quantity += 1;
      cart.push(product3);
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  switch (productId) {
    case 888:
      product1.quantity += 1;
    break;
    case 999:
      product2.quantity += 1;
    break;
    case 1010:
      product3.quantity += 1;
    break;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  switch (productId) {
    case 888:
      if (product1.quantity <= 1) { removeProductFromCart(productId); }
      else { product1.quantity -= 1; }
    break;
    case 999:
      if (product2.quantity <= 1) { removeProductFromCart(productId); }
      else { product2.quantity -= 1; }
    break;
    case 1010:
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
function cartTotal() {
  let totalCost = 0;

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].quantity * cart[i].price;

    totalCost += itemTotal;
  }

  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */
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
function pay(amount) {

  const total = cartTotal();

  if (amount < total) {
    return (total - amount);
  }
  else {
    return (amount - total);
  }
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
