const form = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const feedbackItem = document.createElement('div');
  feedbackItem.className = 'feedback-item';
  feedbackItem.innerHTML = `
    <strong>${name}</strong> (${email})<br/>
    <p>${message}</p>
  `;

  feedbackList.prepend(feedbackItem);

  form.reset();
});
