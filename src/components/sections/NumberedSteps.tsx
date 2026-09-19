import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface Step {
  title: string;
  description: string;
}

interface NumberedStepsProps {
  eyebrowIndex: string;
  eyebrowLabel: string;
  heading: string;
  intro?: string;
  steps: readonly Step[];
}

export function NumberedSteps({
  eyebrowIndex,
  eyebrowLabel,
  heading,
  intro,
  steps,
}: NumberedStepsProps) {
  return (
    <section className="bg-beige-clair/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="max-w-2xl">
          <Eyebrow index={eyebrowIndex}>{eyebrowLabel}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-encre">{heading}</h2>
          {intro ? <p className="mt-4 text-lg leading-relaxed text-encre/80">{intro}</p> : null}
        </RevealOnScroll>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 0.1}>
              <div className="flex flex-col gap-3">
                <span className="font-display text-3xl text-corail">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-encre">{step.title}</h3>
                <p className="text-sm leading-relaxed text-encre/80">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
