import { z } from "zod";

export const contactSchema = z.object({
  communication: z.string().min(10),
  email: z.string().email(),
  name: z.string().max(100),
});
