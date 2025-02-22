// script.js
let display = document.getElementById('display');
let isScientificMode = false;

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
  createDrop(event);
}

// Clear the display
function clearDisplay() {
  display.value = '';
  createDrop(event);
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
  createDrop(event);
}

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
  createDrop(event);
}

// Create water drop effect
function createDrop(event) {
  const button = event.target;
  const drop = document.createElement('span');
  drop.classList.add('drop');

  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  drop.style.left = `${x}px`;
  drop.style.top = `${y}px`;

  button.appendChild(drop);

  drop.addEventListener('animationend', () => {
    drop.remove();
  });
}

// Toggle between basic and scientific modes
function toggleMode() {
  const scientificButtons = document.querySelectorAll('.scientific');
  const toggleButton = document.getElementById('mode-toggle');

  isScientificMode = !isScientificMode;

  scientificButtons.forEach(button => {
    button.style.display = isScientificMode ? 'block' : 'none';
  });

  toggleButton.textContent = isScientificMode ? 'Basic Mode' : 'Scientific Mode';
}