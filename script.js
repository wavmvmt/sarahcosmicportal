const planets = [ /* same array as before */ ];

const container = document.getElementById("planet-container");

planets.forEach((planet, index) => {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");

  const radius = 120 + index * 35;
  orbit.style.width = orbit.style.height = `${radius * 2}px`;
  orbit.style.marginLeft = orbit.style.marginTop = `-${radius}px`;
  orbit.style.animation = `orbit ${20 + index * 5}s linear infinite`;
  orbit.style.transform = `rotate(${index * 30}deg)`;

  const el = document.createElement("div");
  el.classList.add("planet");
  el.style.background = planet.color;
  el.textContent = planet.name;

  orbit.appendChild(el);
  container.appendChild(orbit);

  // Create popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <strong>${planet.name}</strong><br>
    <em>${planet.message}</em>
    <ul>${planet.offerings.map(o => `<li>${o}</li>`).join("")}</ul>
    <a href="https://booking-link.com" target="_blank">
      <img src="phone_icon.png" class="phone-icon" title="Book your free 15min call">
    </a>
  `;
  container.appendChild(popup);

  const showPopup = (e) => {
    popup.classList.add("show");
    popup.style.left = `${e.pageX + 10}px`;
    popup.style.top = `${e.pageY - 30}px`;
  };

  const hidePopup = () => popup.classList.remove("show");

  el.addEventListener("mouseenter", showPopup);
  el.addEventListener("mouseleave", hidePopup);

  // Mobile: Click to toggle
  el.addEventListener("click", (e) => {
    if (popup.classList.contains("show")) {
      hidePopup();
    } else {
      showPopup(e);
    }
  });

  el.addEventListener("mousemove", (e) => {
    popup.style.left = `${e.pageX + 10}px`;
    popup.style.top = `${e.pageY - 30}px`;
  });
});

// Add video inside sun
const sun = document.getElementById("sun");
const video = document.createElement("iframe");
video.src = "https://www.youtube.com/embed/fQXZAOBHIKE?start=513";
sun.appendChild(video);
