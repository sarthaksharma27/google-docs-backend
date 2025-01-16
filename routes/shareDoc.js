const express = require("express")
const router = express.Router()
const {handleShareDoc} = require("../controllers/shareDoc")

router.get("/:userId", handleShareDoc)

module.exports = router;