// tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');

function switchTab(tabName) {
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === tabName);
  });
  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  history.replaceState(null, '', '#' + tabName);
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// logo click → about tab
document.querySelector('.logo').addEventListener('click', (e) => {
  e.preventDefault();
  switchTab('about');
});

// load tab from URL hash on page load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (['about', 'experience', 'contact'].includes(hash)) {
    switchTab(hash);
  }
});

// auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();
