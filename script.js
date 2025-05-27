
const planets = [
  {
    name: "Cosmic Detox",
    color: "#8e44ad",
    x: -200, y: -150,
    message: "Pluto energy: Deep release & rebirth.",
    offerings: ["Karmic Clearing", "Cellular Detox", "Spiritual Reboot"]
  },
  {
    name: "Super Human Training",
    color: "#ff6b6b",
    x: 200, y: -100,
    message: "Mars energy: Vitality, strength, action.",
    offerings: ["Physical Mastery", "Energetic Fire", "Discipline"]
  },
  {
    name: "Starseed Quest",
    color: "#a0e9fd",
    x: -220, y: 120,
    message: "Uranus energy: Awakening cosmic DNA.",
    offerings: ["Insight", "Remembrance", "Higher Mind"]
  },
  {
    name: "Coach Path",
    color: "#00ffcc",
    x: 250, y: 140,
    message: "Chiron energy: Healer's journey.",
    offerings: ["Shadow Alchemy", "Teaching from Experience", "Wisdom"]
  },
  {
    name: "Customized Offering",
    color: "#ffffff",
    x: -100, y: 230,
    message: "Moon energy: Intuitive path.",
    offerings: ["Personal Reading", "Soul Blueprint", "Nurturing Insight"]
  },
  {
    name: "Meet the ETs",
    color: "#93b7ff",
    x: 100, y: 250,
    message: "Neptune energy: Galactic connection.",
    offerings: ["Mysticism", "Dream Contact", "Light Beings"]
  },
  {
    name: "Mailing List",
    color: "#c0c0c0",
    x: -300, y: 30,
    message: "Mercury energy: Communication and flow.",
    offerings: ["Updates", "Downloads", "Waves of Insight"]
  },
  {
    name: "About Sarah",
    color: "#ffd966",
    x: 300, y: 40,
    message: "Sun energy: Radiant essence of Sarah.",
    offerings: ["Divine Light", "Truth", "Leadership"]
  },
  {
    name: "Calendar",
    color: "#dcd6f7",
    x: 0, y: -250,
    message: "Saturn energy: Sacred time container.",
    offerings: ["Booking", "Structure", "Divine Flow"]
  },
  {
    name: "Videos",
    color: "#f7c6c7",
    x: 0, y: 270,
    message: "Venus energy: Harmony and beauty.",
    offerings: ["Music", "Visuals", "Transmission"]
  },
  {
    name: "22K Package",
    color: "#fcbf49",
    x: -320, y: -200,
    message: "Jupiter energy: Expansion & Abundance.",
    offerings: ["Legacy Work", "Growth Codes", "High-Value Support"]
  },
  {
    name: "Back Home",
    color: "#49baff",
    x: 320, y: -220,
    message: "Earth energy: Embodiment & peace.",
    offerings: ["Return", "Wholeness", "Support"]
  },
  {
    name: "Journey to Remember",
    color: "#000000",
    x: 0, y: 0,
    message: "Blackhole energy: Return to Source.",
    offerings: ["Game", "Play", "Truth Portal"]
  }
];

const container = document.getElementById("planet-container");

const planets = [
  {
    name: "Cosmic Detox",
    color: "#8e44ad",
    x: -200, y: -150,
    message: "Pluto energy: Deep release & rebirth.",
    offerings: ["Karmic Clearing", "Cellular Detox", "Spiritual Reboot"]
  },
  {
    name: "Super Human Training",
    color: "#ff6b6b",
    x: 200, y: -100,
    message: "Mars energy: Vitality, strength, action.",
    offerings: ["Physical Mastery", "Energetic Fire", "Discipline"]
  },
  {
    name: "Starseed Quest",
    color: "#a0e9fd",
    x: -220, y: 120,
    message: "Uranus energy: Awakening cosmic DNA.",
    offerings: ["Insight", "Remembrance", "Higher Mind"]
  },
  {
    name: "Coach Path",
    color: "#00ffcc",
    x: 250, y: 140,
    message: "Chiron energy: Healer's journey.",
    offerings: ["Shadow Alchemy", "Teaching from Experience", "Wisdom"]
  },
  {
    name: "Customized Offering",
    color: "#ffffff",
    x: -100, y: 230,
    message: "Moon energy: Intuitive path.",
    offerings: ["Personal Reading", "Soul Blueprint", "Nurturing Insight"]
  },
  {
    name: "Meet the ETs",
    color: "#93b7ff",
    x: 100, y: 250,
    message: "Neptune energy: Galactic connection.",
    offerings: ["Mysticism", "Dream Contact", "Light Beings"]
  },
  {
    name: "Mailing List",
    color: "#c0c0c0",
    x: -300, y: 30,
    message: "Mercury energy: Communication and flow.",
    offerings: ["Updates", "Downloads", "Waves of Insight"]
  },
  {
    name: "About Sarah",
    color: "#ffd966",
    x: 300, y: 40,
    message: "Sun energy: Radiant essence of Sarah.",
    offerings: ["Divine Light", "Truth", "Leadership"]
  },
  {
    name: "Calendar",
    color: "#dcd6f7",
    x: 0, y: -250,
    message: "Saturn energy: Sacred time container.",
    offerings: ["Booking", "Structure", "Divine Flow"]
  },
  {
    name: "Videos",
    color: "#f7c6c7",
    x: 0, y: 270,
    message: "Venus energy: Harmony and beauty.",
    offerings: ["Music", "Visuals", "Transmission"]
  },
  {
    name: "22K Package",
    color: "#fcbf49",
    x: -320, y: -200,
    message: "Jupiter energy: Expansion & Abundance.",
    offerings: ["Legacy Work", "Growth Codes", "High-Value Support"]
  },
  {
    name: "Back Home",
    color: "#49baff",
    x: 320, y: -220,
    message: "Earth energy: Embodiment & peace.",
    offerings: ["Return", "Wholeness", "Support"]
  },
  {
    name: "Journey to Remember",
    color: "#000000",
    x: 0, y: 0,
    message: "Blackhole energy: Return to Source.",
    offerings: ["Game", "Play", "Truth Portal"]
  }
];

const container = document.getElementById("planet-container");

planets.forEach((planet, index) => {
  // Create orbit wrapper
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");

  // Create planet element
  const el = document.createElement("div");
  el.classList.add("planet");
  el.style.background = planet.color;
  el.textContent = planet.name;

  // Append planet to orbit wrapper
  orbit.appendChild(el);
  container.appendChild(orbit);

  // Orbit animation with unique timing & radius
  orbit.style.animation = `orbit ${10 + index * 2}s linear infinite`;
  orbit.style.transform = `rotate(${index * 30}deg)`; // space them out

  // Popup setup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <strong>${planet.name}</strong><br>
    <em>${planet.message}</em>
    <ul>${planet.offerings.map(o => `<li>${o}</li>`).join("")}</ul>
    <img src="phone_icon.png" class="phone-icon" title="Book your free 15min call">
  `;
  container.appendChild(popup);

  el.addEventListener("mouseenter", () => popup.classList.add("show"));
  el.addEventListener("mouseleave", () => popup.classList.remove("show"));

  el.addEventListener("mousemove", (e) => {
    popup.style.left = `${e.pageX + 15}px`;
    popup.style.top = `${e.pageY - 20}px`;
  });
});


});
