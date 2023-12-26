const User = require("../models/User");

exports.home = (req, res) => {
  res.render("home-guest");
};

exports.register = (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = new User({ username, password, email });
    user.register(req,res);
  } catch (error) {
    console.log("Error", error);
  }

};
