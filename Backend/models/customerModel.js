const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  id: String,
  name: String,
  type: String,
  email: String,
  phone: String,
  address: String,
});

//model
const Customers = mongoose.model("Customers", CustomerSchema);

module.exports = Customers;

// name: {
//   type: String,
//   required: true,
//   validate: {
//     validator: function(text) {
//        return text.length > 0
//     }
//     messages:"Empty string is not a valid"
// }
