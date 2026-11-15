"use server";

import { diagnosticSchema } from "@/lib/validation/diagnostic";
import { DIAGNOSTIC_STEPS, getOptionLabel } from "@/lib/diagnostic/questions";
import { resend, CONTACT_FROM_ADDRESS } from "@/lib/email/resend";
import { CONTACT_RECIPIENT_EMAIL } from "@/constants/contact";
import {
  buildEmilieNotificationEmail,
  buildLeadConfirmationEmail,
  type AnswerRecapRow,
} from "@/lib/email/templates";

// Rejet silencieux (succès factice) pour ne pas indiquer aux bots que leur soumission a été détectée.
const SILENT_SUCCESS = { success: true as const };
// Anti-spam minimal sans infrastructure supplémentaire : un humain ne remplit jamais
// le questionnaire en moins de 5 secondes après son affichage (plus long que le formulaire
// de contact simple, vu le nombre de questions).
const MIN_SUBMIT_DELAY_MS = 5000;

export interface DiagnosticActionResult {
  success: boolean;
  fieldErrors?: Record<string, string[]>;
  formError?: string;
}

function buildAnswersRecap(
  answers: Record<string, string | string[]>,
): AnswerRecapRow[] {
  return DIAGNOSTIC_STEPS.flatMap((step) =>
    step.questions.map((question) => {
      const value = answers[question.id] ?? "";
      const answerLabel = Array.isArray(value)
        ? value.map((v) => getOptionLabel(question.id, v)).join(", ")
        : getOptionLabel(question.id, value);

      return {
        theme: step.theme,
        question: question.label,
        answer: answerLabel,
      };
    }),
  );
}

export async function submitDiagnosticForm(
  input: unknown,
): Promise<DiagnosticActionResult> {
  const parsed = diagnosticSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const {
    fullName,
    companyName,
    siret,
    email,
    phone,
    answers,
    hpField,
    renderedAt,
  } = parsed.data;

  if (hpField || Date.now() - renderedAt < MIN_SUBMIT_DELAY_MS) {
    return SILENT_SUCCESS;
  }

  const recap = buildAnswersRecap(answers);

  try {
    await Promise.all([
      resend.emails.send({
        from: CONTACT_FROM_ADDRESS,
        to: CONTACT_RECIPIENT_EMAIL,
        replyTo: email,
        subject: `Nouveau pré-diagnostic — ${companyName}`,
        html: buildEmilieNotificationEmail({
          fullName,
          companyName,
          siret: siret || "Non renseigné",
          email,
          phone,
          answers: recap,
        }),
      }),
      resend.emails.send({
        from: CONTACT_FROM_ADDRESS,
        to: email,
        subject: "Votre pré-diagnostic a bien été reçu",
        html: buildLeadConfirmationEmail({ fullName, answers: recap }),
      }),
    ]);

    return { success: true };
  } catch {
    return {
      success: false,
      formError:
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de me contacter directement.",
    };
  }
}
