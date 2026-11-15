// Contenu du "Questionnaire de pré-diagnostic express" fourni par Émilie (Word).
// Source de vérité unique : la validation Zod et l'UI multi-étapes se construisent
// à partir de cette structure, rien n'est codé en dur dans le JSX.

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  label: string;
  /** "single" = une seule réponse (radio), "multiple" = plusieurs réponses possibles (cases à cocher). */
  type: "single" | "multiple";
  options: readonly QuestionOption[];
}

export interface DiagnosticStep {
  id: string;
  theme: string;
  questions: readonly Question[];
}

export const DIAGNOSTIC_INTRO =
  "Ce questionnaire de 20 questions demande entre 5 et 10 minutes. Il me permet d'avoir une première vision de votre entreprise et de votre projet. À l'issue de nos échanges, je pourrai vous proposer un diagnostic plus approfondi.";

export const DIAGNOSTIC_OUTRO =
  "Merci pour le temps que vous avez consacré à ce questionnaire. Je reviens vers vous rapidement pour échanger sur vos réponses.";

export const DIAGNOSTIC_STEPS: readonly DiagnosticStep[] = [
  {
    id: "entreprise",
    theme: "Votre entreprise",
    questions: [
      {
        id: "q1",
        label: "Combien de salariés compte l'entreprise ?",
        type: "single",
        options: [
          { value: "aucun", label: "Aucun salarié" },
          { value: "1-9", label: "De 1 à 9 salariés" },
          { value: "10-49", label: "De 10 à 49 salariés" },
          { value: "50-249", label: "De 50 à 249 salariés" },
          { value: "250+", label: "250 salariés et plus" },
        ],
      },
      {
        id: "q2",
        label: "Depuis combien d'années l'entreprise existe-t-elle ?",
        type: "single",
        options: [
          { value: "moins-5", label: "Moins de 5 ans" },
          { value: "5-10", label: "De 5 à 10 ans" },
          { value: "10-20", label: "De 10 à 20 ans" },
          { value: "plus-20", label: "Plus de 20 ans" },
        ],
      },
    ],
  },
  {
    id: "activite-marche",
    theme: "Activité et marché",
    questions: [
      {
        id: "q3",
        label:
          "Comment a évolué le chiffre d'affaires sur les trois derniers exercices ?",
        type: "single",
        options: [
          {
            value: "hausse-forte",
            label: "Hausse de plus de 10 % par an en moyenne",
          },
          {
            value: "hausse-moderee",
            label: "Hausse de 3 % à 10 % par an en moyenne",
          },
          { value: "stable", label: "Stable, entre −3 % et +3 % par an" },
          {
            value: "baisse-moderee",
            label: "Baisse de 3 % à 10 % par an en moyenne",
          },
          {
            value: "baisse-forte",
            label: "Baisse de plus de 10 % par an en moyenne",
          },
        ],
      },
      {
        id: "q4",
        label:
          "Quelle part du chiffre d'affaires est réalisée avec votre premier client ?",
        type: "single",
        options: [
          { value: "moins-10", label: "Moins de 10 %" },
          { value: "10-30", label: "De 10 % à 30 %" },
          { value: "30-50", label: "De 30 % à 50 %" },
          { value: "plus-50", label: "Plus de 50 %" },
          { value: "ne-sais-pas", label: "Je ne l'ai pas calculée" },
        ],
      },
    ],
  },
  {
    id: "associes-gouvernance",
    theme: "Associés et gouvernance",
    questions: [
      {
        id: "q5",
        label: "Comment se passent les relations entre associés ?",
        type: "single",
        options: [
          { value: "sans-desaccord", label: "Pas de désaccord notable" },
          {
            value: "desaccords-ponctuels",
            label: "Des désaccords ponctuels, réglés par la discussion",
          },
          {
            value: "desaccords-recurrents",
            label:
              "Des désaccords récurrents, qui freinent certaines décisions",
          },
          {
            value: "conflit-ouvert",
            label: "Un conflit ouvert ou une rupture du dialogue",
          },
          {
            value: "associe-unique",
            label: "Non concerné, je suis associé unique",
          },
        ],
      },
      {
        id: "q6",
        label: "Comment sont prises les décisions importantes ?",
        type: "single",
        options: [
          { value: "seul", label: "Seul(e), en tant que dirigeant" },
          {
            value: "avec-associes",
            label: "En concertation avec les associés",
          },
          {
            value: "avec-comite",
            label: "En concertation avec un comité de direction ou les cadres",
          },
          {
            value: "au-cas-par-cas",
            label: "Au cas par cas, sans règle établie",
          },
        ],
      },
    ],
  },
  {
    id: "organisation-dependance",
    theme: "Organisation et dépendance au dirigeant",
    questions: [
      {
        id: "q7",
        label:
          "Combien de temps l'entreprise pourrait-elle fonctionner sans vous, sans perte d'activité ?",
        type: "single",
        options: [
          { value: "moins-1-semaine", label: "Moins d'une semaine" },
          { value: "1-semaine-1-mois", label: "D'une semaine à un mois" },
          { value: "1-3-mois", label: "De un à trois mois" },
          { value: "plus-3-mois", label: "Plus de trois mois" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
      {
        id: "q8",
        label:
          "Combien de salariés détiennent un savoir-faire indispensable qui n'est pas documenté ?",
        type: "single",
        options: [
          { value: "aucun", label: "Aucun" },
          { value: "un", label: "Un salarié" },
          { value: "deux-trois", label: "Deux ou trois salariés" },
          { value: "plus-trois", label: "Plus de trois salariés" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
    ],
  },
  {
    id: "salaries-rh",
    theme: "Salariés et organisation RH",
    questions: [
      {
        id: "q9",
        label:
          "Quels outils RH sont en place dans l'entreprise ? (plusieurs réponses possibles)",
        type: "multiple",
        options: [
          { value: "organigramme", label: "Un organigramme à jour" },
          { value: "fiches-poste", label: "Des fiches de poste écrites" },
          { value: "entretiens-annuels", label: "Des entretiens annuels" },
          { value: "plan-formation", label: "Un plan de formation" },
          { value: "aucun", label: "Aucun de ces outils, ou pas de salarié" },
        ],
      },
      {
        id: "q10",
        label:
          "Comment décririez-vous le climat entre les salariés et avec l'encadrement ?",
        type: "single",
        options: [
          { value: "serein", label: "Serein, sans tension notable" },
          {
            value: "tensions-ponctuelles",
            label: "Des tensions ponctuelles, vite résolues",
          },
          {
            value: "tensions-recurrentes",
            label: "Des tensions récurrentes, qui pèsent sur le travail",
          },
          {
            value: "conflit-ouvert",
            label: "Un conflit ouvert ou une procédure prud'homale en cours",
          },
          { value: "non-concerne", label: "Non concerné, aucun salarié" },
        ],
      },
    ],
  },
  {
    id: "juridique-contrats",
    theme: "Juridique et contrats",
    questions: [
      {
        id: "q11",
        label:
          "Quelle part de vos contrats clients et fournisseurs principaux est écrite et à jour ?",
        type: "single",
        options: [
          { value: "totalite", label: "La totalité" },
          { value: "plus-moitie", label: "Plus de la moitié" },
          { value: "moins-moitie", label: "Moins de la moitié" },
          { value: "aucun", label: "Aucun" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
      {
        id: "q12",
        label:
          "Combien de litiges sont en cours avec des clients, des fournisseurs ou l'administration ?",
        type: "single",
        options: [
          { value: "aucun", label: "Aucun" },
          { value: "un", label: "Un litige" },
          { value: "deux-plus", label: "Deux litiges ou plus" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
    ],
  },
  {
    id: "locaux",
    theme: "Locaux",
    questions: [
      {
        id: "q13",
        label: "Quelle est la situation de vos locaux d'exploitation ?",
        type: "single",
        options: [
          { value: "propriete-entreprise", label: "Propriété de l'entreprise" },
          {
            value: "propriete-dirigeant",
            label: "Propriété du dirigeant ou d'une SCI qui lui est liée",
          },
          {
            value: "location-bail-valide",
            label:
              "Location auprès d'un tiers, avec un bail écrit en cours de validité",
          },
          {
            value: "location-sans-bail",
            label: "Location sans bail écrit, ou bail arrivé à échéance",
          },
          {
            value: "pas-de-locaux",
            label: "Pas de locaux dédiés (domicile, activité itinérante)",
          },
        ],
      },
    ],
  },
  {
    id: "financier",
    theme: "Situation financière",
    questions: [
      {
        id: "q14",
        label: "Quel a été le résultat net sur les trois derniers exercices ?",
        type: "single",
        options: [
          {
            value: "beneficiaire-hausse",
            label: "Bénéficiaire sur les trois exercices, et en hausse",
          },
          {
            value: "beneficiaire-stable",
            label: "Bénéficiaire sur les trois exercices, stable ou en baisse",
          },
          {
            value: "deficitaire-un-deux",
            label: "Déficitaire sur un ou deux exercices",
          },
          {
            value: "deficitaire-trois",
            label: "Déficitaire sur les trois exercices",
          },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
      {
        id: "q15",
        label:
          "Avez-vous donné des garanties personnelles pour l'entreprise (caution, nantissement) ?",
        type: "single",
        options: [
          { value: "aucune", label: "Aucune" },
          { value: "une", label: "Une garantie" },
          { value: "plusieurs", label: "Plusieurs garanties" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ],
      },
    ],
  },
  {
    id: "projet-transmission",
    theme: "Votre projet de transmission",
    questions: [
      {
        id: "q16",
        label: "À quelle échéance envisagez-vous la transmission ?",
        type: "single",
        options: [
          { value: "moins-2-ans", label: "Dans moins de 2 ans" },
          { value: "2-5-ans", label: "Entre 2 et 5 ans" },
          { value: "plus-5-ans", label: "Dans plus de 5 ans" },
          {
            value: "non-definie",
            label: "L'échéance n'est pas encore définie",
          },
        ],
      },
      {
        id: "q17",
        label: "Un repreneur est-il identifié ?",
        type: "single",
        options: [
          {
            value: "accord-principe",
            label: "Oui, avec un accord de principe",
          },
          {
            value: "discussions-engagees",
            label: "Oui, des discussions sont engagées",
          },
          {
            value: "recherche-en-cours",
            label: "Non, une recherche est en cours",
          },
          {
            value: "aucune-recherche",
            label: "Non, aucune recherche n'est engagée",
          },
        ],
      },
    ],
  },
  {
    id: "partenaires",
    theme: "Vos partenaires actuels",
    questions: [
      {
        id: "q18",
        label:
          "Avec quels professionnels travaillez-vous déjà ? (plusieurs réponses possibles)",
        type: "multiple",
        options: [
          { value: "expert-comptable", label: "Expert-comptable" },
          { value: "avocat-notaire", label: "Avocat ou notaire" },
          { value: "conseiller-bancaire", label: "Conseiller bancaire dédié" },
          {
            value: "conseiller-patrimoine",
            label: "Conseiller en gestion de patrimoine",
          },
          { value: "aucun", label: "Aucun de ces professionnels" },
        ],
      },
    ],
  },
  {
    id: "regard-dirigeant",
    theme: "Votre regard de dirigeant",
    questions: [
      {
        id: "q19",
        label:
          "Selon vous, quel est aujourd'hui le principal point de vigilance de l'entreprise ?",
        type: "single",
        options: [
          {
            value: "dependance-personne",
            label: "Sa dépendance à ma personne",
          },
          { value: "situation-financiere", label: "Sa situation financière" },
          {
            value: "organisation-equipes",
            label: "Son organisation et ses équipes",
          },
          {
            value: "aspects-juridiques",
            label: "Ses aspects juridiques et contractuels",
          },
          { value: "marche-clients", label: "Son marché et ses clients" },
        ],
      },
    ],
  },
  {
    id: "attentes",
    theme: "Vos attentes",
    questions: [
      {
        id: "q20",
        label: "Quel type d'accompagnement recherchez-vous en priorité ?",
        type: "single",
        options: [
          {
            value: "diagnostic-complet",
            label: "Un diagnostic complet de l'entreprise",
          },
          {
            value: "preparation-valorisation",
            label:
              "La préparation et la valorisation de l'entreprise avant la cession",
          },
          {
            value: "accompagnement-duree",
            label: "Un accompagnement sur toute la durée de la transmission",
          },
          {
            value: "coaching-personnel",
            label: "Un accompagnement personnel du dirigeant (coaching)",
          },
          { value: "ne-sais-pas-encore", label: "Je ne sais pas encore" },
        ],
      },
    ],
  },
] as const;

export const ALL_QUESTIONS: readonly Question[] = DIAGNOSTIC_STEPS.flatMap(
  (step) => step.questions,
);

export function getQuestion(id: string): Question | undefined {
  return ALL_QUESTIONS.find((question) => question.id === id);
}

export function getOptionLabel(questionId: string, value: string): string {
  return (
    getQuestion(questionId)?.options.find((option) => option.value === value)
      ?.label ?? value
  );
}
