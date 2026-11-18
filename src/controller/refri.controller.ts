
import { type Request, type Response } from "express";
import { refriService } from "../services/refri.service.js";
import type { Criarrefri} from "../types/refri.js";

class RefriController {
  async getAll(req: Request, res: Response) {
    try {
      const refri= await refriService.getAll();
      return res.json(refri);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ erro: "erro" });
    }
  }