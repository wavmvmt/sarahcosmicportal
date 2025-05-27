document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.left = `${planet.offsetLeft + 50}px`;
    popup.style.top = `${planet.offsetTop}px`;
    popup.classList.remove('hidden');
  });
});

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
