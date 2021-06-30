const mongoose = require("mongoose");

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// connect to db
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// import model
const Customer = require("./models/customer");

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    //db.close();
  });
};

// Find Customer
const findCustomer = (name) => {
  //Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      //db.close();
    }
  );
};

// update customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer).then((customer) => {
    console.info("Customer Updated");
  });
};

// remove customer
const removeCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("Customer Removed");
  });
};

// list customer
const listCustomer = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
  });
};

// export all methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
};
