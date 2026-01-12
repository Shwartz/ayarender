import { optional, z } from "zod";

export const contactSchema = z.object({
  communication: z.string().min(1, "Message is required").max(5000),
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(), // Honeypot field
});
