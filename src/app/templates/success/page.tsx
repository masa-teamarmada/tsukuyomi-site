import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "購入完了 | つくよみ",
};

export default function SuccessPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-blue/10 mb-6">
          <span className="text-accent-gold text-4xl">☽</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">ご購入ありがとうございます！</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          テンプレートのダウンロードリンクを、ご登録のメールアドレスにお送りします。
          <br />
          数分以内に届かない場合は、迷惑メールフォルダをご確認ください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/templates" className="btn-primary">
            他のテンプレートを見る
          </Link>
          <Link href="/" className="btn-outline">
            トップに戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
