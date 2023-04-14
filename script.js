let clickCount = parseInt(localStorage.getItem('clickCount')) || 0; // Load the click count from local storage, or set it to 0 if it doesn't exist
const clickBtn = document.getElementById('clickBtn');
const clickCountElem = document.getElementById('clickCount');

clickBtn.addEventListener('click', () => {
  clickCount++;
  clickCountElem.textContent = clickCount;
  localStorage.setItem('clickCount', clickCount); // Save the click count to local storage
});
