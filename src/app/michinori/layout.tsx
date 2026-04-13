import Link from "next/link";

export default function MichinoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#f7f3ec",
        color: "#1e1a16",
        minHeight: "100vh",
        fontFamily: "var(--font-noto-sans-jp), 'Noto Sans JP', sans-serif",
      }}
    >
      {/* Shared Header */}
      <header
        style={{
          borderBottom: "1px solid #d8cfc4",
          background: "rgba(247,243,236,0.92)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
        className="px-6 py-4 flex items-center justify-between"
      >
        <Link href="/michinori" className="flex items-center gap-2">
          <span style={{ color: "#8b2c24", fontSize: "18px" }}>⛩</span>
          <span className="text-sm font-bold" style={{ color: "#1e1a16", letterSpacing: "0.12em" }}>
            みちのり
          </span>
        </Link>
        <nav className="flex gap-5 text-xs" style={{ color: "#6b5e52" }}>
          <Link href="/michinori/support" className="hover:opacity-60 transition-opacity">サポート</Link>
          <Link href="/michinori/privacy" className="hover:opacity-60 transition-opacity">プライバシー</Link>
        </nav>
      </header>

      {children}

      {/* Shared Footer */}
      <footer style={{ borderTop: "1px solid #d8cfc4", background: "#ede7dc" }} className="px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <span style={{ color: "#8b2c24", fontSize: "14px" }}>⛩</span>
            <div>
              <p className="text-xs" style={{ color: "#b0a89e" }}>© 2026 つくよみ · iOS 17.0+</p>
              <p className="text-xs mt-0.5" style={{ color: "#b0a89e" }}>powered by Team ARMADA</p>
            </div>
          </div>
          <div className="flex gap-5 text-xs" style={{ color: "#6b5e52" }}>
            <Link href="/michinori/support" className="hover:opacity-60 transition-opacity">サポート</Link>
            <Link href="/michinori/privacy" className="hover:opacity-60 transition-opacity">プライバシーポリシー</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
