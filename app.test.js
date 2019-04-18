const { User } = require("./app");
const { Admin } = require("./app");
const db = require("./database");
var Shalom = new User("Shalom", "shalom@gmail.com", 12345);
var Dickson = new User("Dickson", "dickson@gmail.com", 12345);
var Uchenna = new User("Uchenna", "shalom@gmail.com", 12345);
var Adedayo = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
var sampleAdmin = new Admin("Adedunye", "samfeolu@gmail.com", 1234);
var sampleAdmin1 = new Admin("Adedayo", "samfeolu@gmail.com", 1234);

test('Should Create New User with corresponding name "Shalom" ', function() {
  expect(Shalom.name).toBe("Shalom");
});

test('Should Create New User with corresponding email "shalom@gmail.com" ', function() {
  expect(Dickson.email).toBe("dickson@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  expect(Uchenna.password).toBe(12345);
});

test('Should Create New Admin with corresponding name "Adedayo" ', function() {
  expect(Adedayo.name).toBe("Adedayo");
});

test('Should Create New Admin with corresponding email "samfeolu@gmail.com" ', function() {
  expect(sampleAdmin.email).toBe("samfeolu@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
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
  expect(db.users["4"].name).toBe("Adedayo");
});

test("Should Add Second Admin Into The DataBase With Name Adedunye", function() {
  expect(db.users["5"].name).toBe("Adedunye");
});

test("Should Add First Admin Into The DataBase WIth email 'samfeolu@gmail.com'", function() {
  expect(db.users["4"].email).toBe("samfeolu@gmail.com");
});

test("Should Add Second User Into The DataBase With email 'samfeolu@gmail.com'", function() {
  expect(db.users["5"].email).toBe("samfeolu@gmail.com");
});

test("Check For The Type Of User In The Database should return 'Admin' ", function() {
  expect(db.users["5"].type).toBe("Admin");
});

test("Check For The Type Of User In The Database should return 'Admin' ", function() {
  expect(db.users["6"].type).toBe("Admin");
});

test("Check For The Type Of User In The Database should return 'User' ", function() {
  expect(db.users["1"].type).toBe("User");
});

test("Check For The Type Of User In The Database should return 'User' ", function() {
  expect(db.users["3"].type).toBe("User");
});

test("Check For The Type Of User In The Shalom Object should return 'User' ", function() {
  expect(Shalom.type).toBe("User");
});

test("Check For The Type Of User In The Uchenna Object should return 'User' ", function() {
  expect(Uchenna.type).toBe("User");
});

test("Check For The Type Of User In The sampleAdmin Object should return 'Admin' ", function() {
  expect(sampleAdmin.type).toBe("Admin");
});

test("Check For The Type Of User In The sampleAdmin1 Object should return 'Admin' ", function() {
  console.log(db);
  expect(sampleAdmin1.type).toBe("Admin");
});

test("Read User By Id From a User Should Return Dickson Object", function() {
  expect(Dickson.readSingleUser(2)).toEqual(Dickson);
});

test("Read User By Id From a User Should Return Dickson Object", function() {
  expect(Uchenna.readSingleUser(1)).toEqual(Shalom);
});

test("Read User By Id From An Admin Should Return Dickson Object", function() {
  expect(Adedayo.readSingleUser(1)).toEqual(Shalom);
});

test("Update Single User should only work for self", function() {
  expect(
    Adedayo.updateSingleUser(1, "Bobby", "bobade@gmail.com", 1234)
  ).toBeFalsy();
});

test("Update Single User should not work for others and should not affect database", function() {
  expect(db.users["1"].email).toBe("shalom@gmail.com");
});

test("Update Single User should update user details", function() {
  expect(
    Adedayo.updateSingleUser(4, "Bobby", "bobade@gmail.com", 1234)
  ).toBeTruthy();
});

test("Update Single User should work for self and should affect database", function() {
  expect(db.users["4"].email).toBe("bobade@gmail.com");
});

test("Update Single User should work for self and should affect database", function() {
  expect(db.users["4"].name).toBe("Bobby");
});
