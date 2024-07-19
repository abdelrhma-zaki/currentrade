// module.exports = router;
const Account = require("./accountModel");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRETKEY;

const router = express.Router();

router.get(`/account/${process.env.api1}`, async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json({ message: "Done", results: accounts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/account/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const account = await Account.findOne({ email });
    if (!account) {
      return res.status(401).json({ message: "this email is not in the database" });
    }

    if (password === account.password) {
      const token = jwt.sign({ email, password }, secretKey, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      return res.json({ email });
    } else {
      return res.status(401).json({ message: "incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/account/register", async (req, res) => {
  const { email, password } = req.body;
  console.log("email :", email);
  console.log("password :", password);

  try {
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(401).json({ message: "this email is already in the database" });
    }

    const account = new Account({ email, password });
    await account.save();

    const token = jwt.sign({ email, password }, secretKey, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    return res.json({ email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/token", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const account = await Account.findOne({ email: decoded.email });

    if (!account) {
      return res.status(401).json({ message: "this email is not in the database" });
    }

    if (decoded.password === account.password) {
      console.log('Tamam');
      return res.json({ message: "Done", balance: account.balance });
    } else {
      console.log('M4 Tamam');
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/account/update-balance", async (req, res) => {
  const balance = Number(req.body.amount) || 0;
  console.log("balance", balance);

  try {
    await Account.updateOne({ email: req.body.email }, { $inc: { balance } });
    res.json({ message: "Done" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
