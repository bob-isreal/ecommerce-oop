const { User } = require("./app");
const { Admin } = require("./app");
const db = require("./database");

test('Should Create New User with corresponding name "Shalom" ', function() {
  let Shalom = new User("Shalom", "shalom@gmail.com", 12345);
  expect(Shalom.name).toBe("Shalom");
});

test('Should Create New User with corresponding email "shalom@gmail.com" ', function() {
  let Dickson = new User("Dickson", "dickson@gmail.com", 12345);
  expect(Dickson.email).toBe("dickson@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  let Uchenna = new User("Uchenna", "shalom@gmail.com", 12345);
  expect(Uchenna.password).toBe(12345);
});

test('Should Create New Admin with corresponding name "Adedayo" ', function() {
  let Adedayo = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(Adedayo.name).toBe("Adedayo");
});

test('Should Create New User with corresponding email "samfeolu@gmail.com" ', function() {
  let sampleAdmin = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.email).toBe("samfeolu@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  let sampleAdmin1 = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin1.password).toBe(1234);
});
