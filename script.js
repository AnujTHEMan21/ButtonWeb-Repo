let clickCount = parseInt(localStorage.getItem('clickCount')) || 0; // Load the click count from local storage, or set it to 0 if it doesn't exist
const clickBtn = document.getElementById('clickBtn');
const clickCountElem = document.getElementById('clickCount');
const clickDistributionElem = document.getElementById('clickDistribution');

clickBtn.addEventListener('click', () => {
  clickCount++;
  clickCountElem.textContent = clickCount;
  localStorage.setItem('clickCount', clickCount); // Save the click count to local storage
  
  // Get the user's IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      // Get the user's location based on their IP address
      fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => {
          const country = data.country_name;
          const region = data.region;
          // Update the click distribution table
          const tableRow = `<tr><td>${country}</td><td>${region}</td><td>${clickCount}</td></tr>`;
          clickDistributionElem.innerHTML += tableRow;
        });
    });
});
