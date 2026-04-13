import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "みちのり — 日本の道を、全部走れ。",
  description:
    "道路・鉄道路線の制覇に特化したiOSアプリ。GPS追跡で走った道が地図に刻まれ、125万セグメントの全国道路データベースをオフラインで使える。",
  openGraph: {
    title: "みちのり — 日本の道を、全部走れ。",
    description: "道路・鉄道路線の制覇に特化したiOSアプリ。",
    siteName: "みちのり",
    locale: "ja_JP",
    type: "website",
  },
};

const C = {
  bg:      "#f7f3ec",
  bgWarm:  "#faf7f2",
  bgAlt:   "#ede7dc",
  border:  "#d8cfc4",
  text:    "#1e1a16",
  muted:   "#6b5e52",
  faint:   "#b0a89e",
  gold:    "#8a6318",
  goldLt:  "#f5edda",
  red:     "#8b2c24",
  redLt:   "#f9edeb",
  blue:    "#2a5fa3",
  blueLt:  "#e8eef8",
  green:   "#3a6e45",
  greenLt: "#e8f3eb",
};

const features = [
  { icon: "🛣️", title: "道路制覇",       description: "国道・都道府県道・高速道路を走るたびに地図が塗られる。125万以上のセグメントに対応。",              accent: C.blue,  accentLt: C.blueLt  },
  { icon: "🚃", title: "鉄道路線制覇",   description: "乗車するたびに路線が埋まっていく。全国の鉄道路線を網羅。",                                        accent: C.green, accentLt: C.greenLt },
  { icon: "📍", title: "GPS自動記録",    description: "起動しておくだけで道路を自動検出。手入力は不要。",                                                 accent: C.red,   accentLt: C.redLt   },
  { icon: "📦", title: "オフライン対応", description: "道路データ（178MB）はデバイス内に搭載。山奥でも電波圏外でも確実に記録。",                           accent: C.gold,  accentLt: C.goldLt  },
  { icon: "🔒", title: "プライバシー設計", description: "GPS生ログはデバイス内のみ。クラウドに送るのは制覇フラグだけ。",                                 accent: C.blue,  accentLt: C.blueLt  },
  { icon: "🏆", title: "ランキング",     description: "全国の制覇者と進捗を比較。（近日公開）",                                                           accent: C.gold,  accentLt: C.goldLt  },
];

const steps = [
  { kanji: "一", num: "01", title: "アプリを起動する",   desc: "旅行・ドライブ・電車移動の前に起動するだけ。位置情報の許可だけ設定すればいい。" },
  { kanji: "二", num: "02", title: "いつも通り移動する", desc: "あとは普段の移動と変わらない。GPSが自動で道路・路線を検出して記録し続ける。" },
  { kanji: "三", num: "03", title: "地図が塗られていく", desc: "帰宅後に地図を開くと、走った道が色づいている。日本が少しずつ完成していく。" },
];

