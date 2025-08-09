import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  message: z.string().min(10, "Minimal 10 karakter"),
});

export type ContactInput = z.infer<typeof contactSchema>;
