import { optional, z } from "zod";

export const contactSchema = z.object({
  communication: z.string().min(1).max(5000),
  email: z.string().email(),
  name: z.string().optional()
});
