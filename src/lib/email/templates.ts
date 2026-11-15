// Templates email HTML pour le diagnostic (envoi via Resend) — aux couleurs de la charte
// graphique d'Émilie. Pas de polices web (non supportées par les clients mail), pile de
// polices système à la place ; inline styles + tableau pour la compatibilité email.

const COLORS = {
  corail: "#F19C7C",
  beigeClair: "#FFEED1",
  encre: "#1F1A15",
  dore: "#A39376",
  white: "#FFFFFF",
};

const FONT_STACK = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function emailShell(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background-color:${COLORS.beigeClair};font-family:${FONT_STACK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.beigeClair};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:600px;background-color:${COLORS.white};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:${COLORS.corail};padding:24px 32px;">
                <p style="margin:0;font-size:22px;font-weight:700;color:${COLORS.encre};">Émilie Odjouoriby</p>
                <p style="margin:4px 0 0;font-size:13px;color:${COLORS.encre};opacity:0.85;">Juriste &amp; coach professionnelle certifiée ICF</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:${COLORS.encre};font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;border-top:1px solid ${COLORS.beigeClair};">
                <p style="margin:0;font-size:12px;color:${COLORS.encre};opacity:0.6;">
                  Email généré automatiquement depuis le questionnaire de pré-diagnostic du site emilieodjouoriby.com.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export interface AnswerRecapRow {
  theme: string;
  question: string;
  answer: string;
}

function renderRecapSections(rows: readonly AnswerRecapRow[]): string {
  const themes = [...new Set(rows.map((row) => row.theme))];

  return themes
    .map((theme) => {
      const rowsForTheme = rows.filter((row) => row.theme === theme);
      const items = rowsForTheme
        .map(
          (row) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${COLORS.beigeClair};">
                  <p style="margin:0;font-size:13px;font-weight:700;color:${COLORS.encre};">${escapeHtml(row.question)}</p>
                  <p style="margin:4px 0 0;font-size:14px;color:${COLORS.encre};opacity:0.85;">${escapeHtml(row.answer)}</p>
                </td>
              </tr>`,
        )
        .join("");

      return `
          <p style="margin:24px 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${COLORS.dore};">${escapeHtml(theme)}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${items}</table>`;
    })
    .join("");
}

interface LeadConfirmationEmailInput {
  fullName: string;
  answers: readonly AnswerRecapRow[];
}

export function buildLeadConfirmationEmail({
  fullName,
  answers,
}: LeadConfirmationEmailInput): string {
  const firstName = fullName.trim().split(/\s+/)[0] ?? fullName;

  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;">Merci ${escapeHtml(firstName)} !</p>
    <p style="margin:0 0 16px;">
      Votre questionnaire de pré-diagnostic a bien été transmis à Émilie Odjouoriby.
      Elle revient vers vous très prochainement pour échanger sur vos réponses.
    </p>
    <p style="margin:0 0 8px;">Voici un récapitulatif de vos réponses, pour vos archives :</p>
    ${renderRecapSections(answers)}
  `;

  return emailShell(body);
}

interface EmilieNotificationEmailInput {
  fullName: string;
  companyName: string;
  siret: string;
  email: string;
  phone: string;
  answers: readonly AnswerRecapRow[];
}

export function buildEmilieNotificationEmail({
  fullName,
  companyName,
  siret,
  email,
  phone,
  answers,
}: EmilieNotificationEmailInput): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;">Nouveau pré-diagnostic reçu</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.beigeClair};border-radius:8px;">
      <tr>
        <td style="padding:16px 20px;">
          <p style="margin:0 0 6px;"><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
          <p style="margin:0 0 6px;"><strong>Entreprise :</strong> ${escapeHtml(companyName)}</p>
          <p style="margin:0 0 6px;"><strong>SIRET :</strong> ${escapeHtml(siret)}</p>
          <p style="margin:0 0 6px;"><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p style="margin:0;"><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
        </td>
      </tr>
    </table>
    <p style="margin:24px 0 8px;font-weight:700;">Réponses au questionnaire :</p>
    ${renderRecapSections(answers)}
  `;

  return emailShell(body);
}
