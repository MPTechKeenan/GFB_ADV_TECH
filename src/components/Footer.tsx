import Link from "next/link";
import { company } from "@/lib/company";

const footerLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">
              {company.shortName}
            </p>
            <p className="mt-1 text-sm text-muted">{company.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-border/40 pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} {company.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
