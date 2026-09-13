"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md p-2 text-encre"
      >
        <span className="sr-only">
          {open ? "Fermer le menu" : "Ouvrir le menu"}
        </span>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigation principale"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-dore/20 bg-white px-6 py-4 shadow-md"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-encre hover:bg-beige-clair/60"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={ROUTES.diagnostic}
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            Diagnostic gratuit
          </Button>
        </nav>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
