import { Button } from "@/components/ui/Button";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const STATS = [
  { value: "500+", label: "sociétés créées" },
  { value: "50+", label: "transmissions accompagnées" },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <DecorativeBlob className="-right-40 -top-0 h-[28rem] w-[28rem] bg-corail/70 md:h-[34rem] md:w-[34rem] hidden lg:block" />
      <DecorativeBlob className="right-10 top-40 h-56 w-56 bg-dore/30 md:h-72 md:w-72 hidden lg:block" />
      <DecorativeBlob className="right-56 top-4 h-24 w-24 bg-beige-clair lg:block hidden" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <RevealOnScroll className="max-w-3xl">
          <Pill tone="beige">Juriste depuis 2007 · Coach certifiée ICF</Pill>
          <h1 className="mt-6 font-display text-5xl leading-tight text-encre md:text-7xl">
            Céder, reprendre ou{" "}
            <span className="italic text-corail">mieux travailler</span> avec
            vos associés
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Céder une entreprise, en reprendre une, ou mieux vous entendre avec
            vos associés, sont des étapes qui engagent l&apos;avenir de
            l&apos;entreprise et de ceux qui la dirigent. Je vous accompagne à
            chacune de ces étapes, avec un regard qui allie expertise technique
            et écoute humaine.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button href="#diagnostic">Faire mon diagnostic gratuit</Button>
            <Button href="#pourquoi-moi" variant="ghost">
              Pourquoi me faire confiance
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-dore/20 pt-10 sm:max-w-md">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-encre">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-encre/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
