const db = require("./database");
const { Admin } = require("./admin");

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.constructor == User
        ? (this.type = "User")
        : this.constructor == Admin
        ? (this.type = "Admin")
        : this.type == "Error";
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
    console.log(db.users[id.toString()]);
    return db.users[id.toString()];
};
User.prototype.updateSingleUser = function(id, name, email, password) {
    if (!id || !name || !email || !password) {
        console.log(false);
        return false;
    }
    if (id.toString() !== this.id) {
        console.log(false);
        return false;
    }
    db.users[id.toString()].name = name;
    db.users[id.toString()].email = email;
    db.users[id.toString()].password = password;

    return true;
};
User.prototype.searchByName = function(name) {
    for (var user in db.users) {
        if (db.users[user].name == name) {
            console.log(db.users[user]);
            return db.users[user];
        }
    }
    console.log(false);
    return false;
};

User.prototype.createOrder = function(products) {
    var bob = new Date();
    for (var i = 1; i >= 0; ) {
        if (!db.order[i + ""]) {
            var id = i + "";
            db.order[id] = {
                products: products,
                timeOfOrder: bob.getUTCHours() + ":" + bob.getMinutes(),
                dateOfOrder:
                    bob.getFullYear() +
                    " " +
                    (bob.getMonth() + 1) +
                    " " +
                    bob.getDate(),
                id: id,
                userId: this.id
            };

            break;
        }
        i++;
    }
    console.log(db.order);
};

module.exports = {
    User
};
