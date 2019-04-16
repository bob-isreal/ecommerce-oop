const db = require("./database");

function User(name, email, password) {
  //May The Code Be With You In Jesus Name

  this.name = name;
  this.email = email;
  this.password = password;
}

function Admin(name, email, password) {
  //May The Code Be With You In Jesus Name

  User.call(this, name, email, password);
}

module.exports = {
  User,
  Admin
};
