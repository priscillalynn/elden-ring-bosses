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
            defense VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            lore TEXT NOT NULL
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
      text: "INSERT INTO bosses (name, health, defense, type, image, lore) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      boss.name,
      boss.health,
      boss.defense,
      boss.type,
      boss.image,
      boss.lore,
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