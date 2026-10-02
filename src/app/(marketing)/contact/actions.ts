"use server";

import { contactSchema } from "@/lib/validation/contact";
import { resend, CONTACT_FROM_ADDRESS } from "@/lib/email/resend";
import { CONTACT_RECIPIENT_EMAIL, SUBJECT_OPTIONS } from "@/constants/contact";

// Rejet silencieux (succès factice) pour ne pas indiquer aux bots que leur soumission a été détectée.
const SILENT_SUCCESS = { success: true as const };
// Anti-spam minimal sans infrastructure supplémentaire : un humain ne remplit jamais
// le formulaire en moins de 2 secondes après son affichage.
const MIN_SUBMIT_DELAY_MS = 2000;

export interface ContactActionResult {
  success: boolean;
  fieldErrors?: Record<string, string[]>;
  formError?: string;
}

export async function submitContactForm(input: unknown): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const { name, phone, email, subject, message, website, renderedAt } = parsed.data;

  if (website || Date.now() - renderedAt < MIN_SUBMIT_DELAY_MS) {
    return SILENT_SUCCESS;
  }

  const subjectLabel =
    SUBJECT_OPTIONS.find((option) => option.value === subject)?.label ?? subject;

  try {
    await resend.emails.send({
      from: CONTACT_FROM_ADDRESS,
      to: CONTACT_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouveau message du site — ${subjectLabel}`,
      text: [
        `Nom : ${name}`,
        `Téléphone : ${phone || "non renseigné"}`,
        `Email : ${email}`,
        `Objet : ${subjectLabel}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    return { success: true };
  } catch {
    return {
      success: false,
      formError:
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de me contacter directement.",
    };
  }
}
