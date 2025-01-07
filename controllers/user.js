const User = require('../models/user')

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/main")
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body
    const result = await User.findOne({email, password})
    if(!result) return res.render("login", {
        error: "Invalid Username or Password"
    })
    res.redirect("/main")
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}