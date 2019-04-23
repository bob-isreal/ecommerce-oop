"use strict";
//May The Code Be With You In Jesus Name
//May The Code Be With You In Jesus Name
const db = require("./database");

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
//Admin Functions
function Admin(name, email, password) {
    User.call(this, name, email, password);
}
Admin.prototype = Object.create(User.prototype, {
    constructor: { value: Admin }
});

Admin.prototype.readAllUser = function() {
    console.log(db.users);
    return db.users;
};

Admin.prototype.readAllOrder = function() {
    console.log(db.order);
    return db.order;
};
Admin.prototype.readSingleOrder = function(id) {
    console.log(db.order[id.toString()]);
    return db.order[id.toString()];
};
Admin.prototype.updateSingleOrder = function(id, product) {
    if (!id || !product) {
        console.log(false);
        return false;
    }

    db.order[id.toString()].products = product;
    console.log(true);
    return true;
};
Admin.prototype.deleteAnOrder = function(id) {
    delete db.order[id.toString()];
    console.log(db.order);
};
Admin.prototype.deleteAUser = function(id) {
    delete db.users[id.toString()];
    console.log(db.users);
};
Admin.prototype.deleteAllOrder = function() {
    db.order = {};
    console.log(db.order);
};
Admin.prototype.deleteAllUser = function() {
    db.users = {};
    console.log(db.users);
};
module.exports = {
    User,
    Admin
};

var Shalom = new User("Shalom", "shalom@gmail.com", 12345);
var Dickson = new User("Dickson", "dickson@gmail.com", 12345);
var Uchenna = new User("Uchenna", "shalom@gmail.com", 12345);
var Adedayo = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
var sampleAdmin = new Admin("Adedunye", "samfeolu@gmail.com", 1234);
var sampleAdmin1 = new Admin("Adedayo", "samfeolu@gmail.com", 1234);

Dickson.readSingleUser(2);
Adedayo.updateSingleUser(4, "Bobby", "bobade@gmail.com", 1234);
Adedayo.searchByName("Adedayo");
Adedayo.searchByName("uchenna");
Adedayo.readAllUser();
Dickson.createOrder([]);
Uchenna.createOrder(["Bread", "Beans", "Ram"]);
Adedayo.readSingleOrder(1);
Adedayo.updateSingleOrder("1", ["cream", "soap", "toothbrush", "hair-brush"]);
Adedayo.readAllOrder();
Adedayo.deleteAnOrder(1);
Adedayo.deleteAllOrder();
Adedayo.deleteAUser(1);
Adedayo.readSingleUser(1); //should be undefined
Adedayo.deleteAllUser();
