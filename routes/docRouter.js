const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    return res.render('main', {userId: req.user._id})
})

module.exports = router;