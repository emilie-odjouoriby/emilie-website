import { Resend } from "resend";

// Clé API lue depuis la variable d'environnement RESEND_API_KEY (.env.local, jamais commitée).
export const resend = new Resend(process.env.RESEND_API_KEY);

// Domaine emilieodjouoriby.com vérifié sur Resend (DKIM/SPF/DMARC) — n'interfère pas
// avec les emails IONOS existants (infrastructure d'envoi isolée sur le sous-domaine "send").
export const CONTACT_FROM_ADDRESS = "Site Émilie Odjouoriby <site@emilieodjouoriby.com>";
