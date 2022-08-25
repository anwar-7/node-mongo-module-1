const { errorHandler, two } = require('./errorHandler.js');

async function getData() {
  try {
    // undefined.find();
    two();
    const emailError = new Error(`Email already exists`);
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
}

getData();

console.log(`hello...`);
