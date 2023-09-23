const users = require("../models/userSchema");
//const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const userotp = require("../models/userOtp"); // Correct import path
//const SECRECT_KEY = "";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// email config
const tarnsporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


exports.userregister = async (req, res) => {
    const { fname,lname, email, password } = req.body;

    if (!fname|| !lname || !email || !password) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }

    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "This User Allready exist in our db" })
        } else {
            const userregister = new users({
                fname,lname,email, password
            });

            // here password hasing
            
// // hash password
// userSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }

//     next();
// });

// // token generate
// userSchema.methods.generateAuthtoken = async function(){
//     try {
//         let newtoken = jwt.sign({_id:this._id},SECRECT_KEY,{
//             expiresIn:"1d"
//         });

//         this.tokens = this.tokens.concat({token:newtoken});
//         await this.save();
//         return newtoken;
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }
            const storeData = await userregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }

};



// user send otp
exports.userOtpSend = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" })
    }


    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            const OTP = Math.floor(100000 + Math.random() * 900000);

            const existEmail = await userotp.findOne({ email: email });


            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                await updateData.save();

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Eamil For Otp Validation",
                    text: `OTP:- ${OTP}`
                }


                tarnsporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })

            } else {

                const saveOtpData = new userotp({
                    email, otp: OTP
                });

                await saveOtpData.save();
                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Eamil For Otp Validation",
                    text: `OTP:- ${OTP}`
                }

                tarnsporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })
            }
        } else {
            res.status(400).json({ error: "This User Not Exist In our Db" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};

//User login with otp

exports.userLoginOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp || !email) {
        return res.status(400).json({ error: "Please Enter Your OTP and email" });
    }

    try {
        const otpverification = await userotp.findOne({ email: email });

        if (!otpverification) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        if (otpverification.otp === otp) {
            const preuser = await users.findOne({ email: email });

            if (!preuser) {
                return res.status(400).json({ error: "User not found" });
            }

            // token generate
            const token = await preuser.generateAuthtoken();
            console.log(token);

            return res.status(200).json({ message: "User Login Successfully Done", userToken: token });
        } else {
            return res.status(400).json({ error: "Invalid OTP" });
        }
    } catch (error) {
        return res.status(400).json({ error: "Invalid Details", error });
    }
};

//user login with Email and password

// exports.usersignin = async(req,res)=>{
//     const { email, password } = req.body;

//   if (!password || !email) {
//     return res.status(400).json({ error: "Please Enter Your Password and email" });
//   }

//   try {
//     // Find the user by email
//     const user = await users.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     // Compare the provided password with the stored hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Incorrect password." });
//     }
//     console.log(user);

//     // Passwords match, user is authenticated
//     res.status(200).json({ message: "Login successful." });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }



exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
  
    if (!password || !email) {
      return res.status(400).json({ error: "Please Enter Your Password and email" });
    }
  
    try {
      // Find the user by email
      const user = await users.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Incorrect password." });
      }
  
      // Passwords match, user is authenticated
      // You can generate and send an authentication token here if needed
  
      // Example: Generate a JWT token and send it in the response
      const token = jwt.sign({ _id: user._id }, process.env.SECRECT_KEY, {
        expiresIn: "1d",
      });
  
      // You may also store this token in the user document for future authentication
  
      res.status(200).json({ message: "Login successful.", userToken: token });
    } catch (error) {
        console.error("Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };