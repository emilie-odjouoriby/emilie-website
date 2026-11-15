"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useForm, type FieldErrors } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { DIAGNOSTIC_STEPS } from "@/lib/diagnostic/questions";
import {
  diagnosticSchema,
  type DiagnosticFormValues,
} from "@/lib/validation/diagnostic";
import {
  submitDiagnosticForm,
  type DiagnosticActionResult,
} from "@/app/(marketing)/diagnostic/actions";

type Status = "form" | "success";

const FIELD_CLASSES =
  "mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre";
const ERROR_CLASSES = "mt-1 text-xs text-corail";
const LABEL_CLASSES = "text-sm font-medium text-encre";

// Étape 0 = informations de contact, puis une étape par thème du questionnaire.
const TOTAL_STEPS = DIAGNOSTIC_STEPS.length + 1;

const DEFAULT_VALUES: Omit<DiagnosticFormValues, "renderedAt"> = {
  fullName: "",
  companyName: "",
  siret: "",
  email: "",
  phone: "",
  answers: Object.fromEntries(
    DIAGNOSTIC_STEPS.flatMap((step) =>
      step.questions.map((question) => [
        question.id,
        question.type === "multiple" ? [] : "",
      ]),
    ),
  ),
  hpField: false,
};

const SUBMIT_TIMEOUT_MS = 20000;
const TIMEOUT_RESULT: DiagnosticActionResult = {
  success: false,
  formError:
    "L'envoi prend trop de temps. Vérifiez votre connexion et réessayez, ou contactez-moi directement.",
};

// Empêche le bouton de rester bloqué indéfiniment si le server action ne répond jamais.
function withTimeout(
  action: Promise<DiagnosticActionResult>,
): Promise<DiagnosticActionResult> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(TIMEOUT_RESULT), SUBMIT_TIMEOUT_MS);
    action.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(TIMEOUT_RESULT);
      },
    );
  });
}

// Chemins des champs (format react-hook-form) à valider avant de passer à l'étape suivante.
function fieldsForStep(stepIndex: number): string[] {
  if (stepIndex === 0) {
    return ["fullName", "companyName", "siret", "email", "phone"];
  }

  const step = DIAGNOSTIC_STEPS[stepIndex - 1];
  return step ? step.questions.map((question) => `answers.${question.id}`) : [];
}

