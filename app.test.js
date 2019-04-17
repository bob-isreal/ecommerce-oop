const { User } = require("./app");
const { Admin } = require("./app");
const db = require("./database");

test('Should Create New User with corresponding name "Shalom" ', function() {
  var Shalom = new User("Shalom", "shalom@gmail.com", 12345);
  expect(Shalom.name).toBe("Shalom");
});

test('Should Create New User with corresponding email "shalom@gmail.com" ', function() {
  var Dickson = new User("Dickson", "dickson@gmail.com", 12345);
  expect(Dickson.email).toBe("dickson@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  var Uchenna = new User("Uchenna", "shalom@gmail.com", 12345);
  expect(Uchenna.password).toBe(12345);
});

test('Should Create New Admin with corresponding name "Adedayo" ', function() {
  var Adedayo = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(Adedayo.name).toBe("Adedayo");
});

test('Should Create New Admin with corresponding email "samfeolu@gmail.com" ', function() {
  var sampleAdmin = new Admin("Adedunye", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.email).toBe("samfeolu@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  var sampleAdmin1 = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin1.password).toBe(1234);
});

test("Should Add First User Into The DataBase WIth Name Shalom", function() {
  expect(db.users["1"].name).toBe("Shalom");
});

test("Should Add Second User Into The DataBase With Name Dickson", function() {
  expect(db.users["2"].name).toBe("Dickson");
});

test("Should Add First User Into The DataBase WIth email 'shalom@gmail.com'", function() {
  expect(db.users["1"].email).toBe("shalom@gmail.com");
});

test("Should Add Second User Into The DataBase With email 'dickson@gmail.com'", function() {
  expect(db.users["2"].email).toBe("dickson@gmail.com");
});

test("Should Add First Admin Into The DataBase WIth Name Adedayo", function() {
  expect(db.admin["1"].name).toBe("Adedayo");
});

test("Should Add Second Admin Into The DataBase With Name Adedunye", function() {
  expect(db.admin["2"].name).toBe("Adedunye");
});

test("Should Add First Admin Into The DataBase WIth email 'samfeolu@gmail.com'", function() {
  expect(db.admin["1"].email).toBe("samfeolu@gmail.com");
});

test("Should Add Second User Into The DataBase With email 'samfeolu@gmail.com'", function() {
  console.log(db);

  expect(db.admin["2"].email).toBe("samfeolu@gmail.com");
});
