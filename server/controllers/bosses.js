import { pool } from "../config/database.js";
import BossModel from "../models/boss.js";


class BossController {
static getBosses = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM bosses ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};


static getBossById = async (req, res) => {
  const { bossId } = req.params;
  console.log("Received boss ID:", bossId);

  try {
    const results = await pool.query("SELECT * FROM bosses WHERE id = $1", [
      bossId,
    ]);

    if (results.rows.length === 0) {
      res.status(404).json({ error: "Boss not found" });
    } else {
      console.log("Boss Data:", results.rows[0]);
      res.status(200).json(results.rows[0]);
    }
  } catch (error) {
    console.error("Error fetching boss data:", error);
    res.status(500).json({ error: error.message });
  }
};

/*
static getBossById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Boss ID is undefined.' });
  }

  try {
    const results = await pool.query("SELECT * FROM bosses WHERE id = $1", [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/

static getBossByName = async (req, res) => {
  const { name } = req.params;
  try {
    const results = await pool.query("SELECT * FROM bosses WHERE name = $1", [
      name
    ]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

static createBoss = async (req, res) => {
  const { name, health, defense, type, image, lore, location, level, insight, reward } = req.body;

  try {
    const results = await pool.query(
      "INSERT INTO bosses (name, health, defense, type, image, lore, location, level, insight, reward) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [name, health, defense, type, image, lore, location, level, insight, reward]
    );
    res.status(201).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

static updateBoss = async (req, res) => {
  const { bossId } = req.params;
  const { name, health, defense, type, image, lore, location, level, insight, reward } = req.body;

  try {
    const results = await pool.query(
      "UPDATE bosses SET name = $1, health = $2, defense = $3, type = $4, image = $5, lore = $6, location = $7, level = $8, insight = $9, reward = $10 WHERE id = $11 RETURNING *",
      [name, health, defense, type, image, lore, location, level, insight, reward, bossId]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

static deleteBoss = async (req, res) => {
  const { bossId } = req.params;
  try {
    const results = await pool.query("DELETE FROM bosses WHERE id = $1", [bossId]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
}

export default BossController;