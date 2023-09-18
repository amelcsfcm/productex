const user = require("../model/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const theuser = await user.findOne({ email });

  if (theuser !== null) {
    if (bcryptjs.compareSync(password, theuser.password)) {
      const token = jwt.sign({ userId: theuser._id }, "project");
      return res.status(200).json(token);
    } else {
      return res.status(404).json({ message: "Wrong password" });
    }
  } else {
    return res.status(400).json({ message: "User not found" });
  }
};

module.exports.register = (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new user({
    username,
    email,
    password: bcryptjs.hashSync(password, 10),
  });

  newUser
    .save()
    .then(() => {
      return res.status(200).json({ message: "Welcome new user" });
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};
