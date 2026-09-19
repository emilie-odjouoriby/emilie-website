"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { NAV_LINKS, ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import logo from "../../../public/logos/logo-name.png";

const SCROLL_THRESHOLD = 20;

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getIsScrolled() {
  return window.scrollY > SCROLL_THRESHOLD;
}

// Toujours false côté serveur — l'état de scroll n'existe qu'après hydratation client.
function getServerIsScrolled() {
  return false;
}

export function Header() {
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getIsScrolled,
    getServerIsScrolled,
  );

  return (
    <header className="sticky top-4 z-40 mx-auto min-w-full xl:min-w-7xl px-4 lg:px-6">
      <div
        className={`flex items-center justify-between gap-4 rounded-lg border px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-dore/15 bg-white/90 shadow-soft backdrop-blur"
            : "border-transparent"
        }`}
      >
        <Link href={ROUTES.home} className="shrink-0">
          <Image
            src={logo}
            alt="Emilie Odjouoriby"
            height={112}
            className="h-28 w-auto"
            priority
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 lg:flex lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-encre transition-colors hover:text-corail"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={ROUTES.diagnostic}>Diagnostic gratuit</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
