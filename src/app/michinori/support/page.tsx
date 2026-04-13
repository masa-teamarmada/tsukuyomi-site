import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート | みちのり",
  description: "みちのりアプリのサポートページ。よくある質問やお問い合わせ先をご案内します。",
};

const C = {
  text:    "#1e1a16",
  muted:   "#6b5e52",
  faint:   "#b0a89e",
  gold:    "#8a6318",
  red:     "#8b2c24",
  blue:    "#2a5fa3",
  bgWarm:  "#faf7f2",
  bgAlt:   "#ede7dc",
  border:  "#d8cfc4",
  blueLt:  "#e8eef8",
};

const faqs = [
  {
    q: "位置情報の許可は必要ですか？",
    a: "はい、道路・鉄道路線の制覇記録を生成するために位置情報（GPS）の許可が必要です。許可しない場合、制覇記録の自動生成ができません。",
  },
  {
    q: "位置情報はサーバーに送られますか？",
    a: "GPS生データ（詳細な移動ログ）はデバイス内にのみ保存されます。クラウドに送られるのは、どの道路・路線区間を通過したかを示す進捗データのみです。",
  },
  {
    q: "アカウントは必要ですか？",
    a: "ランキング機能を利用するにはアカウントが必要です。ランキングを使わない場合はアカウントなしでもご利用いただけます。",
  },
  {
    q: "データを削除したいのですが",
    a: "アカウントおよびクラウド上のデータ削除をご希望の場合は、下記のお問い合わせ先までご連絡ください。",
  },
  {
    q: "アプリが正常に動作しない場合は？",
    a: "アプリを再起動するか、最新バージョンにアップデートをお試しください。解決しない場合はお問い合わせください。",
  },
];

export default function MichinoriSupportPage() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] mb-2 font-medium" style={{ color: C.red }}>
            MICHINORI · SUPPORT
          </p>
          <h1 className="text-3xl font-bold mb-3" style={{ color: C.text }}>サポート</h1>
          <p className="text-sm" style={{ color: C.muted }}>
            みちのりに関するご質問・お問い合わせはこちらです。
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6" style={{ color: C.text }}>よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: C.bgWarm,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  padding: "18px 22px",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: C.text }}>Q. {faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div
          style={{
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            padding: "28px 32px",
          }}
        >
          <h2 className="text-xl font-bold mb-2" style={{ color: C.text }}>お問い合わせ</h2>
          <p className="text-sm mb-6" style={{ color: C.muted }}>
            FAQで解決しない場合は、メールにてお問い合わせください。
            通常2〜3営業日以内にご返信します。
          </p>
          <a
            href="mailto:support@team-armada.jp"
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg font-medium transition-opacity hover:opacity-80"
            style={{ background: C.blue, color: "#ffffff" }}
          >
            support@team-armada.jp
          </a>
        </div>

        <div className="mt-10 pt-8 text-sm" style={{ borderTop: `1px solid ${C.border}` }}>
          <Link href="/michinori/privacy" className="hover:underline" style={{ color: C.gold }}>
            プライバシーポリシー →
          </Link>
        </div>
      </div>
    </div>
  );
}
