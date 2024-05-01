const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const MySecret = "Project";
const { User, Admin } = require("./mongo.js");
const {
  UserValidation,
  AdminValidation,
  UserLoginValidation,
} = require("./types.js");
const cors = require("cors");
app.use(cors());

app.post("/Signin", async (req, res) => {
  const CreatInput = req.body;
  const ParsedInput = UserValidation.safeParse(CreatInput);
  if (!ParsedInput.success) {
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

app.post("/login", async (req, res) => {
  const CreatInput = req.body;
  const { Username, Password } = req.body;
  const ParsedInput = UserLoginValidation.safeParse(CreatInput);

  if (!ParsedInput.success) {
    res.status(404).json({
      Message: "Invalid Inputs",
    });
  } else {
    const UserExist = await User.findOne({ Username, Password });

    if (!UserExist) {
      return res.status(403).json({
        msg: "User Doesnt exist Please Sign in",
      });
    } else {
      var token = jwt.sign({ Username }, MySecret);
      res.status(200).json({
        Message: "User login Succesfull",
        Token: token,
      });
    }
  }
});

app.post("/Admin/login", async (req, res) => {
  const AdminInput = req.body;
  const { Username, Password } = req.body;
  const ParsedAdminInput = AdminValidation.safeParse(AdminInput);
  if (!ParsedAdminInput.success) {
    res.status(404).json({
      Message: "Please Check Inputs",
    });
  } else {
    const AdminExist = await Admin.findOne({ Username, Password });
    if (!AdminExist) {
      return res.status(403).json({
        msg: "Inavalid Credentials",
      });
    } else {
      var token = jwt.sign({ Username }, MySecret);
      // localStorage.setItem("token", token);
      res.status(200).json({
        Message: "Admin login Succesfull",
        Token: token,
      });
    }
  }
});

app.listen(3000, () => {
  console.log("Port Is ready");
});
