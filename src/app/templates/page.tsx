import Link from "next/link";
import type { Metadata } from "next";
import { templates, categories, formatPrice } from "@/lib/templates";
import { BuyButton } from "@/components/BuyButton";

export const metadata: Metadata = {
  title: "テンプレートストア | つくよみ",
  description: "GAS・Notion・スプレッドシートの業務自動化テンプレートを即導入。買い切りで今すぐ使えます。",
};

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
                  <span className="text-xl font-bold">{formatPrice(t.priceInYen)}</span>
                  <BuyButton templateId={t.id} />
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
