const mongoose = require("mongoose")

const editorSchema = new mongoose.Schema({
    content: {
        type: String,
        created_at: { type: Date, default: Date.now }
    }
})

const Editor = mongoose.model("Editor", editorSchema)
module.exports = Editor;