import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テンプレートストア | つくよみ",
  description: "GAS・Notion・スプレッドシートの業務自動化テンプレートを即導入。買い切りで今すぐ使えます。",
};

const categories = ["すべて", "GAS自動化", "Notion", "スプレッドシート", "Slack連携"];

const templates = [
  {
    id: "invoice-auto",
    title: "請求書自動生成キット",
    description: "freee連携で請求書の作成・送付・入金確認を自動化。毎月の経理作業を90%削減。",
    price: "¥9,800",
    category: "GAS自動化",
    popular: true,
  },
  {
    id: "slack-daily",
    title: "Slack日報→スプシ自動集計",
    description: "Slackの日報チャンネルから自動でスプレッドシートに転記・集計。管理者の確認も一目で。",
    price: "¥4,800",
    category: "Slack連携",
    popular: false,
  },
  {
    id: "notion-sync",
    title: "Notion↔スプシ双方向同期",
    description: "Notionデータベースとスプレッドシートをリアルタイム同期。二重管理を解消。",
    price: "¥7,800",
    category: "Notion",
    popular: true,
  },
  {
    id: "kpi-dashboard",
    title: "KPIダッシュボード テンプレ",
    description: "売上・コスト・進捗を一画面で可視化。スプレッドシートだけで動くダッシュボード。",
    price: "¥3,800",
    category: "スプレッドシート",
    popular: false,
  },
  {
    id: "email-auto",
    title: "メール自動返信＆振り分け",
    description: "Gmailの受信メールをAIで分類し、テンプレート返信を自動送信。対応漏れゼロへ。",
    price: "¥5,800",
    category: "GAS自動化",
    popular: false,
  },
];

export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">TEMPLATES</p>
          <h1 className="text-4xl sm:text-5xl font-bold">テンプレートストア</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            実務で検証済みの業務自動化テンプレートを買い切りで。
            購入後すぐにコピーして使い始められます。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm px-4 py-2 rounded-full transition-all ${
                  i === 0
                    ? "bg-accent-blue text-white"
                    : "border border-card-border text-muted hover:border-accent-blue hover:text-accent-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div key={t.id} className="hex-card glow-gold p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-muted border border-card-border rounded-full px-3 py-1">
                    {t.category}
                  </span>
                  {t.popular && (
                    <span className="text-xs text-accent-gold font-bold">人気</span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{t.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">{t.price}</span>
                  <button className="btn-primary text-sm !py-2 !px-4">購入する</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            カスタムテンプレートが必要ですか？
          </h2>
          <p className="mt-3 text-muted">
            御社の業務に合わせたオーダーメイドの自動化も承ります。
          </p>
          <Link href="/consulting" className="btn-outline inline-block mt-6">
            AI業務コンサルに相談する
          </Link>
        </div>
      </section>
    </>
  );
}
