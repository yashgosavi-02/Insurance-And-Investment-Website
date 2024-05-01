const mongoose = require("mongoose");

//Connecting Database
mongoose.connect();

//User Schema

const UserSchema = mongoose.Schema({
  Username: String,
  Password: String,
});

//Admin Schema

const AdminSchema = mongoose.Schema({ Username: String, Password: String });

//Model

const User = mongoose.model("User", UserSchema);
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = {
  User,
  Admin,
};
