// Email de réception des demandes de contact (Resend) — pas un secret, contrairement à la clé API.
export const CONTACT_RECIPIENT_EMAIL = "eodjouoriby.coaching@gmail.com";

export const SUBJECT_OPTIONS = [
  { value: "ceder-transmettre", label: "Céder ou transmettre mon entreprise" },
  { value: "reprendre", label: "Reprendre une entreprise" },
  { value: "coaching-associes", label: "Coaching d'associés" },
  { value: "coaching-individuel", label: "Coaching individuel" },
  { value: "autre", label: "Autre demande" },
] as const;
