const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("username", "username is required").notEmpty(),
  check("email", "Invalid email").isEmail(),
  check("password", "password is required").notEmpty(),
  check("password", "The password must contain min 6  character ")
  .isLength({ min: 6 })
 

];
exports.loginValidate = () => [
  check("email", "Invalid email").isEmail(),
  check("password", "invalid password").exists(),

];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()
  })
  }
  next();
};