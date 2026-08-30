import Link from "next/link";

const NAV_LINKS = [
  { label: "Product", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Download", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          CodecLens
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-muted"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}
