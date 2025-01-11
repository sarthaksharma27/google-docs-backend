const Editor = require("../models/editor")

async function handleContentSave(req, res) {
    const { content } = req.body;
    console.log(content);
    
    const saveContent = await Editor.create({content})
    console.log(saveContent)
}

module.exports = {
    handleContentSave,
}