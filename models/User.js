const usersCollection = require("../db").collection("users");

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.register = async function (callback) {
  const existingUser = await usersCollection.findOne({
    username: this.data.username,
  });

  if (!existingUser) {
    usersCollection.insertOne(this.data);
    callback({
      status: 200,
      data: {
        message: "Account creation successful",
      },
    });
  } else {
    callback({
      status: 400,
      data: {
        message: "Account already exists",
      },
    });
  }
};

User.prototype.login = async function (callback) {
  const attemptedUser = await usersCollection.findOne({
    username: this.data.username,
  });

  if (attemptedUser && attemptedUser.password === this.data.password) {
    callback({ status: 200, data: { message: "Login Successful" } });
  } else {
    callback({ status: 400, data: { message: "Incorrect Password" } });
  }
};

module.exports = User;
