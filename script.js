const planets = [
  {
    name: "Cosmic Detox",
    color: "#8e44ad",
    message: "Pluto energy: Deep release & rebirth.",
    offerings: ["Karmic Clearing", "Cellular Detox", "Spiritual Reboot"]
  },
  {
    name: "Super Human Training",
    color: "#ff6b6b",
    message: "Mars energy: Vitality, strength, action.",
    offerings: ["Physical Mastery", "Energetic Fire", "Discipline"]
  },
  {
    name: "Starseed Quest",
    color: "#a0e9fd",
    message: "Uranus energy: Awakening cosmic DNA.",
    offerings: ["Insight", "Remembrance", "Higher Mind"]
  },
  {
    name: "Coach Path",
    color: "#00ffcc",
    message: "Chiron energy: Healer's journey.",
    offerings: ["Shadow Alchemy", "Teaching from Experience", "Wisdom"]
  },
  {
    name: "Customized Offering",
    color: "#ffffff",
    message: "Moon energy: Intuitive path.",
    offerings: ["Personal Reading", "Soul Blueprint", "Nurturing Insight"]
  },
  {
    name: "Meet the ETs",
    color: "#93b7ff",
    message: "Neptune energy: Galactic connection.",
    offerings: ["Mysticism", "Dream Contact", "Light Beings"]
  },
  {
    name: "Mailing List",
    color: "#c0c0c0",
    message: "Mercury energy: Communication and flow.",
    offerings: ["Updates", "Downloads", "Waves of Insight"]
  },
  {
    name: "About Sarah",
    color: "#ffd966",
    message: "Sun energy: Radiant essence of Sarah.",
    offerings: ["Divine Light", "Truth", "Leadership"]
  },
  {
    name: "Calendar",
    color: "#dcd6f7",
    message: "Saturn energy: Sacred time container.",
    offerings: ["Booking", "Structure", "Divine Flow"]
  },
  {
    name: "Videos",
    color: "#f7c6c7",
    message: "Venus energy: Harmony and beauty.",
    offerings: ["Music", "Visuals", "Transmission"]
  },
  {
    name: "22K Package",
    color: "#fcbf49",
    message: "Jupiter energy: Expansion & Abundance.",
    offerings: ["Legacy Work", "Growth Codes", "High-Value Support"]
  },
  {
    name: "Back Home",
    color: "#49baff",
    message: "Earth energy: Embodiment & peace.",
    offerings: ["Return", "Wholeness", "Support"]
  },
  {
    name: "Journey to Remember",
    color: "#000000",
    message: "Blackhole energy: Return to Source.",
    offerings: ["Game", "Play", "Truth Portal"]
  }
];

const container = document.getElementById("planet-container");
const popup = document.getElementById("popup");
const nameEl = document.getElementById("popup-name");
const msgEl = document.getElementById("popup-message");
const insightsEl = document.getElementById("popup-insights");

planets.forEach((planet, index) => {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");
  const radius = 120 + index * 24;
  orbit.style.width = orbit.style.height = `${radius * 2}px`;
  orbit.style.marginLeft = orbit.style.marginTop = `-${radius}px`;
  orbit.style.animation = `orbit ${30 + index * 5}s linear infinite`;
  orbit.style.transform = `rotate(${(360 / planets.length) * index}deg)`;

  const el = document.createElement("div");
  el.classList.add("planet");
  el.style.background = planet.color;
  el.textContent = planet.name;

  el.addEventListener("click", (e) => {
    nameEl.textContent = planet.name;
    msgEl.textContent = planet.message;
    insightsEl.innerHTML = planet.offerings.map(o => `<li>${o}</li>`).join("");
    popup.classList.add("show");
    popup.style.left = `${e.pageX}px`;
    popup.style.top = `${e.pageY}px`;
  });

  orbit.appendChild(el);
  container.appendChild(orbit);
});

document.getElementById("closePopup").addEventListener("click", () => {
  popup.classList.remove("show");
});

document.getElementById("sun").addEventListener("click", () => {
  document.getElementById("sun-video-popup").classList.add("show");
});
