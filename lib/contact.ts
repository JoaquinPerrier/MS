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
  "Desarrollo de Software a Medida",
  "Branding & Diseño UI/UX",
  "Consultoría Técnica",
  "Otro",
] as const;

export const contactSubjects = [
  { value: "Nuevo Proyecto de Desarrollo", label: "Nuevo Proyecto de Desarrollo" },
  { value: "Estrategia de Branding", label: "Estrategia de Branding" },
  { value: "Oportunidades de Carrera", label: "Oportunidades de Carrera" },
  { value: "Otra Consulta", label: "Otra Consulta" },
] as const;
