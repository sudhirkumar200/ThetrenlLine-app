const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers");

// Routes
router.post("/user/signup",controllers.userregister);
router.post("/user/sendotp",controllers.userOtpSend);
//router.post("/user/login",controllers.userLogin);
//router.post("/user/signin",controllers.usersignin);

// Route for login with email and password (userLogin controller)
router.post("/user/login", (req, res, next) => {
    if (!req.body.otp) {
      // If OTP is not provided in the request body, use userLogin controller
      controllers.userLogin(req, res, next);
    } else {
      // If OTP is provided, move to the next route (userLoginOtp controller)
      next();
    }
  });
  
  // Route for login with email and OTP (userLoginOtp controller)
  router.post("/user/login", controllers.userLoginOtp);

module.exports = router;