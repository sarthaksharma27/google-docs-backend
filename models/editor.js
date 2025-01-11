const mongoose = require("mongoose")

const editorSchema = new mongoose.Schema({
    content: {
        type: String,
    }
})

const Editor = mongoose.model("Editor", editorSchema)
module.exports = Editor;