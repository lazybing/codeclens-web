import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About — CodecLens",
  description: "About CodecLens, a developer tool for video codec analysis.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <h1 className="max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Built for engineers who work with video.
        </h1>

        <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            CodecLens is a developer tool for analyzing H.264, HEVC, and AV1
            bitstreams. It surfaces frame-level metrics, quality anomalies, and
            encoding issues that are hard to spot in aggregate dashboards.
          </p>
          <p>
            Instead of guessing why a segment looks bad, you can inspect QP
            curves, bitrate allocation, and per-frame quality scores — then
            trace problems back to their source in the encode pipeline.
          </p>
          <p>
            We&apos;re building CodecLens for streaming engineers, codec
            developers, and anyone who needs to understand what their encoder
            is actually producing.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
