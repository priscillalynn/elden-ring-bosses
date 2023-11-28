import { pool } from './database.js';
import './dotenv.js';
import bosses from '../data/bosses.js';

const createBossesTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS bosses;

        CREATE TABLE IF NOT EXISTS bosses (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            health VARCHAR(255) NOT NULL,
            defense INT NOT NULL,
            type VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            lore TEXT NOT NULL
            location VARCHAR(255) NOT NULL,
            level INT NOT NULL,
            insight VARCHAR(255) NOT NULL,
            reward VARCHAR(255) NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 bosses table created successfully");
  } catch (err) {
    console.error("⚠️ error creating bosses table", err);
  }
};

const seedBossesTable = async () => {
  await createBossesTable();

  bosses.forEach((boss) => {
    const insertQuery = {
      text: "INSERT INTO bosses (name, health, defense, type, image, lore, location, level, insight, reward) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    };

    const values = [
      boss.name,
      boss.health,
      boss.defense,
      boss.type,
      boss.image,
      boss.lore,
      boss.location,
      boss.level,
      boss.insight,
      boss.reward
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting boss", err);
        return;
      }

      console.log(`✅ ${boss.name} added successfully`);
    });
  });
};

seedBossesTable();