const User = require("../models/User");

exports.home = (req, res) => {
  res.render("home-guest");
};

exports.register = (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = new User({ username, password, email });
    user.register((response) => {
      res.status(response.status).json(response.data);
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    user.login((response) => {
      res.status(response.status).json(response.data);
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
