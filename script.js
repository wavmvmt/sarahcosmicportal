
const planets = document.querySelectorAll('.planet');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

planets.forEach(planet => {
  planet.addEventListener('click', (e) => {
    popup.style.display = 'block';
    popup.style.left = `${e.pageX + 10}px`;
    popup.style.top = `${e.pageY - 20}px`;
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
