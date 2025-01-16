const Editor = require('../models/editor')

async function handleShareDoc(req, res) {
    const {userId} = req.params
    console.log(userId);
    const recieveContent = await Editor.find({user: userId});
    console.log(recieveContent);
    res.redirect("/doc")
    
    // res.status(200).json(recieveContent);
}

module.exports = {
    handleShareDoc,
}