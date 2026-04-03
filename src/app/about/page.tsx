import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | つくよみ",
  description: "つくよみは、Team ARMADAが運営するAI業務支援サービスです。日本の中小企業を、AIの力で静かに支えます。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-gold text-sm font-medium tracking-widest mb-4">
                ABOUT TSUKUYOMI
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                月の光のように、
                <br />
                見えないところで支える。
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                つくよみ ── 月読命（ツクヨミノミコト）。
                日本神話で夜を司る神の名を冠したAIアシスタントです。
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                派手な存在ではないけれど、毎日確実に、あなたの事業を支える。
                情報を集め、整理し、次の一手を見つけるお手伝いをします。
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-3xl" />
                <Image
                  src="/images/tsukuyomi.png"
                  alt="つくよみ"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">ミッション</h2>
          <div className="hex-card p-8 sm:p-10 text-center">
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              日本の中小企業が持つ
              <span className="text-accent-gold">技術力</span>と
              <span className="text-accent-blue">可能性</span>を、
              <br className="hidden sm:block" />
              AIの力で最大化する。
            </p>
            <p className="mt-6 text-muted leading-relaxed max-w-2xl mx-auto">
              日本には、世界に通用する技術を持ちながら、人手不足や情報格差で力を発揮しきれていない中小企業が無数にあります。
              つくよみは、そうした企業の「もう一人の社員」として、24時間365日、経営を支えます。
            </p>
          </div>
        </div>
      </section>

      {/* ARMADA connection */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Powered by ARMADA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hex-card p-6">
              <h3 className="text-accent-gold font-bold mb-3">Team ARMADA とは</h3>
              <p className="text-sm text-muted leading-relaxed">
                大学の研究成果や知的財産を活用し、中小企業の事業拡大を技術面から支援するコンサルティングファームです。
                水素エネルギー、環境技術、DXなど、先端技術と産業の橋渡しを行っています。
              </p>
            </div>
            <div className="hex-card p-6">
              <h3 className="text-accent-blue font-bold mb-3">つくよみとの連携</h3>
              <p className="text-sm text-muted leading-relaxed">
                つくよみのサービスを通じて見えてきた経営課題が、先端技術で解決できるケースでは、
                ARMADAの大学知財ネットワークを活用した本格的な技術コンサルティングにシームレスに接続します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">つくよみに相談してみる</h2>
          <p className="mt-4 text-muted">
            業務の自動化から、補助金の探索、市場調査まで。
            まずはお気軽にご相談ください。
          </p>
          <div className="mt-8">
            <Link href="/consulting" className="btn-primary">
              無料相談する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
