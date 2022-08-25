console.log(module);
// module export and import example
// we use This errorHandler.js as a export file
// and 4.Error.js as import file

function errorHandler(error) {
  const { name, message, stack } = error;

  console.log(name, message);
  // logger.error({
  //   name,
  //   message,
  //   stack,
  // });
  // console.log(`Internal server error`);
}

function two() {
  console.log(`I am Groot..!`);
}

// default export ----->
// module.exports = errorHandler;

//  named export ----->
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// object export ----->
// module.exports = {
//   errorHandler,
//   two,
// };

// functional export ---->
// module.exports.errorHandler = function errorHandler(error) {
//     const { name, message, stack } = error;

//     console.log(name, message);
//     // logger.error({
//     //   name,
//     //   message,
//     //   stack,
//     // });
//     // console.log(`Internal server error`);
//   };

//   module.exports.two = function two() {
//     console.log(`I am Groot..!`);
//   };
