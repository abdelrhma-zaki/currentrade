const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/index.html"));
});

router.get("/withdrawl", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/withdrawl.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/register.html"));
});

router.get("/amount", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/amount_1.html"));
});

router.get("/exchange", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/exchange.html"));
});

router.get("/forgot", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/forgot.html"));
});

router.get("/market-overview", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/market-overview.html"));
});

router.get("/marketcap", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/marketcap.html"));
});

router.get("/trading", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/trading.html"));
});

router.get("/Transaction_am", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/Transaction_am.html"));
});

router.all("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = router;
