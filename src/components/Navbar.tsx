"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GFBLogo from "./GFBLogo";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="GFB Federal Solutions — Home"
          onClick={() => setMobileOpen(false)}
        >
          <GFBLogo size="md" light className="w-auto" />
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-accent-light"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border/60 bg-background md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium ${
                    isActive(item.href)
                      ? "text-accent-light"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
