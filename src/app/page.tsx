import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "templates",
    icon: "⬡",
    title: "テンプレート",
    description: "GAS・Notion・スプレッドシートの業務自動化テンプレートを即導入。",
    href: "/templates",
    tag: "買い切り",
  },
  {
    id: "magazine",
    icon: "📖",
    title: "技術マガジン",
    description: "AI×業務自動化の実践ノウハウを、つくよみが毎週お届け。",
    href: "/magazine",
    tag: "月額",
  },
  {
    id: "newsletter",
    icon: "📩",
    title: "業界ニュースレター",
    description: "GX・水素・補助金など、業界特化の最新動向を要約配信。",
    href: "/newsletter",
    tag: "月額",
  },
  {
    id: "grants",
    icon: "🏛️",
    title: "補助金マッチング",
    description: "全省庁・自治体の公募情報をAIが毎日巡回。御社に合う補助金を自動通知。",
    href: "/grants",
    tag: "月額",
  },
  {
    id: "research",
    icon: "🔍",
    title: "競合・市場調査",
    description: "指定した競合企業の動向をAIが追跡。週次レポートを自動生成。",
    href: "/research",
    tag: "月額",
  },
  {
    id: "consulting",
    icon: "🤝",
    title: "AI業務コンサル",
    description: "御社の業務フローをAIで再設計。構築から保守まで一貫サポート。",
    href: "/consulting",
    tag: "個別見積",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">
                POWERED BY ARMADA
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                日本の中小企業を、
                <br />
                <span className="text-accent-blue">AI</span>が静かに支える。
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
                つくよみは、業務自動化・補助金探索・市場調査をAIで自動化し、
                中小企業の経営基盤を強くするサービスです。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#services" className="btn-primary">
                  サービスを見る
                </Link>
                <Link href="/consulting" className="btn-outline">
                  無料相談する
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 rounded-full bg-accent-blue/10 blur-3xl" />
                <Image
                  src="/images/tsukuyomi.png"
                  alt="つくよみ"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="divider-moon mb-6">
              <span>☽</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">つくよみのサービス</h2>
            <p className="mt-3 text-muted">
              すべてのサービスが連携し、御社の経営を多角的にサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="hex-card glow-gold p-6 block group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-xs text-accent-gold border border-accent-gold/30 rounded-full px-3 py-1">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-navy/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">つくよみが動く仕組み</h2>
            <p className="mt-3 text-muted">
              AIが24時間稼働し、あなたの代わりに情報を集め、分析し、届けます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "AIが自動で収集",
                desc: "補助金情報、競合動向、業界ニュースをAIが毎日巡回・収集します。",
              },
              {
                step: "02",
                title: "御社に合わせて分析",
                desc: "御社の業種・規模・課題に合わせて、関連する情報だけを抽出・整理します。",
              },
              {
                step: "03",
                title: "レポートをお届け",
                desc: "メール・Slack・Notionなど、お好みのチャネルに定期配信します。",
              },
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-gold text-4xl">☽</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            まずは無料で始めてみませんか？
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            テンプレートの購入やニュースレターの購読は、アカウント不要で今すぐ始められます。
            <br />
            業務自動化のご相談も、お気軽にどうぞ。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/templates" className="btn-primary">
              テンプレートを見る
            </Link>
            <Link href="/consulting" className="btn-outline">
              無料相談する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
