import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート | ROAD MASTER",
  description: "ROAD MASTERアプリのサポートページ。よくある質問やお問い合わせ先をご案内します。",
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
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">
            ROAD MASTER
          </p>
          <h1 className="text-4xl font-bold mb-4">サポート</h1>
          <p className="text-muted">
            ROAD MASTERに関するご質問・お問い合わせはこちらです。
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="hex-card p-6">
                <p className="font-bold text-foreground mb-2">Q. {faq.q}</p>
                <p className="text-sm text-muted leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="hex-card p-8">
          <h2 className="text-2xl font-bold mb-2">お問い合わせ</h2>
          <p className="text-muted text-sm mb-6">
            FAQで解決しない場合は、メールにてお問い合わせください。
            通常2〜3営業日以内にご返信します。
          </p>
          <a
            href="mailto:support@team-armada.jp"
            className="btn-primary inline-block"
          >
            support@team-armada.jp
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-muted">
          <Link href="/michinori/privacy" className="text-accent-gold hover:underline">
            プライバシーポリシー →
          </Link>
        </div>
      </div>
    </section>
  );
}
