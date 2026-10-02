import { Resend } from "resend";

// Clé API lue depuis la variable d'environnement RESEND_API_KEY (.env.local, jamais commitée).
export const resend = new Resend(process.env.RESEND_API_KEY);

// Adresse d'envoi par défaut de Resend — à remplacer par un domaine vérifié avant mise en production.
export const CONTACT_FROM_ADDRESS = "Site Émilie Odjouoriby <onboarding@resend.dev>";