export function DiagnosticForm() {
  const [status, setStatus] = useState<Status>("form");
  const [stepIndex, setStepIndex] = useState(0);
  const [formError, setFormError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormValues>({
    defaultValues: { ...DEFAULT_VALUES, renderedAt },
  });

  async function goNext() {
    const valid = await trigger(
      fieldsForStep(stepIndex) as Parameters<typeof trigger>[0],
    );
    if (valid) {
      setStepIndex((index) => Math.min(index + 1, TOTAL_STEPS - 1));
    }
  }

  function goBack() {
    setStepIndex((index) => Math.max(index - 1, 0));
  }

  async function onSubmit(values: DiagnosticFormValues) {
    setFormError(null);

    const parsed = diagnosticSchema.safeParse(values);
    if (!parsed.success) {
      setFormError(
        "Le formulaire n'a pas pu être envoyé. Merci de vérifier vos réponses et de réessayer.",
      );
      return;
    }

    const result = await withTimeout(submitDiagnosticForm(parsed.data));

    if (!result.success) {
      setFormError(
        result.formError ?? "Une erreur est survenue, merci de réessayer.",
      );
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg bg-white p-8 text-center shadow-soft md:p-10"
      >
        <h2 className="font-display text-2xl text-encre">
          Merci, vos réponses ont bien été transmises
        </h2>
        <p className="mt-4 text-encre/80">
          Émilie revient vers vous très prochainement pour échanger sur votre
          situation. Vous recevez également un email récapitulatif de vos
          réponses.
        </p>
      </div>
    );
  }

  const progressPercent = ((stepIndex + 1) / TOTAL_STEPS) * 100;
  const currentQuestions =
    stepIndex === 0 ? null : DIAGNOSTIC_STEPS[stepIndex - 1];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg bg-white p-8 shadow-soft md:p-10"
    >
      <input
        type="hidden"
        {...register("renderedAt", { valueAsNumber: true })}
      />
      {/* Honeypot anti-spam : case à cocher cachée, jamais cochée par un humain. */}
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <input
          type="checkbox"
          tabIndex={-1}
          autoComplete="off"
          {...register("hpField")}
        />
      </div>

      <div
        role="progressbar"
        aria-valuenow={stepIndex + 1}
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-label={`Étape ${stepIndex + 1} sur ${TOTAL_STEPS}`}
        className="h-2 w-full overflow-hidden rounded-pill bg-beige-clair"
      >
        <div
          className="h-full rounded-pill bg-corail transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-encre/60">
        Étape {stepIndex + 1} sur {TOTAL_STEPS}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stepIndex}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, x: -12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-6"
        >
          {stepIndex === 0 ? (
            <fieldset className="space-y-5 border-0 p-0">
              <legend className="font-display text-xl text-encre">
                Vos coordonnées
              </legend>
              <p className="text-xs text-encre/60">
                Les champs marqués d&apos;un{" "}
                <span className="text-corail">*</span> sont obligatoires.
              </p>
              <div>
                <label htmlFor="fullName" className={LABEL_CLASSES}>
                  Prénom et nom{" "}
                  <span className="text-corail" aria-hidden>
                    *
                  </span>
                  <span className="sr-only"> (obligatoire)</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={FIELD_CLASSES}
                  aria-invalid={!!errors.fullName}
                  {...register("fullName", {
                    required: "Merci d'indiquer votre prénom et nom.",
                  })}
                />
                {errors.fullName ? (
                  <p className={ERROR_CLASSES}>{errors.fullName.message}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="companyName" className={LABEL_CLASSES}>
                  Nom de l&apos;entreprise{" "}
                  <span className="text-corail" aria-hidden>
                    *
                  </span>
                  <span className="sr-only"> (obligatoire)</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  className={FIELD_CLASSES}
                  aria-invalid={!!errors.companyName}
                  {...register("companyName", {
                    required: "Merci d'indiquer le nom de l'entreprise.",
                  })}
                />
                {errors.companyName ? (
                  <p className={ERROR_CLASSES}>{errors.companyName.message}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="siret" className={LABEL_CLASSES}>
                  SIRET de l&apos;entreprise{" "}
                  <span className="font-normal text-encre/50">(optionnel)</span>
                </label>
                <input
                  id="siret"
                  type="text"
                  inputMode="numeric"
                  className={FIELD_CLASSES}
                  aria-invalid={!!errors.siret}
                  {...register("siret", {
                    validate: (value) =>
                      !value ||
                      /^\d{14}$/.test(value.replace(/\s/g, "")) ||
                      "Le SIRET doit comporter 14 chiffres.",
                  })}
                />
                {errors.siret ? (
                  <p className={ERROR_CLASSES}>{errors.siret.message}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className={LABEL_CLASSES}>
                  Email{" "}
                  <span className="text-corail" aria-hidden>
                    *
                  </span>
                  <span className="sr-only"> (obligatoire)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={FIELD_CLASSES}
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Merci d'indiquer une adresse email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Merci d'indiquer une adresse email valide.",
                    },
                  })}
                />
                {errors.email ? (
                  <p className={ERROR_CLASSES}>{errors.email.message}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className={LABEL_CLASSES}>
                  Téléphone{" "}
                  <span className="text-corail" aria-hidden>
                    *
                  </span>
                  <span className="sr-only"> (obligatoire)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={FIELD_CLASSES}
                  aria-invalid={!!errors.phone}
                  {...register("phone", {
                    required: "Merci d'indiquer un numéro de téléphone.",
                  })}
                />
                {errors.phone ? (
                  <p className={ERROR_CLASSES}>{errors.phone.message}</p>
                ) : null}
              </div>
            </fieldset>
          ) : (
            <fieldset className="space-y-8 border-0 p-0">
              <legend className="font-display text-xl text-encre">
                {currentQuestions?.theme}
              </legend>
              {currentQuestions?.questions.map((question) => {
                const fieldErrors = errors.answers as
                  | FieldErrors<Record<string, unknown>>
                  | undefined;
                const questionError = fieldErrors?.[question.id]?.message as
                  | string
                  | undefined;

                return (
                  <div key={question.id}>
                    <p className={LABEL_CLASSES}>{question.label}</p>
                    <div className="mt-3 space-y-2">
                      {question.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 text-sm text-encre/90"
                        >
                          <input
                            type={
                              question.type === "multiple"
                                ? "checkbox"
                                : "radio"
                            }
                            value={option.value}
                            className="h-4 w-4 shrink-0 accent-corail"
                            {...register(
                              `answers.${question.id}` as "answers.q1",
                              question.type === "multiple"
                                ? {
                                    validate: (value) =>
                                      (Array.isArray(value) &&
                                        value.length > 0) ||
                                      "Merci de sélectionner au moins une réponse.",
                                  }
                                : {
                                    required:
                                      "Merci de sélectionner une réponse.",
                                  },
                            )}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                    {questionError ? (
                      <p className={ERROR_CLASSES}>{questionError}</p>
                    ) : null}
                  </div>
                );
              })}
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      {formError ? (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-6 text-sm text-corail"
        >
          {formError}
        </p>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <Button type="button" variant="ghost" onClick={goBack}>
            Précédent
          </Button>
        ) : (
          <span />
        )}

        {stepIndex < TOTAL_STEPS - 1 ? (
          <Button type="button" onClick={goNext}>
            Suivant
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours…" : "Envoyer mes réponses"}
          </Button>
        )}
      </div>
    </form>
  );
}
