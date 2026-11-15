import { z } from "zod";
import { ALL_QUESTIONS } from "@/lib/diagnostic/questions";

// Schéma des réponses construit dynamiquement à partir du contenu des questions
// (src/lib/diagnostic/questions.ts) — une seule source de vérité, jamais dupliquée.
const answersShape = Object.fromEntries(
  ALL_QUESTIONS.map((question) => {
    const values = question.options.map((option) => option.value) as [
      string,
      ...string[],
    ];

    const field =
      question.type === "multiple"
        ? z
            .array(z.enum(values))
            .min(1, "Merci de sélectionner au moins une réponse.")
        : z.enum(values, { message: "Merci de sélectionner une réponse." });

    return [question.id, field];
  }),
);

export const diagnosticAnswersSchema = z.object(answersShape);

export const diagnosticIdentificationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre prénom et nom.")
    .max(120, "Ce nom est trop long."),
  companyName: z
    .string()
    .trim()
    .min(1, "Merci d'indiquer le nom de l'entreprise.")
    .max(150, "Ce nom est trop long."),
  // Optionnel : peu de dirigeants connaissent ce numéro par cœur, Émilie peut le redemander plus tard.
  siret: z
    .string()
    .trim()
    .transform((value) => value.replace(/\s/g, ""))
    .refine((value) => value === "" || /^\d{14}$/.test(value), {
      message: "Le SIRET doit comporter 14 chiffres.",
    }),
  email: z.string().trim().email("Merci d'indiquer une adresse email valide."),
  phone: z
    .string()
    .trim()
    .min(6, "Merci d'indiquer un numéro de téléphone valide.")
    .max(20, "Ce numéro est trop long."),
});

export const diagnosticSchema = diagnosticIdentificationSchema.extend({
  answers: diagnosticAnswersSchema,
  // Honeypot : case à cocher cachée, jamais cochée par un humain (voir ContactForm).
  hpField: z.boolean().optional(),
  // Horodatage d'affichage du formulaire, pour détecter les soumissions trop rapides (bots).
  renderedAt: z.number(),
});

export type DiagnosticFormValues = z.infer<typeof diagnosticSchema>;
export type DiagnosticIdentification = z.infer<
  typeof diagnosticIdentificationSchema
>;
export type DiagnosticAnswers = z.infer<typeof diagnosticAnswersSchema>;
