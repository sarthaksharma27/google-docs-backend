// function formatText(command) {
//     document.execCommand(command, false, null);
// }

async function saveContent() {
    const content = document.querySelector('.editor').innerHTML

    const response = await fetch('/save', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ content: content })
    })

    if(!response) {
        return console.log("Content not saved");
    } else {
        return console.log("Content is saved");
    }
}

async function handleShowData() {
    const recieveContent = await fetch('/save')
    const resp = await recieveContent.json()    
    const content = recieveContent.length > 0 ? recieveContent[0].content : 'No content found';
    document.querySelector('.editor').innerHTML = resp[0].content;
}

