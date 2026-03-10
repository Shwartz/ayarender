import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(200).optional(),
  projectType: z.enum([
    "general",
    "3d-visuals",
    "layouts-drawings",
    "floor-plans",
    "elevations"
  ], {
    errorMap: () => ({ message: "Please select a project type" })
  }),
  communication: z.string().min(1, "Message is required").max(5000),
  name: z.string(), // Honeypot field - should remain empty
});

export type ContactForm = z.infer<typeof contactSchema>;

