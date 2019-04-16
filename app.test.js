const { User } = require("./app");
const { Admin } = require("./app");

test('Should Create New User with corresponding name "Shalom" ', function() {
  let sampleUser = new User("Shalom", "shalom@gmail.com", 12345);
  expect(sampleUser.name).toBe("Shalom");
});

test('Should Create New Admin with corresponding name "Adedayo" ', function() {
  let sampleAdmin = newAdmin("Adedayo", "samfeolu@gmail.com", 1234);
  expect(sampleAdmin.name).toBe("Adedayo");
});
