import { ImageResponse } from "next/og";

export const alt = "つくよみ | AIが静かに、日本の中小企業を支える";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #050816 0%, #0a0e2a 50%, #050816 100%)",
          color: "#e8eaf0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ color: "#d4a017", fontSize: "28px" }}>☽</span>
          <span style={{ color: "#d4a017", fontSize: "16px", letterSpacing: "4px", fontWeight: 500 }}>
            POWERED BY ARMADA
          </span>
        </div>

        {/* Title */}
        <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px", display: "flex", flexDirection: "column" }}>
          <span>日本の中小企業を、</span>
          <span>
            <span style={{ color: "#2a6fff" }}>AI</span>が静かに支える。
          </span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: "22px", color: "#8892b0", lineHeight: 1.6 }}>
          業務自動化・補助金マッチング・競合調査・技術コンサル
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "30px",
            borderTop: "1px solid #1a2050",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#d4a017", fontSize: "24px" }}>☽</span>
            <span style={{ fontSize: "24px", fontWeight: 700 }}>つくよみ</span>
          </div>
          <span style={{ fontSize: "16px", color: "#8892b0" }}>tsukuyomi.team-armada.jp</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
