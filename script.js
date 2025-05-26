
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
    message: "Goddess of beauty & love.",
    offerings: ["Love", "Art", "Magnetism"]
  },
  {
    name: "Earth",
    color: "#2ec4b6",
    radius: 130,
    message: "Our home — center of balance.",
    offerings: ["Grounding", "Life", "Healing"]
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
  },
];

const container = document.getElementById("portal");

planets.forEach((planet, index) => {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");
  orbit.style.width = `${planet.radius * 2}px`;
  orbit.style.height = `${planet.radius * 2}px`;
  orbit.style.top = "50%";
  orbit.style.left = "50%";
  container.appendChild(orbit);

  const dot = document.createElement("div");
  dot.classList.add("planet");
  dot.style.background = planet.color;
  container.appendChild(dot);

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <strong>${planet.name}</strong><br>
    <em>${planet.message}</em><br>
    <ul>${planet.offerings.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
  container.appendChild(popup);

  let angle = Math.random() * Math.PI * 2;
  setInterval(() => {
    angle += 0.001 + index * 0.0001;
    const x = window.innerWidth / 2 + planet.radius * Math.cos(angle);
    const y = window.innerHeight / 2 + planet.radius * Math.sin(angle);
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    popup.style.left = `${x + 20}px`;
    popup.style.top = `${y - 20}px`;
  }, 16);

  dot.addEventListener("mouseover", () => {
    popup.style.opacity = 1;
  });
  dot.addEventListener("mouseout", () => {
    popup.style.opacity = 0;
  });
});
