import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技術マガジン | つくよみ",
  description: "AI×業務自動化の実践ノウハウを毎週配信。GAS、Notion、Slack連携の実践テクニックが満載。",
};

const articles = [
  {
    id: "gas-slack",
    title: "GAS×Slackで作る全自動日報システム",
    date: "2026.04.01",
    tags: ["GAS", "Slack"],
    free: true,
  },
  {
    id: "notion-api",
    title: "Notion APIの落とし穴と実践的な回避策",
    date: "2026.03.25",
    tags: ["Notion", "API"],
    free: true,
  },
  {
    id: "ai-prompt",
    title: "業務自動化に使えるプロンプトエンジニアリング実践",
    date: "2026.03.18",
    tags: ["AI", "プロンプト"],
    free: false,
  },
  {
    id: "freee-gas",
    title: "freee API × GASで請求書発行を完全自動化した話",
    date: "2026.03.11",
    tags: ["GAS", "freee"],
    free: false,
  },
];

export default function MagazinePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">MAGAZINE</p>
          <h1 className="text-4xl sm:text-5xl font-bold">技術マガジン</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            AI×業務自動化の実践ノウハウを、つくよみが毎週お届け。
            現場で本当に使えるテクニックだけを厳選しています。
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="hex-card p-6">
              <h3 className="text-lg font-bold">無料プラン</h3>
              <p className="text-3xl font-bold mt-2">¥0</p>
              <p className="text-sm text-muted mt-2">月2本の無料記事を閲覧可能</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-accent-gold">✓</span>無料記事の閲覧
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-accent-gold">✓</span>週1ダイジェストメール
                </li>
              </ul>
              <button className="mt-6 w-full border border-card-border text-foreground rounded-lg py-3 font-semibold hover:border-accent-blue transition-all">
                無料で読む
              </button>
            </div>
            <div className="hex-card p-6 border-accent-blue ring-1 ring-accent-blue/30">
              <span className="text-xs text-accent-blue font-bold tracking-widest">PREMIUM</span>
              <h3 className="text-lg font-bold mt-1">プレミアム</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold">¥1,000</span>
                <span className="text-sm text-muted">/月</span>
              </div>
              <p className="text-sm text-muted mt-2">全記事読み放題 + 限定コンテンツ</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-accent-gold">✓</span>全記事読み放題
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-accent-gold">✓</span>ソースコード完全版
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-accent-gold">✓</span>月1回のQ&Aセッション
                </li>
              </ul>
              <button className="mt-6 w-full bg-accent-blue text-white rounded-lg py-3 font-semibold hover:bg-accent-blue/90 transition-all">
                プレミアムに登録
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="divider-moon mb-8">
            <span>☽</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">最新の記事</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <div key={a.id} className="hex-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted">{a.date}</span>
                    {!a.free && (
                      <span className="text-xs text-accent-gold border border-accent-gold/30 rounded px-2 py-0.5">
                        Premium
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold">{a.title}</h3>
                  <div className="flex gap-2 mt-2">
                    {a.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted bg-card-border/30 rounded px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-sm text-accent-blue hover:text-accent-blue/80 font-medium shrink-0"
                >
                  読む →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">実装を任せたい場合は</h2>
          <p className="mt-3 text-muted">
            記事を読んで「うちでもやりたい」と思ったら、つくよみが構築もお手伝いします。
          </p>
          <Link href="/consulting" className="btn-outline inline-block mt-6">
            AI業務コンサルに相談する
          </Link>
        </div>
      </section>
    </>
  );
}
