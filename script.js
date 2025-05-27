
const planets = [
  {
    name: "Mercury",
    color: "#c0c0c0",
    radius: 70,
    message: "Messenger of the gods.",
    offerings: ["Speed", "Clarity", "Initiation"]
  },
  {
    name: "Venus",
    color: "#ffb6c1",
    radius: 100,
    message: "Love and beauty guide you.",
    offerings: ["Love", "Art", "Magnetism"]
  },
  {
    name: "Earth",
    color: "#49baff",
    radius: 130,
    message: "Ground yourself in truth.",
    offerings: ["Nature", "Balance", "Purpose"]
  },
  {
    name: "Mars",
    color: "#ff6b6b",
    radius: 160,
    message: "Warrior of energy.",
    offerings: ["Action", "Courage", "Fire"]
  },
  {
    name: "Jupiter",
    color: "#fcbf49",
    radius: 190,
    message: "The great expander.",
    offerings: ["Abundance", "Wisdom", "Leadership"]
  },
  {
    name: "Saturn",
    color: "#dcd6f7",
    radius: 220,
    message: "Lord of structure and time.",
    offerings: ["Discipline", "Karma", "Mastery"]
  },
  {
    name: "Uranus",
    color: "#a0e9fd",
    radius: 250,
    message: "Electric awakener.",
    offerings: ["Innovation", "Freedom", "Rebellion"]
  },
  {
    name: "Neptune",
    color: "#93b7ff",
    radius: 280,
    message: "Dreamweaver of spirit.",
    offerings: ["Mysticism", "Imagination", "Empathy"]
  },
  {
    name: "Pluto",
    color: "#8e44ad",
    radius: 310,
    message: "Shadow and rebirth.",
    offerings: ["Power", "Transformation", "Truth"]
  },
  {
    name: "Moon",
    color: "#ffffff",
    radius: 340,
    message: "The sacred reflector.",
    offerings: ["Intuition", "Emotion", "Cycles"]
  },
  {
    name: "Chiron",
    color: "#00ffcc",
    radius: 370,
    message: "The wounded healer.",
    offerings: ["Healing", "Alchemy", "Integration"]
  }
];

const sun = document.getElementById("sun");
const orbitsContainer = document.getElementById("orbits");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const popupInsights = document.getElementById("popup-insights");

planets.forEach((planet, index) => {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.width = orbit.style.height = `${planet.radius * 2}px`;
  orbit.style.top = orbit.style.left = `calc(50% - ${planet.radius}px)`;
  orbitsContainer.appendChild(orbit);

  const el = document.createElement("div");
  el.className = "planet";
  el.style.background = planet.color;
  document.body.appendChild(el);

  let angle = Math.random() * Math.PI * 2;

  setInterval(() => {
    angle += 0.001 + index * 0.0001;
    const x = window.innerWidth / 2 + planet.radius * Math.cos(angle);
    const y = window.innerHeight / 2 + planet.radius * Math.sin(angle);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }, 16);

  el.addEventListener("click", () => {
    popupTitle.textContent = planet.name;
    popupMessage.textContent = planet.message;
    popupInsights.innerHTML = planet.offerings.map(item => `<li>${item}</li>`).join("");
    popup.classList.remove("hidden");
  });
});

popup.addEventListener("click", () => popup.classList.add("hidden"));
