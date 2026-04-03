import Link from "next/link";
import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "補助金マッチング | つくよみ",
  description: "全省庁・自治体の補助金・助成金情報をAIが毎日巡回。御社に合う補助金を自動で通知します。",
};

const categories = [
  { icon: "🏭", title: "ものづくり補助金", desc: "設備投資、新製品開発、生産性向上" },
  { icon: "🌱", title: "GX・環境関連", desc: "脱炭素、省エネ、再エネ導入" },
  { icon: "💻", title: "IT導入・DX", desc: "業務システム、AI導入、デジタル化" },
  { icon: "🔬", title: "研究開発・技術革新", desc: "産学連携、試作開発、知財活用" },
  { icon: "👥", title: "人材育成・雇用", desc: "リスキリング、雇用促進、働き方改革" },
  { icon: "🌏", title: "海外展開", desc: "輸出支援、海外拠点、国際認証取得" },
];

export default function GrantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">GRANTS MATCHING</p>
          <h1 className="text-4xl sm:text-5xl font-bold">補助金マッチング</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            全省庁・自治体の補助金・助成金情報をAIが毎日巡回。
            御社の業種・規模・事業計画に合う補助金を自動でお知らせします。
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">仕組み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "プロフィール登録", desc: "業種、従業員数、所在地、関心テーマを登録。5分で完了します。" },
              { step: "02", title: "AIが毎日巡回", desc: "全省庁・47都道府県・主要市区町村の公募情報を毎日自動チェック。" },
              { step: "03", title: "マッチング通知", desc: "御社に合う補助金が見つかり次第、メール or Slackで即時通知します。" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent-blue/30 text-accent-blue font-mono font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">対象カテゴリ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="hex-card p-5">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-bold mt-2">{c.title}</h3>
                <p className="text-sm text-muted mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">料金プラン</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <PricingCard
              name="ライト"
              price="¥5,000"
              period="/月"
              description="まずは試してみたい方に"
              features={[
                "カテゴリ2つまで選択",
                "週1回のマッチング通知",
                "メール通知",
              ]}
              cta="ライトで始める"
              href="#"
            />
            <PricingCard
              name="スタンダード"
              price="¥10,000"
              period="/月"
              description="本格的に活用したい方に"
              features={[
                "カテゴリ無制限",
                "毎日マッチング通知",
                "メール + Slack通知",
                "申請書作成サポート（月1件）",
              ]}
              cta="スタンダードで始める"
              href="#"
              highlight
            />
            <PricingCard
              name="プレミアム"
              price="¥15,000"
              period="/月"
              description="フルサポートが必要な方に"
              features={[
                "カテゴリ無制限",
                "毎日マッチング通知",
                "全チャネル通知",
                "申請書作成サポート（月3件）",
                "採択率を上げる戦略アドバイス",
              ]}
              cta="プレミアムで始める"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">補助金申請をフルサポート</h2>
          <p className="mt-3 text-muted">
            申請書の作成から採択後の報告書まで、AI業務コンサルで一貫サポートも可能です。
          </p>
          <Link href="/consulting" className="btn-outline inline-block mt-6">
            コンサルに相談する
          </Link>
        </div>
      </section>
    </>
  );
}
