const renderBoss = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/bosses");
  const data = await response.json();
  const bossContent = document.getElementById("boss-content");
  let boss = data.find((boss) => boss.id === requestedID);

  if (boss) {
    document.getElementById("image").src = boss.image;
    document.getElementById("name").textContent = boss.name;
    document.getElementById("health").textContent = boss.health;
    document.getElementById("defense").textContent = boss.defense;
    document.getElementById("type").textContent = boss.type;
    document.getElementById("lore").textContent = boss.lore;
    document.title = `Elden Ring Bosses - ${boss.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Boss Found 😞";
    bossContent.appendChild(message);
  }
};

renderBoss();
