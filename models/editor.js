const mongoose = require("mongoose")

const editorSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
})

const Editor = mongoose.model("Editor", editorSchema)
module.exports = Editor
