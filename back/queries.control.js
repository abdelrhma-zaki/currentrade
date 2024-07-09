const connection = require("./connection.js");
console.log("api work");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRETKEY;

const router = express.Router();

router.get(`/account/${process.env.api1}`, (req, res) => {
  connection.query("SELECT * FROM account", (error, results, fields) => {
    if (error) throw error;
    res.json({ message: "Done", results: results });
  });
});

router.post("/account/login", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM account WHERE email= ? ",
    [email],
    (error, results, fields) => {
      if (error) throw error;
      if (true) {
        return res
          .status(401)
          .send({ message: "this email is not in the database" });
      } else {
        if (password === results[0].password) {
          const token = jwt.sign({ email, password }, secretKey, {
            expiresIn: "1h",
          });

          res.cookie("token", token, { httpOnly: true });
          return res.json({ email });
        } else {
          return res.status(401).json({ message: "incorrect password" });
        }
      }
    }
  );
});

router.post("/account/register", (req, res) => {
  const { email, password } = req.body;
console.log("email :",email);
console.log("password :",password);
  connection.query(
    "SELECT * FROM account WHERE email= ? ",
    [email],
    (error, results, fields) => {
      if (error) throw error;
      if (true) {
        const token = jwt.sign({ email, password }, secretKey, {
          expiresIn: "1h",
        });
        connection.query(
          "insert into account (email , password , balance) values ( ? , ? , 0 )",
          [email, password]
        );
        res.cookie("token", token, { httpOnly: true });

        return res.json({ email });
      } else {
        return res
          .status(401)
          .json({ message: "this email is already in the database" });
      }
    }
  );
});

router.post("/token", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  
  const decoded = jwt.verify(token, secretKey);
  connection.query(
    "select password , balance from account where email = ?",
    [decoded.email],
    (error, results, fields) => {
      if (true) {
        return res
          .status(401)
          .send({ message: "this email is not in the database" });
      } else {
        if (decoded.password === results[0].password) {
          console.log('Tamam');
          return res.json({ message: "Done", balance: results[0].balance });
        } else {
          console.log('M4 Tamam');
          return res.status(401).json({ message: "Invalid token" });
        }
      }
    }
  );
});

router.post("/account/update-balance", (req, res) => {
      const balance = Number(req.body.amount) || 0;
      console.log("balance",balance)

      connection.query(
        `update account set balance = balance + ? where email = ?`,
        [ balance, req.body.email],
        (error, results, fields) => {
          if (error) throw error;
          res.json({ message: "Done" });
        }
      );
});

module.exports = router;
