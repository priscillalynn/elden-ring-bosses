const renderBoss = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/bosses");
  const data = await response.json();

  const bossContent = document.getElementById("boss-content");

  let boss;

  boss = data.find((boss) => boss.id === requestedID);

  if (boss) {
    document.getElementById("image").src = boss.image;
    document.getElementById("name").textContent = boss.name;
    /*
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + gift.submittedBy;
    document.getElementById("pricePoint").textContent =
      "Price: " + gift.pricePoint;
    document.getElementById("audience").textContent =
      "Great For: " + gift.audience;
    document.getElementById("description").textContent = gift.description;
    document.title = `UnEarthed - ${gift.name}`;
    */
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Boss Found 😞";
    bossContent.appendChild(message);
  }
};

renderBoss();
