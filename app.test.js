const { User } = require("./app");
const { Admin } = require("./app");
const got = require("got");

test('Should Create New User with corresponding name "Shalom" ', function() {
  let sampleUser = new User("Shalom", "shalom@gmail.com", 12345);
  expect(sampleUser.name).toBe("Shalom");
});

test('Should Create New User with corresponding email "shalom@gmail.com" ', function() {
  let sampleUser = new User("Shalom", "shalom@gmail.com", 12345);
  expect(sampleUser.email).toBe("shalom@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  let sampleUser = new User("Shalom", "shalom@gmail.com", 12345);
  expect(sampleUser.password).toBe(12345);
});

test('Should Create New Admin with corresponding name "Adedayo" ', function() {
  let sampleAdmin = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.name).toBe("Adedayo");
});

test('Should Create New User with corresponding email "samfeolu@gmail.com" ', function() {
  let sampleAdmin = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.email).toBe("samfeolu@gmail.com");
});

test('Should Create New User with corresponding password "12345" ', function() {
  let sampleAdmin = new Admin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.password).toBe(1234);
});
test("Testing My Get", () => {
  expect(got.get()).toBe("Getted");
});
test("Testing My Post", () => {
  expect(got.post()).toBe("Posted");
});
