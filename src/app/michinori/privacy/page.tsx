import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | みちのり",
  description: "みちのりアプリのプライバシーポリシー。収集する情報とその利用目的について説明します。",
};

const lastUpdated = "2026年4月11日";

const infoCards = [
  { title: "位置情報（GPS）", body: "道路・鉄道路線の制覇記録を生成するため、アプリ使用中に位置情報を取得します。GPS生データはお使いのデバイス内にのみ保存され、外部サーバーにアップロードされることはありません。" },
  { title: "制覇進捗データ", body: "どの道路・鉄道路線のどの区間を走行・乗車したかを示す進捗データ（セグメント通過フラグ）を収集します。具体的な位置履歴や移動日時は含まれません。" },
  { title: "アカウント情報", body: "ユーザー登録時に、ユーザー名およびプロフィール画像（任意）を収集します。" },
  { title: "クラッシュレポート", body: "アプリの品質向上のため、Firebase Crashlyticsによりクラッシュ情報を収集します。個人を特定できる情報は含まれません。" },
];

const cardStyle = {
  background: "#faf7f2",
  border: "1px solid #d8cfc4",
  borderRadius: "12px",
  padding: "16px 20px",
};

export default function MichinoriPrivacyPage() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] mb-2 font-medium" style={{ color: "#8b2c24" }}>
            MICHINORI · PRIVACY
          </p>
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#1e1a16" }}>
            プライバシーポリシー
          </h1>
          <p className="text-sm" style={{ color: "#b0a89e" }}>最終更新日：{lastUpdated}</p>
        </div>

        <div className="space-y-10" style={{ color: "#6b5e52", lineHeight: 1.75 }}>
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>1. はじめに</h2>
            <p className="text-sm">
              みちのり（以下「本アプリ」）は、Team ARMADA（以下「当社」）が提供するiOSアプリです。
              本ポリシーは、本アプリが収集する情報の種類、利用目的、管理方法についてご説明します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#1e1a16" }}>2. 収集する情報</h2>
            <div className="space-y-3">
              {infoCards.map((card) => (
                <div key={card.title} style={cardStyle}>
                  <h3 className="text-sm font-bold mb-1.5" style={{ color: "#1e1a16" }}>{card.title}</h3>
                  <p className="text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>3. 情報の利用目的</h2>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>道路・鉄道路線の制覇進捗の記録・表示</li>
              <li>ユーザーランキングの算出・表示</li>
              <li>アプリの不具合修正およびサービス向上</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>4. 第三者提供</h2>
            <p className="text-sm mb-3">当社は、以下の場合を除き、収集した情報を第三者に提供しません。</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>法令に基づく開示が必要な場合</li>
              <li>サービス提供に必要な業務委託先（Supabase、Google Firebase）への提供</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>5. 第三者サービス</h2>
            <p className="text-sm mb-3">本アプリは以下の第三者サービスを利用しています。</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Google Maps SDK（地図表示）</li>
              <li>Firebase Crashlytics（クラッシュレポート）</li>
              <li>Supabase（クラウドデータ保存）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>6. データの保存と削除</h2>
            <p className="text-sm">
              クラウドに保存された制覇進捗データおよびアカウント情報は、アカウント削除の申請により消去します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>7. 子どものプライバシー</h2>
            <p className="text-sm">
              本アプリは13歳未満のお子様を対象としておらず、意図的に13歳未満の個人情報を収集することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>8. ポリシーの変更</h2>
            <p className="text-sm">
              本ポリシーは予告なく変更される場合があります。重要な変更がある場合はアプリ内でお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#1e1a16" }}>9. お問い合わせ</h2>
            <p className="text-sm">
              本ポリシーに関するご質問は、
              <Link href="/michinori/support" className="hover:underline ml-1" style={{ color: "#8a6318" }}>
                サポートページ
              </Link>
              よりお問い合わせください。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 text-sm" style={{ borderTop: "1px solid #d8cfc4", color: "#b0a89e" }}>
          <p>Team ARMADA</p>
          <Link href="/michinori/support" className="hover:underline mt-2 inline-block" style={{ color: "#8a6318" }}>
            サポートページへ →
          </Link>
        </div>
      </div>
    </div>
  );
}
