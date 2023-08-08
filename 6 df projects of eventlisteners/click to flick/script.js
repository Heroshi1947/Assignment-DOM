// Get the box element
const box = document.getElementById('box');

// Function to handle the onclick event
function handleClick() {
    box.style.backgroundColor = getRandomColor();
}

// Function to handle the ondblclick event
function handleDoubleClick() {
    box.style.backgroundColor = 'red';
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners for onclick and ondblclick
box.addEventListener('click', handleClick);
box.addEventListener('dblclick', handleDoubleClick);