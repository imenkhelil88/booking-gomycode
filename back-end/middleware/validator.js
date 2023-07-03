const {validationResult,body}=require('express-validator')

exports.registervalidation = [
    body("email", "please enter a valid email").notEmpty().isEmail(),
    body("password", "at least 6 caracters").notEmpty().isLength({ min: 6 }),
    body("phone","at least 8 numbers").notEmpty().isLength({ min: 8 }),
    body("name","name required").notEmpty(),
  ];
  exports.loginvalidation = [
    body("email", "are you sure you are registred? enter a valid email").isEmail(),
    body("password", "password not valid , at least 6 caracters").isLength({ min: 6 }),
  ];
  exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };