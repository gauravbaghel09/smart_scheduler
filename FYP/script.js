document.getElementById('generate-btn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  if (!prompt) return alert('Please enter a prompt.');

  // Sending the POST request to the backend with the prompt
  fetch('/generate-schedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,  // Using the user-entered prompt
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert('Error generating schedule.');
      return;
    }
    
    // Displaying the generated schedule in the UI
    document.getElementById('schedule-content').textContent = data.schedule;
    document.getElementById('schedule-output').classList.remove('hidden');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while generating the schedule.');
  });
});

// Accept button logic
document.getElementById('accept-btn').addEventListener('click', () => {
  alert('Schedule accepted!');
});

// Reject button logic
document.getElementById('reject-btn').addEventListener('click', () => {
  alert('Schedule rejected.');
  document.getElementById('schedule-output').classList.add('hidden');
});
