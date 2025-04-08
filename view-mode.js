const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
    const content = document.getElementById('content');
  content.classList.toggle('dark-mode');
});