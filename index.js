// Your code here
// Get the dodger element
const dodger = document.getElementById('dodger');

// Function to move the dodger to the left
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left, 10);
  if (left > 0) { // Prevent it from going off the left side
    dodger.style.left = `${left - 4}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  let left = parseInt(dodger.style.left, 10);
  if (left < 360) { // Prevent it from going off the right side (400px - 40px = 360px)
    dodger.style.left = `${left + 4}px`;
  }
}

// Event listener for keydown to move the dodger
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
