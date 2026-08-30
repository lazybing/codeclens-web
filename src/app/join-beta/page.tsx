import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Join the Beta — CodecLens",
  description: "Sign up for early access to CodecLens.",
};

export default function JoinBetaPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <h1 className="max-w-xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Join the CodecLens beta.
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          Get early access to frame-level codec analysis for H.264, HEVC, and
          AV1. We&apos;re onboarding engineers in small batches.
        </p>

        <form className="mt-10 max-w-md space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block font-mono text-xs text-muted"
            >
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
          </div>
          <div>
            <label
              htmlFor="use-case"
              className="mb-1.5 block font-mono text-xs text-muted"
            >
              Primary use case
            </label>
            <select
              id="use-case"
              className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent/40"
            >
              <option value="">Select one</option>
              <option value="streaming">Streaming / CDN</option>
              <option value="encoding">Encoding pipeline</option>
              <option value="codec-dev">Codec development</option>
              <option value="qa">Quality assurance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Request access
          </button>
        </form>
      </section>
    </PageShell>
  );
}
