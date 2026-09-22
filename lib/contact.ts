import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z.string().trim().email("Ingresá un correo válido"),
  subject: z.string().min(1, "Seleccioná un asunto"),
  message: z
    .string()
    .trim()
    .min(10, "Contanos un poco más (mínimo 10 caracteres)")
    .max(4000, "El mensaje es demasiado largo"),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const homeSubjects = [
  "Desarrollo de software a medida",
  "Marca y diseño de interfaces",
  "Consultoría técnica",
  "Otro",
] as const;

export const contactSubjects = [
  { value: "Nuevo proyecto de desarrollo", label: "Nuevo proyecto de desarrollo" },
  { value: "Estrategia de marca", label: "Estrategia de marca" },
  { value: "Oportunidades laborales", label: "Oportunidades laborales" },
  { value: "Otra consulta", label: "Otra consulta" },
] as const;
