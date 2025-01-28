window.onload = function() {
    showCustomAlertAndPlaySong();
};

function showCustomAlertAndPlaySong() {
    // Create the custom alert container
    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '0';
    alertContainer.style.left = '0';
    alertContainer.style.width = '100%';
    alertContainer.style.height = '100%';
    alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertContainer.style.display = 'flex';
    alertContainer.style.justifyContent = 'center';
    alertContainer.style.alignItems = 'center';
    alertContainer.style.zIndex = '1000';

    // Create the alert box
    const alertBox = document.createElement('div');
    alertBox.style.backgroundColor = 'black'; // Change to black
    alertBox.style.padding = '20px';
    alertBox.style.textAlign = 'center';
    alertBox.style.borderRadius = '10px';
    alertBox.style.maxWidth = '400px';
    alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

    // Add the GIF
    const gif = document.createElement('img');
    gif.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBxZms0cm1pNTI4d3VoanMwenp3Nzc0dGIyNDdlMHo5ZmQ1aTRoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TYRqsA5mXWlJvI6iao/giphy.gif';
    gif.style.maxWidth = '100%';
    gif.style.height = 'auto';
    gif.style.borderRadius = '10px';

    // Add the text
    const text = document.createElement('p');
    text.textContent = 'សូមស្វាគមន៍គមកកាន់គេហទំព័ររបស់ខ្ញុំ';
    text.style.color = 'white'; // Make the text white for better visibility

    // Create the "OK" button
    const button = document.createElement('button');
    button.textContent = 'យល់ព្រម';
    button.style.marginTop = '15px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Add hover effect for the button
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#218838';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#28a745';
    });

    // When the button is clicked, play the song
    button.onclick = function() {
        // Hide the alert
        document.body.removeChild(alertContainer);
        
        // Create the song
        const song = new Audio('https://audio.jukehost.co.uk/rNu0LUyganTYOHwqejJmlvLLhV8SWIUB');
        
        // Play the song
        song.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });

        // Loop the song when it ends
        song.onended = function() {
            song.play();  // Start playing again
        };
    };

    // Append everything to the alert box and the alert container
    alertBox.appendChild(gif);
    alertBox.appendChild(text);
    alertBox.appendChild(button);
    alertContainer.appendChild(alertBox);

    // Append the alert container to the body
    document.body.appendChild(alertContainer);
}
