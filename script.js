
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');


if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  lightModeBtn.style.display = 'none';
  darkModeBtn.style.display = 'block';
} else {
  document.body.classList.remove('dark-mode');
  lightModeBtn.style.display = 'block';
  darkModeBtn.style.display = 'none';
}


lightModeBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  lightModeBtn.style.display = 'none';
  darkModeBtn.style.display = 'block';
  localStorage.setItem('dark-mode', 'enabled');
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  lightModeBtn.style.display = 'block';
  darkModeBtn.style.display = 'none';
  localStorage.setItem('dark-mode', 'disabled');
});
