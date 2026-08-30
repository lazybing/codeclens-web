const TIMELINE_BARS = [
  72, 68, 71, 69, 65, 58, 42, 28, 22, 18, 24, 31, 45, 62, 70, 68, 66, 64, 67,
  69, 71, 68, 65, 63, 66, 68, 70, 72, 69, 67, 65, 68, 70, 71, 69, 67, 66, 68,
  70, 72, 68, 66, 64, 67, 69, 71, 68, 66, 65, 67, 69, 70, 68, 66, 64, 67, 69,
  71, 68, 66, 65, 67, 68, 70, 69, 67, 66, 68, 70, 71, 69, 67, 65, 68, 70, 72,
  69, 67, 66, 68, 70, 71, 69, 67, 65, 68, 70, 72, 69, 67, 66, 68, 70, 71, 69,
];

const QP_VALUES = [
  28, 29, 30, 31, 32, 34, 36, 38, 39, 38, 37, 35, 33, 31, 30, 29, 28, 29, 30,
  31, 29, 28, 29, 30, 31, 29, 28, 29, 30, 31, 32, 30, 29, 28, 29, 30, 31, 29,
  28, 29, 30, 31, 32, 33, 31, 30, 29, 28, 29, 30, 31, 29, 28, 29, 30, 31, 32,
  30, 29, 28, 29, 30, 31, 29, 28, 29, 30, 31, 32, 30, 29, 28, 29, 30, 31, 29,
  28, 29, 30, 31, 32, 30, 29, 28, 29, 30, 31, 29, 28, 29, 30, 31, 32, 30, 29,
];

export function ProductVisualization() {
  const dropStart = 5;
  const dropEnd = 12;
  const currentFrame = 438;

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-surface">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono text-xs text-muted">
            sample_hevc_1080p.mp4
          </span>
        </div>
        <span className="font-mono text-xs text-muted">Analysis complete</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
        {/* Main chart area */}
        <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
          {/* Metric tabs */}
          <div className="mb-4 flex gap-1">
            {["Bitrate", "QP", "VMAF", "Frame type"].map((tab, i) => (
              <span
                key={tab}
                className={`rounded px-2.5 py-1 font-mono text-xs ${
                  i === 0
                    ? "bg-zinc-800 text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Bitrate timeline */}
          <div className="relative">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Bitrate (kbps)
              </span>
              <span className="font-mono text-[11px] text-muted">0 — 8,000</span>
            </div>

            <div className="relative flex h-32 items-end gap-px">
              {TIMELINE_BARS.map((height, i) => {
                const isDropZone = i >= dropStart && i <= dropEnd;
                const isCurrent =
                  i === Math.floor((currentFrame / 900) * TIMELINE_BARS.length);

                return (
                  <div
                    key={i}
                    className="relative flex-1"
                    style={{ height: "100%" }}
                  >
                    <div
                      className={`absolute bottom-0 w-full ${
                        isDropZone ? "bg-red-900/60" : "bg-zinc-700"
                      } ${isCurrent ? "ring-1 ring-white/40" : ""}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                );
              })}

              {/* Drop annotation */}
              <div
                className="absolute bottom-0 flex flex-col items-center"
                style={{ left: "14%", width: "8%" }}
              >
                <div className="mb-1 w-px flex-1 border-l border-dashed border-red-800/80" />
              </div>
            </div>

            {/* Frame ruler */}
            <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-600">
              <span>0</span>
              <span>225</span>
              <span>450</span>
              <span>675</span>
              <span>900</span>
            </div>

            {/* Playhead marker */}
            <div
              className="pointer-events-none absolute top-8 bottom-6 w-px bg-white/30"
              style={{ left: `${(438 / 900) * 100}%` }}
            />
          </div>
        </div>

        {/* Inspector panel */}
        <div className="p-4">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted">
            Frame inspector
          </p>

          <div className="space-y-3">
            <MetricRow label="Frame" value="438" />
            <MetricRow label="Codec" value="HEVC" />
            <MetricRow label="QP" value="38.2" highlight="warning" />
            <MetricRow label="VMAF" value="62.4" highlight="critical" />
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Detected issues
            </p>
            <div className="space-y-2">
              <IssueTag label="Bitrate drop" severity="warning" />
              <IssueTag
                label="Possible bitrate starvation"
                severity="critical"
              />
            </div>
          </div>

          {/* Mini QP sparkline */}
          <div className="mt-6 border-t border-border pt-4">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              QP trend
            </p>
            <div className="flex h-8 items-end gap-px">
              {QP_VALUES.slice(30, 70).map((qp, i) => (
                <div
                  key={i}
                  className={`flex-1 ${qp >= 38 ? "bg-red-900/50" : "bg-zinc-700"}`}
                  style={{ height: `${((qp - 20) / 25) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[11px] text-muted">
        <span>Frames analyzed: 900</span>
        <span>Issues found: 2</span>
        <span>Duration: 00:00:30</span>
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "warning" | "critical";
}) {
  const valueColor =
    highlight === "critical"
      ? "text-red-400"
      : highlight === "warning"
        ? "text-amber-400"
        : "text-foreground";

  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs text-muted">{label}</span>
      <span className={`font-mono text-sm tabular-nums ${valueColor}`}>
        {value}
      </span>
    </div>
  );
}

function IssueTag({
  label,
  severity,
}: {
  label: string;
  severity: "warning" | "critical";
}) {
  const colors =
    severity === "critical"
      ? "border-red-900/60 bg-red-950/40 text-red-400"
      : "border-amber-900/60 bg-amber-950/40 text-amber-400";

  return (
    <div
      className={`rounded border px-2.5 py-1.5 font-mono text-xs ${colors}`}
    >
      {label}
    </div>
  );
}
