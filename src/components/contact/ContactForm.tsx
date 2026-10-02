"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SUBJECT_OPTIONS } from "@/constants/contact";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { submitContactForm } from "@/app/(marketing)/contact/actions";

type Status = "idle" | "success";

const FIELD_CLASSES =
  "mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre";
const ERROR_CLASSES = "mt-1 text-xs text-corail";

const DEFAULT_VALUES: Omit<ContactFormValues, "renderedAt"> = {
  name: "",
  phone: "",
  email: "",
  subject: SUBJECT_OPTIONS[0].value,
  message: "",
  website: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  // Initialiseur paresseux : Date.now() n'est appelé qu'une fois, au montage (pas à chaque rendu).
  const [renderedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { ...DEFAULT_VALUES, renderedAt },
  });

  async function onSubmit(values: ContactFormValues) {
    setFormError(null);

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      for (const [field, messages] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (messages?.[0]) {
          setError(field as keyof ContactFormValues, { message: messages[0] });
        }
      }
      return;
    }

    const result = await submitContactForm(parsed.data);

    if (!result.success) {
      if (result.fieldErrors) {
        for (const [field, messages] of Object.entries(result.fieldErrors)) {
          if (messages?.[0]) {
            setError(field as keyof ContactFormValues, { message: messages[0] });
          }
        }
      }
      setFormError(
        result.formError ?? "Une erreur est survenue, merci de réessayer.",
      );
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-lg bg-white p-8 shadow-soft md:p-10">
        <Eyebrow index="02">Premier contact</Eyebrow>
        <h3 className="mt-4 font-display text-xl text-encre">Message envoyé</h3>
        <p className="mt-2 text-sm leading-relaxed text-encre/80">
          Merci, votre message a bien été envoyé. Je reviens vers vous dès que possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg bg-white p-8 shadow-soft md:p-10"
    >
      <Eyebrow index="02">Premier contact</Eyebrow>

      <input type="hidden" {...register("renderedAt", { valueAsNumber: true })} />
      {/* Honeypot anti-spam : champ invisible pour un humain, souvent rempli par les bots. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Laisser vide</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-encre">
            Nom et prénom
          </label>
          <input
            id="name"
            type="text"
            className={FIELD_CLASSES}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className={ERROR_CLASSES}>
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-encre">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className={FIELD_CLASSES}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className={ERROR_CLASSES}>
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-medium text-encre">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={FIELD_CLASSES}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className={ERROR_CLASSES}>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="text-sm font-medium text-encre">
          Objet de votre demande
        </label>
        <select id="subject" className={FIELD_CLASSES} {...register("subject")}>
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-encre">
          Votre message
        </label>
        <textarea
          id="message"
          rows={5}
          className={FIELD_CLASSES}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className={ERROR_CLASSES}>
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p role="alert" aria-live="assertive" className="mt-4 text-sm text-corail">
          {formError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="mt-6 w-full">
        {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
