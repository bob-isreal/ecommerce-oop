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
      db.users[i + ""] = {
        name: this.name,
        email: this.email,
        password: this.password,
        type: this.type
      };

      this.id = i + "";
      break;
    }
    i++;
  }

  console.log(this);
}
User.prototype.readSingleUser = function(id) {
  return db.users[id.toString()];
};
function Admin(name, email, password) {
  //May The Code Be With You In Jesus Name

  User.call(this, name, email, password);
}

module.exports = {
  User,
  Admin
};
