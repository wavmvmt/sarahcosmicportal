const planets = [
  { name: "22K Package", color: "#fcbf49", tooltip: "💰 Jupiter: Expansion & Abundance" },
  { name: "Calendar", color: "#dcd6f7", tooltip: "📅 Saturn: Sacred Time Container" },
  { name: "Back Home", color: "#49baff", tooltip: "🏠 Earth: Embodiment & Peace" },
  { name: "Super Human Training", color: "#ff6b6b", tooltip: "💪 Mars: Vitality, Strength" },
  { name: "About Sarah", color: "#ffd966", tooltip: "🌞 Sun: Radiant Essence" },
  { name: "Coach Path", color: "#00ffcc", tooltip: "📘 Chiron: Healing Journey" },
  { name: "Meet the ETs", color: "#93b7ff", tooltip: "👽 Neptune: Galactic Connection" },
  { name: "Videos", color: "#f7c6c7", tooltip: "🎥 Venus: Harmony & Beauty" },
  { name: "Customized Offering", color: "#ffffff", tooltip: "🧿 Moon: Intuitive Path" },
  { name: "Starseed Quest", color: "#a0e9fd", tooltip: "✨ Uranus: Cosmic DNA Activation" },
  { name: "Mailing List", color: "#c0c0c0", tooltip: "📨 Mercury: Communication & Flow" },
  { name: "Cosmic Detox", color: "#8e44ad", tooltip: "☀️ Pluto: Deep Release & Rebirth" },
  { name: "Journey to Remember", color: "#000000", tooltip: "🌀 Blackhole: Return to Source" }
];

const container = document.getElementById("planet-container");
const sun = document.getElementById("sun");

planets.forEach((planet, index) => {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");

  const radius = 150 + index * 18;
  orbit.style.width = orbit.style.height = `${radius * 2}px`;
  orbit.style.marginLeft = orbit.style.marginTop = `-${radius}px`;
  orbit.style.animation = `rotate ${30 + index * 4}s linear infinite`;

  const el = document.createElement("div");
  el.classList.add("planet");
  el.style.background = planet.color;
  el.title = planet.tooltip;
  el.textContent = planet.name;

  orbit.appendChild(el);
  container.appendChild(orbit);
});

// YouTube modal
sun.addEventListener("click", () => {
  document.getElementById("video-modal").style.display = "flex";
});
function closeModal() {
  document.getElementById("video-modal").style.display = "none";
}
