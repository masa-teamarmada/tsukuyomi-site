import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ROAD MASTER",
  description: "ROAD MASTERアプリのプライバシーポリシー。収集する情報とその利用目的について説明します。",
};

const lastUpdated = "2026年4月11日";

export default function MichinoriPrivacyPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">
            ROAD MASTER
          </p>
          <h1 className="text-4xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-muted text-sm">最終更新日：{lastUpdated}</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. はじめに</h2>
            <p>
              ROAD MASTER（以下「本アプリ」）は、Team ARMADA（以下「当社」）が提供するiOSアプリです。
              本ポリシーは、本アプリが収集する情報の種類、利用目的、管理方法についてご説明します。
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. 収集する情報</h2>
            <div className="space-y-4">
              <div className="hex-card p-5">
                <h3 className="font-bold text-foreground mb-2">位置情報（GPS）</h3>
                <p className="text-sm">
                  道路・鉄道路線の制覇記録を生成するため、アプリ使用中に位置情報を取得します。
                  GPS生データはお使いのデバイス内にのみ保存され、外部サーバーにアップロードされることはありません。
                </p>
              </div>
              <div className="hex-card p-5">
                <h3 className="font-bold text-foreground mb-2">制覇進捗データ</h3>
                <p className="text-sm">
                  どの道路・鉄道路線のどの区間を走行・乗車したかを示す進捗データ（セグメント通過フラグ）を収集します。
                  このデータはランキング機能の提供のためクラウドに保存されます。具体的な位置履歴や移動日時は含まれません。
                </p>
              </div>
              <div className="hex-card p-5">
                <h3 className="font-bold text-foreground mb-2">アカウント情報</h3>
                <p className="text-sm">
                  ユーザー登録時に、ユーザー名およびプロフィール画像（任意）を収集します。
                </p>
              </div>
              <div className="hex-card p-5">
                <h3 className="font-bold text-foreground mb-2">クラッシュレポート</h3>
                <p className="text-sm">
                  アプリの品質向上のため、Firebase Crashlyticsによりクラッシュ情報を収集します。
                  個人を特定できる情報は含まれません。
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. 情報の利用目的</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>道路・鉄道路線の制覇進捗の記録・表示</li>
              <li>ユーザーランキングの算出・表示</li>
              <li>アプリの不具合修正およびサービス向上</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. 第三者提供</h2>
            <p className="mb-3">
              当社は、以下の場合を除き、収集した情報を第三者に提供しません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>法令に基づく開示が必要な場合</li>
              <li>サービス提供に必要な業務委託先（Supabase、Google Firebase）への提供</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. 第三者サービス</h2>
            <p className="mb-3">本アプリは以下の第三者サービスを利用しています。</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Google Maps SDK（地図表示）</li>
              <li>Firebase Crashlytics（クラッシュレポート）</li>
              <li>Supabase（クラウドデータ保存）</li>
            </ul>
            <p className="mt-3 text-sm">
              各サービスのプライバシーポリシーについては、各社のウェブサイトをご確認ください。
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. データの保存と削除</h2>
            <p className="text-sm">
              クラウドに保存された制覇進捗データおよびアカウント情報は、アカウント削除の申請により消去します。
              削除をご希望の場合は、サポートページよりお問い合わせください。
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. 子どものプライバシー</h2>
            <p className="text-sm">
              本アプリは13歳未満のお子様を対象としておらず、意図的に13歳未満の個人情報を収集することはありません。
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. ポリシーの変更</h2>
            <p className="text-sm">
              本ポリシーは予告なく変更される場合があります。重要な変更がある場合はアプリ内でお知らせします。
              継続してアプリをご利用いただくことで、変更後のポリシーに同意したものとみなします。
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">9. お問い合わせ</h2>
            <p className="text-sm">
              本ポリシーに関するご質問は、
              <Link href="/michinori/support" className="text-accent-gold hover:underline ml-1">
                サポートページ
              </Link>
              よりお問い合わせください。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-muted">
          <p>Team ARMADA</p>
          <Link href="/michinori/support" className="text-accent-gold hover:underline mt-2 inline-block">
            サポートページへ →
          </Link>
        </div>
      </div>
    </section>
  );
}
