/* Abstract:
*
* Write method definitions to manage Cafe.
*
* Product defines a product with its name, price and number of items in stock
* A cafe is initialized with an array of products, array of instances of customerProducts class, and balance amount
* A customer with a customer_id can buy things if it's available in the Cafe.
*
* The stock should be reduced based on the buy request
* Cafe balance amount should be updated
* Customer history is maintained
*
* A customer with a customer_id can return things if he/she has bought before
*
* Check in the customer_products, if he/she has bought before
* If yes, reduce or remove accordingly
* Increase the stock
* Update the balance
*/

/*
 * buyProduct makes a purchase in the cafe, and does the following:
 * 1. Reduces the stock of a product based on the buy request
 * 2. Updates the cafe balance based on the buy request
 * 3. Creates and add the customerProducts instance to the customer_products of Cafe class
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be purchased
 * @return {boolean} 
 *
 * The method should return true if the purchase is successful, and false in the following cases:
 * 1. Product is not available in Cafe
 * 2. The quantity to be puchased is more than the current stock of a product
*/

/*
 * returnProduct makes a return of a purchase in the cafe, and does the following:
 * 1. Updates the stock of a particular product based on the return request
 * 2. Updates the cafe balance based on the return request
 * 3. Updates or deletes the customerProducts instance to the customer_products of Cafe class (delete in case of a full return)
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be returned
 * @return {boolean} 
 *
 * The method should return true if the return is successful, and false in the following cases:
 * 1. No such purchase was made from the Cafe
 * 2. The quantity to be returned is more than the quantity purchased
*/

/*
 * getCurrentBalance return the current balance of the Cafe
*/


class Product {
 
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  
  }
  
  class customerProducts {
  
    constructor(customer_id, product, count) {
      this.customer_id = customer_id;
      this.product = product;
      this.count = count;
    }
  
  }
  
  class Cafe {
  
    constructor(products, balance) {
      this.products = products;
      this.balance = balance;
      //Maintain the customer history
      this.customer_products = [];
    }
  
  
    buyProduct(customer_id, product, count){
  
      // Add your code here
      const cafeProduct = this.products.find((p) => {
        return p.name === product.name;
      });

      if (!cafeProduct) {
        return false;
      }

      if (count > cafeProduct.stock) {
        return false;
      }

      cafeProduct.stock -= count;
      this.balance += product.price * count;

      let customerProduct = this.customer_products.find((cp) => {
        return cp.customer_id === customer_id && cp.product_name === product.name;
      });

      if (customerProduct) {
        customerProduct.count += count;
      } else {
        this.customer_products.push(new customerProduct(customer_id, product, count));
      }
      return true;
  
    }
  
  
    returnProduct(customer_id, product, count){
     
      // Add your code here
      const customerProductIndex = this.customer_products.findIndex((cp) => {
        return cp.customer_id === customer_id && cp.product_name === product_name;
      });
      if (customerProductIndex === -1) {
        return false;
      }
      const customerProduct = this.customer_products[customerProductIndex];
      if (count > customerProduct.count) {
        return false;
      }
      const cafeProduct = this.products.find((p) => {
        return p.name === product.name;
      });
      if (!cafeProduct) {
        return false;
      }
      cafeProduct.stock += count;
      this.balance -= product.price * count;
      customerProduct.count -= count;

      if (customerProduct.count === 0) {
        this.customer_products.splice(customerProductIndex, 1);
      }
      return true;
    }
  
  
    getCurrentBalance(){
  
      // get the current balance at cafe
      return this.balance;
    }
  
  }