export default function MichinoriPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 py-16 sm:py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] mb-6 font-medium inline-flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ color: C.red, background: C.redLt }}>
              iOS APP · つくよみ
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: C.text }}>
              日本の道を、<br />
              <span style={{ color: C.gold }}>全部走れ。</span>
            </h1>
            <p className="text-base leading-loose mb-10" style={{ color: C.muted, maxWidth: "420px" }}>
              道路・鉄道路線の制覇に特化したiOSアプリ。<br />
              走るたびに地図が塗られ、日本が少しずつ埋まっていく。
            </p>
            <span className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg font-medium"
              style={{ border: `1px solid ${C.border}`, color: C.muted, background: C.bgAlt, cursor: "not-allowed" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store — 近日公開
            </span>
          </div>

          {/* スマホモックアップ（ライトマップ） */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative" style={{ width: "230px" }}>
              <div style={{ position: "absolute", inset: "-24px", background: `radial-gradient(ellipse at center, ${C.blueLt} 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />
              <div style={{ background: "#e8e4df", border: "1.5px solid #ccc6be", borderRadius: "40px", padding: "10px", boxShadow: "0 20px 60px rgba(30,26,22,0.18), 0 4px 12px rgba(30,26,22,0.10)" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
                  <div style={{ width: "56px", height: "16px", background: "#c8c2ba", borderRadius: "8px" }} />
                </div>
                <div style={{ borderRadius: "28px", overflow: "hidden", height: "330px", position: "relative", background: "#f0ebe3" }}>
                  <svg viewBox="0 0 200 330" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                    <rect width="200" height="330" fill="#f0ebe3" />
                    <rect x="8"   y="20"  width="52" height="44" fill="#e8e2d8" rx="3" />
                    <rect x="68"  y="20"  width="64" height="44" fill="#e8e2d8" rx="3" />
                    <rect x="140" y="20"  width="52" height="44" fill="#e8e2d8" rx="3" />
                    <rect x="8"   y="100" width="52" height="62" fill="#e8e2d8" rx="3" />
                    <rect x="68"  y="100" width="64" height="62" fill="#e8e2d8" rx="3" />
                    <rect x="140" y="100" width="52" height="62" fill="#e8e2d8" rx="3" />
                    <rect x="8"   y="200" width="52" height="54" fill="#e8e2d8" rx="3" />
                    <rect x="68"  y="200" width="64" height="54" fill="#e8e2d8" rx="3" />
                    <rect x="140" y="200" width="52" height="54" fill="#e8e2d8" rx="3" />
                    <line x1="0"   y1="80"  x2="200" y2="80"  stroke="#d0c9bf" strokeWidth="2.5" />
                    <line x1="130" y1="180" x2="200" y2="180" stroke="#d0c9bf" strokeWidth="2" />
                    <line x1="130" y1="260" x2="130" y2="330" stroke="#d0c9bf" strokeWidth="2" />
                    <line x1="0"   y1="260" x2="200" y2="260" stroke="#d0c9bf" strokeWidth="2" />
                    <line x1="0"   y1="180" x2="130" y2="180" stroke="#3a74c8" strokeWidth="3"   strokeLinecap="round" />
                    <line x1="60"  y1="0"   x2="60"  y2="330" stroke="#3a74c8" strokeWidth="3"   strokeLinecap="round" />
                    <line x1="130" y1="0"   x2="130" y2="260" stroke="#3a74c8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="0"   y1="80"  x2="130" y2="80"  stroke="#4a9460" strokeWidth="3"   strokeLinecap="round" strokeDasharray="6 3" />
                    <circle cx="130" cy="80" r="5"  fill="#3a74c8" />
                    <circle cx="130" cy="80" r="10" fill="none" stroke="#3a74c8" strokeWidth="2"   opacity="0.4" />
                    <circle cx="130" cy="80" r="16" fill="none" stroke="#3a74c8" strokeWidth="1"   opacity="0.2" />
                  </svg>
                  <div style={{ position: "absolute", bottom: "12px", left: "10px", right: "10px", background: "rgba(247,243,236,0.94)", borderRadius: "14px", backdropFilter: "blur(8px)", padding: "10px 14px", border: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    <div className="text-center">
                      <p style={{ color: C.blue,  fontWeight: "bold", fontSize: "17px" }}>68%</p>
                      <p style={{ color: C.muted, fontSize: "9px",  marginTop: "1px" }}>国道制覇</p>
                    </div>
                    <div className="text-center">
                      <p style={{ color: C.green, fontWeight: "bold", fontSize: "17px" }}>42%</p>
                      <p style={{ color: C.muted, fontSize: "9px",  marginTop: "1px" }}>鉄道路線</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: "10px", paddingBottom: "4px", borderTop: `1px solid ${C.border}`, marginTop: "8px", background: "rgba(247,243,236,0.7)" }}>
                  {[{ icon: "🗺️", label: "マップ", active: true }, { icon: "🛣️", label: "道路" }, { icon: "🚃", label: "鉄道" }, { icon: "🏆", label: "ランク" }].map((tab) => (
                    <div key={tab.label} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "16px" }}>{tab.icon}</div>
                      <div style={{ fontSize: "8px", color: tab.active ? C.blue : C.faint, marginTop: "2px", fontWeight: tab.active ? "600" : "400" }}>{tab.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "6px" }}>
                  <div style={{ width: "48px", height: "4px", background: C.border, borderRadius: "2px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "125万+", sub: "道路セグメント", accent: C.blue  },
            { value: "全国",   sub: "国道・高速対応",  accent: C.gold  },
            { value: "ゼロ",   sub: "GPSの外部送信量", accent: C.green },
          ].map((s) => (
            <div key={s.sub}>
              <p className="text-3xl sm:text-4xl font-bold mb-1.5" style={{ color: s.accent }}>{s.value}</p>
              <p className="text-xs tracking-wide" style={{ color: C.muted }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-16 sm:py-20" style={{ background: C.bg }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] mb-1.5 font-medium" style={{ color: C.red }}>FEATURES</p>
          <h2 className="text-2xl font-bold mb-10" style={{ color: C.text }}>できること</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={f.title} style={{ background: C.bgWarm, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "20px 22px" }}>
                <div className="flex items-start gap-4">
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: f.accentLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs tabular-nums" style={{ color: C.faint }}>{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-sm font-bold" style={{ color: C.text }}>{f.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] mb-1.5 font-medium" style={{ color: C.red }}>HOW IT WORKS</p>
          <h2 className="text-2xl font-bold mb-10" style={{ color: C.text }}>使い方</h2>
          <div className="flex flex-col gap-0">
            {steps.map((item, idx) => (
              <div key={item.kanji} className="flex gap-6 items-stretch">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: C.goldLt, border: `1.5px solid rgba(138,99,24,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", fontSize: "16px", color: C.gold, flexShrink: 0 }}>
                    {item.kanji}
                  </div>
                  {idx < steps.length - 1 && (
                    <div style={{ width: "1.5px", flex: 1, minHeight: "32px", background: `linear-gradient(to bottom, rgba(138,99,24,0.4), ${C.border})`, margin: "6px 0" }} />
                  )}
                </div>
                <div style={{ paddingBottom: idx < steps.length - 1 ? "28px" : "0" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs tabular-nums font-mono" style={{ color: C.faint }}>{item.num}</span>
                    <h3 className="text-base font-bold" style={{ color: C.text }}>{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section style={{ background: C.bg }} className="px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div style={{ background: C.blueLt, border: `1px solid rgba(42,95,163,0.2)`, borderRadius: "16px", padding: "28px 32px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ fontSize: "28px", width: "48px", height: "48px", borderRadius: "12px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(42,95,163,0.15)" }}>
              🔒
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] mb-1.5 font-medium" style={{ color: C.blue }}>PRIVACY</p>
              <h2 className="text-lg font-bold mb-3" style={{ color: C.text }}>あなたの移動ログは、あなただけのもの</h2>
              <p className="text-sm leading-loose mb-4" style={{ color: C.muted }}>
                GPS生データ（いつ・どこを移動したか）はデバイス内にのみ保存されます。クラウドに送られるのは「この区間を通過した」という制覇フラグのみ。
              </p>
              <Link href="/michinori/privacy" className="text-xs font-medium hover:underline transition-colors" style={{ color: C.blue }}>
                プライバシーポリシーを読む →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
