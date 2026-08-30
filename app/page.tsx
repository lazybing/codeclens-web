import { ProductVisualization } from "./components/product-visualization";

const NAV_LINKS = ["Product", "Articles", "Docs", "Pricing", "Download"];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-sm font-medium tracking-tight text-foreground">
            CodecLens
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-zinc-900"
          >
            Download
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            CodecLens
          </p>
          <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
            See what your codec is really doing.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Analyze H.264, HEVC and AV1 bitstreams.
            <br />
            Find quality issues and understand why they happen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex h-10 items-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-zinc-200"
            >
              Join the Beta
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm text-foreground transition-colors hover:bg-zinc-900"
            >
              Read Articles
            </a>
          </div>
        </section>

        {/* Product visualization */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <ProductVisualization />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="text-sm text-muted">© 2026 CodecLens</span>
          <span className="font-mono text-xs text-zinc-600">
            H.264 · HEVC · AV1
          </span>
        </div>
      </footer>
    </div>
  );
}
