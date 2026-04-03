import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI業務コンサル | つくよみ",
  description: "御社の業務フローをAIで再設計。業務分析から構築・保守まで一貫サポート。初回相談無料。",
};

const services = [
  {
    icon: "🔍",
    title: "業務フロー分析",
    desc: "現状の業務プロセスを可視化し、AI・自動化で改善できるポイントを特定します。",
  },
  {
    icon: "⚙️",
    title: "自動化システム構築",
    desc: "GAS、Notion、Slack、freee等を組み合わせた業務自動化システムを設計・構築します。",
  },
  {
    icon: "🤖",
    title: "AI導入支援",
    desc: "ChatGPT/Claude等のAIを業務に組み込み、判断支援・文書作成・データ分析を自動化します。",
  },
  {
    icon: "🔧",
    title: "保守・運用",
    desc: "構築したシステムの継続的な保守・改善を行い、業務変化にも柔軟に対応します。",
  },
];

const steps = [
  { step: "01", title: "無料ヒアリング", desc: "御社の課題と目標をお聞きし、改善の方向性を提案します。（オンライン30分）", duration: "Day 1" },
  { step: "02", title: "業務分析＆提案", desc: "現状の業務フローを分析し、具体的な改善案と見積もりをご提示します。", duration: "Week 1" },
  { step: "03", title: "設計・構築", desc: "承認後、システムの設計・構築を進めます。途中経過も随時共有します。", duration: "Week 2-4" },
  { step: "04", title: "テスト＆導入", desc: "実環境でのテストを経て、本番導入。操作説明とドキュメントも提供します。", duration: "Week 4-5" },
  { step: "05", title: "保守・改善", desc: "月額保守契約で継続的にサポート。業務変化に合わせてシステムも進化させます。", duration: "Ongoing" },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">AI CONSULTING</p>
          <h1 className="text-4xl sm:text-5xl font-bold">AI業務コンサル</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            御社の業務フローをAIで再設計。
            「何を自動化すべきか」の分析から、構築・保守まで一貫してサポートします。
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-primary">無料相談する</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">サービス内容</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="hex-card p-6">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-lg font-bold mt-3">{s.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">導入ステップ</h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 sm:gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full border border-accent-blue/30 flex items-center justify-center text-accent-blue font-mono font-bold text-sm">
                    {s.step}
                  </div>
                </div>
                <div className="flex-1 hex-card p-5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold">{s.title}</h3>
                    <span className="text-xs text-accent-gold shrink-0">{s.duration}</span>
                  </div>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">料金目安</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="hex-card p-6">
              <h3 className="text-accent-blue font-bold">初期構築</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold">¥300,000</span>
                <span className="text-sm text-muted">〜</span>
              </div>
              <p className="text-sm text-muted mt-2">
                業務分析・設計・構築・テスト・導入支援を含みます。
                規模と複雑さに応じてお見積もりします。
              </p>
            </div>
            <div className="hex-card p-6">
              <h3 className="text-accent-gold font-bold">月額保守</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold">¥50,000</span>
                <span className="text-sm text-muted">〜 /月</span>
              </div>
              <p className="text-sm text-muted mt-2">
                システムの保守・改善・サポートを継続的に提供します。
                業務変化への対応も含みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies (Coming Soon) */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="divider-moon mb-8">
            <span>☽</span>
          </div>
          <h2 className="text-2xl font-bold">導入事例</h2>
          <p className="mt-3 text-muted">Coming Soon</p>
          <p className="mt-2 text-sm text-muted">
            現在、掲載許可をいただける導入事例を準備中です。
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-3">無料相談フォーム</h2>
          <p className="text-muted text-center text-sm mb-8">
            まずはお気軽にご相談ください。オンラインで30分、御社の課題をお聞きします。
          </p>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted block mb-1">会社名</label>
              <input
                type="text"
                placeholder="株式会社○○"
                className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue"
              />
            </div>
            <div>
              <label className="text-sm text-muted block mb-1">お名前</label>
              <input
                type="text"
                placeholder="山田 太郎"
                className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue"
              />
            </div>
            <div>
              <label className="text-sm text-muted block mb-1">メールアドレス</label>
              <input
                type="email"
                placeholder="taro@example.com"
                className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue"
              />
            </div>
            <div>
              <label className="text-sm text-muted block mb-1">ご相談内容</label>
              <textarea
                rows={4}
                placeholder="自動化したい業務の概要や、現在お困りのことをお聞かせください。"
                className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue resize-none"
              />
            </div>
            <button className="btn-primary w-full !py-3">送信する</button>
            <p className="text-xs text-muted text-center">
              通常1営業日以内にご返信いたします。
            </p>
          </div>
        </div>
      </section>

      {/* ARMADA connection */}
      <section className="py-16 bg-navy/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">技術的な経営課題をお持ちですか？</h2>
          <p className="mt-3 text-muted leading-relaxed">
            つくよみのコンサルを通じて見えてきた課題が、先端技術で解決できるケースでは、
            母体であるTeam ARMADAの大学知財ネットワークを活用した技術コンサルティングにも接続できます。
          </p>
          <Link href="/about" className="btn-outline inline-block mt-6">
            ARMADAについて詳しく
          </Link>
        </div>
      </section>
    </>
  );
}
