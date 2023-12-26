const yup = require("yup");

const userSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .required()
      .max(100)
      .min(3)
      .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed"),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(100),
  }),
});


const loginSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .required()
      .max(100)
      .min(3)
      .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed"),
    password: yup.string().min(8).max(100),
  }),
});

exports.userSchema = userSchema;
exports.loginSchema = loginSchema;
