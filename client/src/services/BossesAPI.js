/*import axios from "axios";

class BossesAPI {
  static async getBosses() {
    try {
      const response = await axios.get("/bosses");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBossById(bossId) {
    try {
      const response = await axios.get(`/bosses/${bossId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBossByName(bossName) {
    try {
      const response = await axios.get(`/bosses/${bossName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async createBoss(bosses) {
    try {
      const response = await axios.post("/bosses", bosses);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBoss(bossId, bosses) {
    try {
      const response = await axios.put(`/bosses/${bossId}`, bosses);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBoss(bossId) {
    try {
      const response = await axios.delete(`/bosses/${bossId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default BossesAPI;
*/

import axios from "axios";

class BossesAPI {
  static async getBosses() {
    try {
      const response = await axios.get("/bosses");
      return response.data;
    } catch (error) {
      console.error("Error fetching bosses:", error);
      throw error; // Rethrow the error for better error handling in the calling code
    }
  }

  static async getBossById(bossId) {
    try {
      const response = await axios.get(`/bosses/${bossId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching boss with ID ${bossId}:`, error);
      throw error;
    }
  }

  static async getBossByName(bossName) {
    try {
      const response = await axios.get(`/bosses?name=${bossName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching boss with name ${bossName}:`, error);
      throw error;
    }
  }

  static async createBoss(boss) {
    try {
      const response = await axios.post("/bosses", boss);
      return response.data;
    } catch (error) {
      console.error("Error creating boss:", error);
      throw error;
    }
  }

  static async updateBoss(bossId, boss) {
    try {
      const response = await axios.put(`/bosses/${bossId}`, boss);
      return response.data;
    } catch (error) {
      console.error(`Error updating boss with ID ${bossId}:`, error);
      throw error;
    }
  }

  static async deleteBoss(bossId) {
    try {
      const response = await axios.delete(`/bosses/${bossId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting boss with ID ${bossId}:`, error);
      throw error;
    }
  }
}

export default BossesAPI;
