const db = require("./database");
const { User } = require("./user");

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
    Admin
};
