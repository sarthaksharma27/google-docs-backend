const Editor = require("../models/editor")

async function handleContentSave(req, res) {
    const { content } = req.body;
    const userId = req.user._id;
    console.log(userId);
    
    const saveContent = await Editor.findOneAndUpdate(
        {user: userId}, // Empty filter matches the first document it finds
        { content }, 
        { new: true, upsert: true }
    );
}

async function handleShowData(req, res) {
    const userId = req.user._id
    const recieveContent = await Editor.find({user: userId}) ;
    res.status(200).json(recieveContent);
}

module.exports = {
    handleContentSave,
    handleShowData,
}