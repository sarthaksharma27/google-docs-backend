const express = require("express")
const router = express.Router()
const {handleContentSave, handleShowData} = require("../controllers/editor")

router.post('/', handleContentSave)
router.get('/', handleShowData)

module.exports = router;