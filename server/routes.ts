import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Basic validation
      if (!validatedData.name || validatedData.name.trim().length < 2) {
        return res.status(400).json({ 
          message: "Nome deve ter pelo menos 2 caracteres." 
        });
      }
      
      if (!validatedData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validatedData.email)) {
        return res.status(400).json({ 
          message: "Por favor, forneça um email válido." 
        });
      }
      
      if (!validatedData.message || validatedData.message.trim().length < 10) {
        return res.status(400).json({ 
          message: "Mensagem deve ter pelo menos 10 caracteres." 
        });
      }

      // Store contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      res.status(200).json({ 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Dados inválidos fornecidos.",
          errors: error.errors
        });
      }
      
      res.status(500).json({ 
        message: "Erro interno do servidor. Tente novamente mais tarde." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
