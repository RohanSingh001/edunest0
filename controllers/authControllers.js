const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res.json({ message: "User created", user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await user.validPassword(password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, "SECRET_KEY", { expiresIn: "1h" });
  res.json({ token });
};
