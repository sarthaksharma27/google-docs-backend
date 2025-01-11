// function formatText(command) {
//     document.execCommand(command, false, null);
// }

async function saveContent() {
    const content = document.querySelector('.editor').innerHTML
    console.log(content);

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