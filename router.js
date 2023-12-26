const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const { validate } = require("./middleware/validation");
const { userSchema, loginSchema } = require("./validationSchemas/userValidation");


router.get("/", userController.home);
router.post("/register", validate({schema:userSchema}), userController.register);
router.post("/login", validate({schema:loginSchema}), userController.login);


module.exports = router;