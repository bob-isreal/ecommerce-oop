"use strict";
const db = require("./database");

function User(name, email, password) {
  //May The Code Be With You In Jesus Name

  this.name = name;
  this.email = email;
  this.password = password;
  if (this.constructor == User) {
    this.type = "User";
  } else if (this.constructor == Admin) {
    this.type = "Admin";
  }
  for (var i = 1; i >= 0; ) {
    if (!db.users[i + ""]) {
      this.id = i + "";
      db.users[i + ""] = {
        name: this.name,
        email: this.email,
        password: this.password,
        type: this.type,
        id: this.id
      };

      break;
    }
    i++;
  }

  console.log(this);
}
User.prototype.readSingleUser = function(id) {
  return db.users[id.toString()];
};
User.prototype.updateSingleUser = function(id, name, email, password) {
  if (!id || !name || !email || !password) {
    throw new Error("Please Input all Parameters");
  }
  db.users[id.toString()].name = name;
  db.users[id.toString()].email = email;
  db.users[id.toString()].password = password;
};
function Admin(name, email, password) {
  //May The Code Be With You In Jesus Name

  User.call(this, name, email, password);
}
Admin.prototype = Object.create(User.prototype, {
  constructor: { value: Admin }
});
module.exports = {
  User,
  Admin
};
