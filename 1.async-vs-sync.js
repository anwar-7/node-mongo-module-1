console.log('Welcome to ACC.');

// example of a callback hell
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
