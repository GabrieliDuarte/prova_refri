import type { CriarRefri } from "../types/refri.js";
import { knex } from "../database/knex.js";

class RefriRepositorie {
  async getAll() {
    const refri = await knex("refri").select("*").returning("*");
    return refri;
  }
}
export const refrirepositories = new RefriRepositorie
