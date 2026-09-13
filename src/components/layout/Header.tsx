import Link from "next/link";
import { NAV_LINKS, ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-dore/15 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={ROUTES.home} className="font-signature text-2xl text-encre">
          Emilie Odjouoriby
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-encre transition-colors hover:text-corail"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={ROUTES.diagnostic}>Diagnostic gratuit</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
