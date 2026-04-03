import Link from "next/link";
import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "業界ニュースレター | つくよみ",
  description: "GX・水素・補助金など、業界特化の最新動向をAIが毎日要約して配信。情報収集の時間をゼロに。",
};

const themes = [
  { icon: "⚡", title: "GX・水素・カーボンニュートラル", desc: "脱炭素政策、水素サプライチェーン、排出権取引の最新動向" },
  { icon: "💰", title: "補助金・助成金速報", desc: "経産省・環境省・自治体の新規公募情報をいち早くキャッチ" },
  { icon: "🤖", title: "中小企業DX・AI活用", desc: "実際の導入事例、ツール比較、費用対効果の分析" },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">NEWSLETTER</p>
          <h1 className="text-4xl sm:text-5xl font-bold">業界ニュースレター</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            AIが毎日100以上の情報源を巡回し、御社の業界に関連するニュースだけを要約してお届けします。
          </p>
        </div>
      </section>

      {/* Themes */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">配信テーマ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {themes.map((t) => (
              <div key={t.title} className="hex-card p-6">
                <span className="text-3xl">{t.icon}</span>
                <h3 className="text-lg font-bold mt-3">{t.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Archive */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">サンプル配信</h2>
          <div className="hex-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent-gold">☽</span>
              <span className="text-sm text-muted">2026.04.01 配信分より</span>
            </div>
            <h3 className="font-bold text-lg mb-3">GX・水素ウィークリーダイジェスト</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent-blue shrink-0">▸</span>
                経産省、水素社会推進法の施行規則案を公表（パブコメ締切: 4/30）
              </li>
              <li className="flex gap-2">
                <span className="text-accent-blue shrink-0">▸</span>
                トヨタ、次世代FC向け触媒で白金使用量50%削減に成功
              </li>
              <li className="flex gap-2">
                <span className="text-accent-blue shrink-0">▸</span>
                環境省 R7年度 脱炭素先行地域 第5回公募開始（上限5億円）
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted italic">※ 実際の配信はより詳細な要約と出典リンク付きです</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-3">まずは無料で購読</h2>
          <p className="text-muted text-center text-sm mb-8">
            週1回のダイジェスト版を無料でお届けします。
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue"
            />
            <button className="btn-primary shrink-0 !py-3">登録する</button>
          </div>
          <p className="text-xs text-muted mt-3 text-center">
            いつでも解除可能です。スパムは送りません。
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">料金プラン</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PricingCard
              name="無料プラン"
              price="¥0"
              description="週1回のダイジェスト配信"
              features={[
                "週1回のハイライト配信",
                "1テーマ選択可能",
                "過去1ヶ月分のアーカイブ",
              ]}
              cta="無料で始める"
              href="#"
            />
            <PricingCard
              name="プレミアム"
              price="¥1,500"
              period="/月"
              description="毎日配信 + 全テーマ + 深掘り分析"
              features={[
                "毎日配信（平日）",
                "全テーマ購読可能",
                "深掘り分析レポート（月2回）",
                "全アーカイブ閲覧",
                "メール通知カスタマイズ",
              ]}
              cta="プレミアムに登録"
              href="#"
              highlight
            />
          </div>
        </div>
      </section>
    </>
  );
}
