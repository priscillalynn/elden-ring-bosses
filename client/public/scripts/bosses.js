const renderBosses = async () => {
  const response = await fetch("/bosses");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((boss) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${boss.image})`;

      const name = document.createElement("h3");
      name.textContent = boss.name;
      bottomContainer.appendChild(name);

      const health = document.createElement("p");
      health.textContent = "Health: " + boss.health;
      bottomContainer.appendChild(health);

      const type = document.createElement("p");
      type.textContent = "Type: " + boss.type;
      bottomContainer.appendChild(type);

      const link = document.createElement("a");
      link.textContent = "Info";
      link.setAttribute("role", "button");
      link.href = `/bosses/${boss.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Bosses Found 😞";
    mainContent.appendChild(message);    
  }
};

const requestedUrl = window.location.href;
const bossIdRegex = /\/bosses\/(\d+)/; // This regex matches URLs like "/bosses/123", where "123" is the boss ID.

const bossIdMatch = requestedUrl.match(bossIdRegex);

if (bossIdMatch) {
  // A boss ID is present in the URL, so render the boss's information
  renderBosses();
} else {
  // No boss ID is present in the URL, so it's not a specific boss page; you can handle this as needed.
  // For example, you can display a list of all bosses or a homepage.
  renderBosses();
}
