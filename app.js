const db = require("./database");

function User(name, email, password) {
  //May The Code Be With You In Jesus Name

  this.name = name;
  this.email = email;
  this.password = password;

  if (this.constructor == User) {
    for (var i = 1; i >= 0; ) {
      if (!db.users[i + ""]) {
        db.users[i + ""] = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        break;
      }
      i++;
    }
  }
  if (this.constructor == Admin) {
    for (var i = 1; i >= 0; ) {
      if (!db.admin[i + ""]) {
        db.admin[i + ""] = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        break;
      }
      i++;
    }
  }
}

function Admin(name, email, password) {
  //May The Code Be With You In Jesus Name

  User.call(this, name, email, password);
}

module.exports = {
  User,
  Admin
};
