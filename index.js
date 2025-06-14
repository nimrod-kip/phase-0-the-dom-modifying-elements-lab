// Remove the <main id="main">
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Nimrod kipngetich is the champion'; // Replace "Your Name" with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);
