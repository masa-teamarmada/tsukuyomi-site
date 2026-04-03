import { ImageResponse } from "next/og";

export const alt = "つくよみ | AIが静かに、日本の中小企業を支える";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "50px 70px",
          background: "linear-gradient(135deg, #050816 0%, #0a0e2a 50%, #050816 100%)",
          color: "#e8eaf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ color: "#d4a017", fontSize: "24px" }}>☽</span>
          <span style={{ color: "#d4a017", fontSize: "14px", letterSpacing: "4px", fontWeight: 500 }}>
            POWERED BY ARMADA
          </span>
        </div>

        <div style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.2, marginBottom: "16px", display: "flex", flexDirection: "column" }}>
          <span>日本の中小企業を、</span>
          <span>
            <span style={{ color: "#2a6fff" }}>AI</span>が静かに支える。
          </span>
        </div>

        <div style={{ fontSize: "20px", color: "#8892b0" }}>
          業務自動化・補助金マッチング・競合調査・技術コンサル
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "auto",
            paddingTop: "24px",
            borderTop: "1px solid #1a2050",
          }}
        >
          <span style={{ color: "#d4a017", fontSize: "22px" }}>☽</span>
          <span style={{ fontSize: "22px", fontWeight: 700 }}>つくよみ</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
