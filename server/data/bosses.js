const bosses = [
  {
    id: 1,
    name: "Margit the Fell Omen",
    health: "4,174 HP",
    defense: "103",
    type: "optional",
    image:
      "https://static.wikia.nocookie.net/eldenring/images/d/d0/ER_Margit_Boss.png/revision/latest?cb=20230627194208",
    lore: "Margit is an Omen who gained notoriety during The Shattering, in which he slaughtered countless champions who harbored ambitions for Lordship, stacking high their corpses during the Second Defense of Leyndell.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://videogames.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk0NDYyNDk5MDE2Mjg3OTIx/godrick.webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 3,
    name: "Red Wolf of Radagon",
    health: "2,204 HP",
    defense: "107",
    type: "optional",
    image:
      "https://videogames.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk0NDYyNDk5MDE2Mjg3NzQ5/red-wolf-radagon.webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 4,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 5,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
  {
    id: 2,
    name: "Godrick the Grafted",
    health: "6,080 HP",
    defense: "105",
    type: "optional",
    image:
      "https://assetsio.reedpopcdn.com/elden-ring-godrick.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    lore: "Godrick is a descendant of the Golden Lineage, the bloodline which began with Queen Marika the Eternal and her first consort Godfrey. Only a distant relation of Marika's line, his divine blood was sorely diluted, and he was viewed as the runt of the litter.",
  },
];

export default bosses;
