const Editor = require("../models/editor")

async function handleContentSave(req, res) {
    const { content } = req.body;
    console.log(content);
    
    const saveContent = await Editor.findOneAndUpdate(
        {}, // Empty filter matches the first document it finds
        { content }, 
        { new: true, upsert: true }
    );
    console.log(saveContent);
}

async function handleShowData(req, res) {
    const recieveContent = await Editor.find() ;
    console.log(recieveContent);
    
    res.status(200).json(recieveContent);
}

module.exports = {
    handleContentSave,
    handleShowData,
}