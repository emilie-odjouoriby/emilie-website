import { z } from "zod";
import { SUBJECT_OPTIONS } from "@/constants/contact";

const SUBJECT_VALUES = SUBJECT_OPTIONS.map((option) => option.value) as [
  string,
  ...string[],
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom et prénom.")
    .max(120, "Ce nom est trop long."),
  phone: z.string().trim().max(20, "Ce numéro est trop long.").optional().or(z.literal("")),
  email: z.string().trim().email("Merci d'indiquer une adresse email valide."),
  subject: z.enum(SUBJECT_VALUES, {
    message: "Merci de sélectionner un objet.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Votre message mérite quelques mots de plus.")
    .max(4000, "Ce message est trop long."),
  // Honeypot : doit rester vide, les humains ne voient pas ce champ.
  website: z.string().max(0).optional().or(z.literal("")),
  // Horodatage d'affichage du formulaire, pour détecter les soumissions trop rapides (bots).
  renderedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
