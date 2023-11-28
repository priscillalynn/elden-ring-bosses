import { pool } from "../config/database.js";

class BossModel {
  static getAll = async () => {
    const selectQuery = `
        SELECT *
        FROM bosses
        ORDER BY name, health, defense, type, image, lore, location, level, insight, reward;
    `;

    const results = await pool.query(selectQuery);
    return results.rows;
  };

  static getOneById = async (bossId) => {
    const selectQuery = `
        SELECT *
        FROM bosses
        WHERE id = $1;
    `;

    const results = await pool.query(selectQuery, [bossId]);
    return results.rows[0];
  };

  static getOneByName = async (bossName) => {
    const selectQuery = `
        SELECT *
        FROM bosses
        WHERE name ILIKE $1;
    `;

    const results = await pool.query(selectQuery, [bossName]);
    return results.rows[0];
  };

  static deleteOne = async (bossId) => {
    const deleteQuery = `
        DELETE FROM bosses
        WHERE id = $1
        RETURNING *;
    `;

    const results = await pool.query(deleteQuery, [bossId]);
    return results.rows[0];
  };

  static createOne = async (bosses) => {
    const {
      name,
      health,
      defense,
      type,
      image,
      lore,
      location,
      level,
      insight,
      reward
    } = bosses;

    const insertQuery = `
        INSERT INTO product (
          name,
          health,
          defense,
          type,
          image,
          lore,
          location,
          level,
          insight,
          reward
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
    `;

    const results = await pool.query(insertQuery, [
      name,
      health,
      defense,
      type,
      image,
      lore,
      location,
      level,
      insight,
      reward
    ]);

    return results.rows[0];
  };

  static updateOne = async (bossId, bosses) => {
    const { name, health, defense, type, image, lore, location, level, insight, reward } = bosses;

    const updateQuery = `
        UPDATE bosses
        SET name = $1,
            health = $2,
            defense = $3,
            type = $4,
            image = $5,
            lore = $6
            location = $7,
            level = $8,
            insight = $9,
            reward = $10
        WHERE id = $11
        RETURNING *;
    `;

    const results = await pool.query(updateQuery, [
      name,
      health,
      defense,
      type,
      image,
      lore,
      location,
      level,
      insight,
      reward
    ]);

    return results.rows[0];
  };
}

export default BossModel;
