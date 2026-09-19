import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, ROUTES } from "@/constants/routes";
import logo from "../../../public/logos/logo-name.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dore/15 bg-beige-clair/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-encre md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <Link href={ROUTES.home} className="shrink-0">
            <Image
              src={logo}
              alt="Emilie Odjouoriby"
              height={128}
              className="h-32 w-auto"
            />
          </Link>
          <p className="max-w-xs text-encre/70">
            Basée au Bignon, intervention en Pays de la Loire et en Bretagne
            sud, et en visio partout ailleurs.
          </p>
        </div>

        <nav aria-label="Liens du site" className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-corail"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-encre/70">
          <span>&copy; {year} Émilie Odjouoriby</span>
        </div>
      </div>
    </footer>
  );
}
