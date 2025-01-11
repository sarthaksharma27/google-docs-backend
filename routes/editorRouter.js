const express = require("express")
const router = express.Router()
const {handleContentSave} = require("../controllers/editor")

router.post('/', handleContentSave)

module.exports = router;