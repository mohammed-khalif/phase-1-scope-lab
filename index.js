var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "jane";

function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a constant variable
  leastFavoriteCustomer = "jim";
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};
