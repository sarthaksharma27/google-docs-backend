const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.render("home")
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})

router.get("/login", (req, res) => {
    return res.render("login");
})

router.get("/main", (req, res) => {
  return res.render("main")
})

module.exports = router;