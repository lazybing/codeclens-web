import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ProductVisualization } from "./components/product-visualization";

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-32">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          AI-Powered Video Codec Analyzer.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          Analyze H.264, HEVC and AV1 bitstreams.
          <br />
          Find quality issues and understand why they happen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/join-beta"
            className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Join the Beta
          </Link>
          <Link
            href="/articles"
            className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm text-foreground transition-colors hover:border-muted"
          >
            Read Articles
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ProductVisualization />
      </section>
    </PageShell>
  );
}
