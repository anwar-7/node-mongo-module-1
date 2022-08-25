/*
 console.log('Welcome to ACC.');

// example 1 of a callback hell
setTimeout(() => {
  console.log("I'm excited to teach.", 1);

  const user = { id: 1 };

  setTimeout(() => {
    const products = [{}, {}, {}];
    console.log(products);

    setTimeout(() => {
      const price = [];
      console.log(price);
    }, 1000);
  }, 500);
}, 1000);

console.log('Hope you are also excited.');
 */

/* 
const processOrder = (customer) => {
  console.log(`processing order for customer 1`);

  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());

  console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`complete order for customer 1`);
 */

/* 
const processOrder = (customer) => {
  console.log(`processing order for customer 1`);

  setTimeout(() => {
    console.log(`cooking done...`);
  }, 1000);

  console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`complete order for customer 1`);
 */

/* 
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking completed`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder('customer 1', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
console.log(`Hello`);
*/

// example of callback, async - sync, callback hell ---->
/* 
const takeOrder = (customer, callback) => {
  console.log(`Take order from ${customer}`);
  callback(customer);
};

const processedOrder = (customer, callback) => {
  console.log(`processing for ${customer}`);

  setTimeout(() => {
    console.log(`cooking order...`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder('customer 1', (customer) => {
  processedOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

console.log(`hello... Please take order`);
 */
