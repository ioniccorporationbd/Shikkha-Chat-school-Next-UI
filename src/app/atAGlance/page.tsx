"use client";

import React from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { label: "Patients today",    value: "142",    icon: "👤" },
  { label: "Currently waiting", value: "27",     icon: "⏳" },
  { label: "Avg. wait time",    value: "18 min", icon: "⏱" },
  { label: "Beds occupied",     value: "83%",    icon: "🛏" },
];

const queue = [
  { id: "Q-041", name: "Rahima Begum",  dept: "Emergency",   status: "urgent",      wait: "3m"  },
  { id: "Q-039", name: "Kamal Hossain",  dept: "Cardiology",  status: "in-progress", wait: "22m" },
  { id: "Q-037", name: "Nusrat Jahan",   dept: "Ortho",       status: "waiting",     wait: "31m" },
  { id: "Q-036", name: "Arif Chowdhury", dept: "General",     status: "waiting",     wait: "35m" },
  { id: "Q-034", name: "Fatema Khatun",  dept: "Dermatology", status: "done",        wait: "—"   },
  { id: "Q-033", name: "Mosharraf Ali",  dept: "ENT",         status: "done",        wait: "—"   },
];

const depts = [
  { name: "Emergency",    current: 9,  capacity: 10 },
  { name: "Cardiology",   current: 14, capacity: 20 },
  { name: "General",      current: 21, capacity: 30 },
  { name: "Orthopaedics", current: 8,  capacity: 15 },
  { name: "Dermatology",  current: 5,  capacity: 12 },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

type Status = "urgent" | "in-progress" | "waiting" | "done";

const BADGE: Record<Status, { bg: string; color: string; label: string }> = {
  "urgent":      { bg: "#FEF2F2", color: "#DC2626", label: "Urgent"      },
  "in-progress": { bg: "#EFF6FF", color: "#2563EB", label: "In progress" }, // Updated to primary
  "waiting":     { bg: "#F3F4F6", color: "#6B7280", label: "Waiting"     },
  "done":        { bg: "#ECFDF5", color: "#059669", label: "Done"        },
};

function barColor(pct: number) {
  if (pct >= 90) return "#DC2626";
  if (pct >= 70) return "#D97706";
  return "#2563EB"; // Matches global primary
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Badge({ status }: { status: string }) {
  const cfg = BADGE[status as Status] ?? BADGE.waiting;
  return (
    <span style={{
      background: cfg.bg,
      color: cfg.color,
      padding: "4px 14px",
      borderRadius: "9999px", // Cylindrical/Pill badge
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      display: "inline-block"
    }}>
      {cfg.label}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AtAGlancePage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: "#F8FAFC", minHeight: "100vh", color: "#0F172A" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px" }}>

        {/* Header */}
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>At a glance</h1>
        <p style={{ fontSize: 14, color: "#64748B", marginTop: 4, marginBottom: 24 }}>
          Today's patient flow overview
        </p>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>{s.label}</span>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#2563EB", lineHeight: 1 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Queue Table */}
        <Panel title="Active queue">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Token", "Patient", "Department", "Status", "Wait"].map((h) => (
                    <th key={h} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".05em", color: "#94A3B8", padding: "12px 18px", textAlign: "left", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", fontWeight: 600 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {queue.map((q) => (
                  <tr key={q.id}>
                    <td style={{ ...td, color: "#94A3B8", fontFamily: "monospace" }}>{q.id}</td>
                    <td style={{ ...td, fontWeight: 500 }}>{q.name}</td>
                    <td style={{ ...td, color: "#64748B" }}>{q.dept}</td>
                    <td style={td}><Badge status={q.status} /></td>
                    <td style={{ ...td, color: q.wait === "—" ? "#94A3B8" : "#2563EB", fontWeight: 600 }}>{q.wait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        {/* Dept Load */}
        <Panel title="Department load">
          {depts.map((d) => {
            const pct = Math.round((d.current / d.capacity) * 100);
            const color = barColor(pct);
            return (
              <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderBottom: "1px solid #F1F5F9" }}>
                <span style={{ fontSize: 13, width: 110, flexShrink: 0, fontWeight: 500 }}>{d.name}</span>
                <div style={{ flex: 1, height: 8, background: "#E2E8F0", borderRadius: "9999px", overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "9999px" }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, width: 36, textAlign: "right", color }}>{pct}%</span>
              </div>
            );
          })}
        </Panel>

      </div>
    </div>
  );
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const td: React.CSSProperties = {
  padding: "14px 18px",
  fontSize: 13,
  borderBottom: "1px solid #F1F5F9",
};

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
      <div style={{ padding: "16px 18px", fontSize: 14, fontWeight: 600, borderBottom: "1px solid #E2E8F0", background: "#FFF" }}>
        {title}
      </div>
      {children}
    </div>
  );
}