import Link from "next/link";
import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "競合・市場調査 | つくよみ",
  description: "指定した競合企業の動向をAIが自動追跡。週次レポートで業界の動きを逃しません。",
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">MARKET RESEARCH</p>
          <h1 className="text-4xl sm:text-5xl font-bold">競合・市場調査</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            指定した競合企業の動向をAIが毎日追跡。
            プレスリリース、採用情報、特許出願、SNS動向まで網羅的にモニタリングします。
          </p>
        </div>
      </section>

      {/* Sample Report */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">レポートサンプル</h2>
          <div className="hex-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg">週次競合レポート</h3>
                <p className="text-sm text-muted">2026年3月24日〜3月30日</p>
              </div>
              <span className="text-accent-gold text-2xl">☽</span>
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-accent-blue pl-4">
                <h4 className="font-bold text-sm text-accent-blue">A社の動向</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  <li>▸ 新製品「XX」を発表（プレスリリース 3/25）</li>
                  <li>▸ エンジニア職10名の採用を開始（3/27）</li>
                  <li>▸ 関連特許2件を出願（3/28 公開）</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-gold pl-4">
                <h4 className="font-bold text-sm text-accent-gold">市場トレンド</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  <li>▸ 業界全体で前年比12%成長（調査会社X発表）</li>
                  <li>▸ 新規参入企業3社を検出</li>
                </ul>
              </div>
              <div className="border-l-2 border-foreground/20 pl-4">
                <h4 className="font-bold text-sm">つくよみの分析</h4>
                <p className="mt-2 text-sm text-muted">
                  A社の採用強化とB社の新製品リリースから、Q3にかけて競争が激化する見込みです。
                  御社の強みである○○分野での差別化戦略の強化を推奨します。
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted italic">※ これはサンプルです。実際のレポートはより詳細な分析を含みます。</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">モニタリングの仕組み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📰", title: "プレスリリース", desc: "新製品、提携、資金調達などの公式発表" },
              { icon: "👤", title: "採用情報", desc: "どの職種を採用しているかで注力分野を推測" },
              { icon: "📜", title: "特許・知財", desc: "出願・公開情報から技術戦略を分析" },
              { icon: "📊", title: "SNS・メディア", desc: "X、LinkedIn、業界メディアの言及を追跡" },
            ].map((item) => (
              <div key={item.title} className="hex-card p-5 text-center">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold mt-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted mt-1">{item.desc}</p>
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
              name="ベーシック"
              price="¥10,000"
              period="/月"
              description="まずは1社の動向を追跡"
              features={[
                "競合1社を追跡",
                "週次レポート配信",
                "プレスリリース監視",
                "メール通知",
              ]}
              cta="ベーシックで始める"
              href="#"
            />
            <PricingCard
              name="プロ"
              price="¥20,000"
              period="/月"
              description="複数社を並行して追跡"
              features={[
                "競合3社まで追跡",
                "週次 + 速報レポート",
                "全情報源モニタリング",
                "メール + Slack通知",
                "月次トレンド分析",
              ]}
              cta="プロで始める"
              href="#"
              highlight
            />
            <PricingCard
              name="エンタープライズ"
              price="¥30,000"
              period="/月"
              description="包括的な市場インテリジェンス"
              features={[
                "競合5社まで追跡",
                "リアルタイム速報",
                "全情報源 + 特許監視",
                "全チャネル通知",
                "月次戦略レポート",
                "カスタム分析リクエスト",
              ]}
              cta="エンタープライズで始める"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">調査結果を戦略に落とし込みたい？</h2>
          <p className="mt-3 text-muted">
            競合分析の結果をもとに、具体的なアクションプランの策定もお手伝いします。
          </p>
          <Link href="/consulting" className="btn-outline inline-block mt-6">
            コンサルに相談する
          </Link>
        </div>
      </section>
    </>
  );
}
