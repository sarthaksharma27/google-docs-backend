const User = require('../models/user')
const {setUser} = require('../service/auth')

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
    const user = await User.findOne({email, password})
    if(!user) return res.render("login", {
        error: "Invalid Username or Password"
    })

    const token = setUser(user)
    res.cookie("uid", token)
    res.redirect("/main")
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}