import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Articles — CodecLens",
  description: "Technical articles on video codec analysis and quality.",
};

const ARTICLES = [
  {
    title: "Understanding QP spikes in HEVC encodes",
    date: "2026-03-12",
    readTime: "8 min",
  },
  {
    title: "Bitrate starvation: causes and detection",
    date: "2026-02-28",
    readTime: "6 min",
  },
  {
    title: "VMAF vs SSIM: when to trust each metric",
    date: "2026-02-14",
    readTime: "10 min",
  },
];

export default function ArticlesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Codec analysis, explained.
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          Deep dives into bitstream analysis, quality metrics, and encoding
          diagnostics.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {ARTICLES.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-base text-foreground group-hover:text-muted">
                {article.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {article.date} · {article.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
