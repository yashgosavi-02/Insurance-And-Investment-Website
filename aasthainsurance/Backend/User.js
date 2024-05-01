const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser);
const jwt = require("jsonwebtoken");
app.use(express.json());
const MySecret = "Project";
const { User, Admin } = require("./mongo.js");
const { UserValidation, UserloginValidation } = require("./types.js");
const cors = require("cors");
app.use(cors());

const signup = app.post("/Signin", async (req, res) => {
  const CreatInput = req.body;
  const ParsedInput = UserValidation.safeParse(CreatInput);
  if (![ParsedInput.success]) {
    res.status(404).json({
      Message: "Invalid Inputs",
    });
  } else {
    await User.create({
      Username: CreatInput.Username,
      Password: CreatInput.Password,
    });
    res.json({
      Message: "User Created Succesfully",
    });
  }
});

const login = app.post("/login", async (req, res) => {
  const CreatInput = req.body;
  const { Username, Password } = req.body;
  const ParsedInput = UserloginValidation.safeParse(CreatInput);
  if (![ParsedInput.success]) {
    res.status(404).json({
      Message: "Invalid Inputs",
    });
  } else {
    const UserExist = User.find({ Username, Password });
    if (!UserExist) {
      return res.status(403).json({
        msg: "User Doesnt exist Please Sign in",
      });
    } else {
      var token = jwt.sign({ Username }, MySecret);
      localStorage.setItem("token", token);
      res.status(200).json({
        Message: "User login Succesfull",
      });
    }
  }
});
module.exports = {
  signup,
  login,
};
