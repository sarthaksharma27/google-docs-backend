// function formatText(command) {
//     document.execCommand(command, false, null);
// }

async function autoContentSave() {
    const toggle = document.querySelector("#check-apple");

    // Ensure the toggle is checked before proceeding
    if (toggle.checked) {
        const content = document.querySelector('.editor').innerHTML;

        try {
            const response = await fetch('/save', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ content: content })
            });

            if (!response.ok) {
                console.error("Content not saved:", await response.text());
            } else {
                console.log("Content is saved");
            }
        } catch (error) {
            console.error("Error occurred while saving content:", error);
        }
    } 
}

// Set interval for auto-saving every 5 seconds (5000 ms)
setInterval(autoContentSave, 5000);


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

function showDiv() {
    console.log("Button is working");
    const result = document.getElementsByClassName('container')[0]
    result.style.display = "block";
    console.log(result);
    console.log(userId);
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the button
    const button = document.getElementById('copyUrlButton');
  
    // Add click event listener
    button.addEventListener('click', () => {
      // Create the dynamic URL
      const dynamicUrl = `http://localhost:8080/doc/view/${userId}`;
  
      // Copy the URL to the clipboard
      navigator.clipboard.writeText(dynamicUrl).then(() => {
        alert(`Profile link copied to clipboard: ${dynamicUrl}`);
      }).catch((error) => {
        console.error('Error copying link:', error);
        alert('Failed to copy the link. Please try again.');
      });
    });
  });

function divClose() {
    const result = document.getElementsByClassName('container')[0]
    result.style.display = "none";
    
}