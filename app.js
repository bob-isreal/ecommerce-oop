"use strict";
//May The Code Be With You In Jesus Name
//May The Code Be With You In Jesus Name
const db = require("./database");

function User(name, email, password) {
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
        return false;
    }
    if (id.toString() !== this.id) {
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
            return db.users[user];
        }
    }
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
};
//Admin Functions
function Admin(name, email, password) {
    User.call(this, name, email, password);
}
Admin.prototype = Object.create(User.prototype, {
    constructor: { value: Admin }
});

Admin.prototype.readAllUser = function() {
    return db.users;
};

Admin.prototype.readAllOrder = function() {
    return db.order;
};
Admin.prototype.readSingleOrder = function(id) {
    return db.order[id.toString()];
};
User.prototype.updateSingleOrder = function(id, product) {
    if (!id || !product) {
        return false;
    }

    db.order[id.toString()].products = product;

    return true;
};
Admin.prototype.deleteAnOrder = function(id) {
    delete db.order[id.toString()];
};
Admin.prototype.deleteAUser = function(id) {
    delete db.users[id.toString()];
};

Admin.prototype.deleteAllUser = function() {
    db.users = {};
};
module.exports = {
    User,
    Admin
};
