"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

/* =========================================================
   ROAD MASTER LP — Dark / GIS theme
   Vanilla JS animations (IntersectionObserver + rAF)
   ========================================================= */

// ── Hooks ──────────────────────────────────────────────────

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ── Counter コンポーネント ────────────────────────────────

function Counter({
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [ref, inView] = useInView(0.3);
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reduced) { setVal(to); return; }
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setVal(Math.floor(ease(t) * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className="rm-tabular">
      {prefix}{val.toLocaleString("en-US")}{suffix}
    </span>
  );
}

// ── FadeUp コンポーネント ────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── HeroFade（初期表示用、inViewなしで即アニメ）────────────

function HeroFade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(id);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}

// ── iPhone モックアップ ──────────────────────────────────

function PhoneMockup({ label, height = "h-[560px]" }: { label: string; height?: string }) {
  return (
    <div
      className={`relative ${height} aspect-[9/19.5] mx-auto rounded-[2.6rem] border-[10px] border-[#1b2236] bg-gradient-to-b from-[#0c1120] to-[#070a14] overflow-hidden`}
      style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(77,184,255,0.08)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0c1120] rounded-b-[1.2rem] z-20" />
      <div className="absolute inset-0 rm-grid-bg-dense">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070a14]/80" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="rm-eyebrow mb-4 opacity-70">SCREENSHOT</div>
        <p className="font-mono text-sm text-[#a4adc1] tracking-wide">{label}</p>
        <p className="text-[10px] text-[#5a6478] mt-3 tracking-[0.2em]">差し替え予定</p>
      </div>
      <div className="absolute -top-1/2 -left-1/3 w-[120%] h-[80%] bg-gradient-to-br from-white/[0.04] to-transparent rotate-12 pointer-events-none" />
    </div>
  );
}

// ── 日本地図 SVG ──────────────────────────────────────────

function JapanMapAnimated() {
  return (
    <svg viewBox="0 0 600 500" className="w-full h-auto" role="img" aria-label="日本地図と走行ライン">
      <defs>
        <linearGradient id="rm-line-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="rm-line-grad-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4DB8FF" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
        <filter id="rm-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g stroke="rgba(77,184,255,0.06)" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />)}
        {Array.from({ length: 11 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} />)}
      </g>
      <g fill="rgba(77,184,255,0.04)" stroke="rgba(77,184,255,0.35)" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M380 60 L460 50 L500 90 L490 140 L450 160 L410 140 L390 110 Z" />
        <path d="M120 280 L180 220 L240 200 L300 210 L360 230 L400 250 L420 280 L390 310 L340 320 L290 310 L240 320 L180 330 L140 320 Z" />
        <path d="M210 360 L260 350 L280 380 L240 400 L200 390 Z" />
        <path d="M100 380 L150 360 L170 400 L160 440 L120 450 L90 420 Z" />
      </g>
      <path d="M150 320 Q190 300 230 290 T310 280 Q360 270 380 250 T420 240" fill="none" stroke="url(#rm-line-grad)" strokeWidth="3" strokeLinecap="round" filter="url(#rm-glow)" className="rm-draw-line" />
      <path d="M390 110 Q420 100 450 110 T490 130" fill="none" stroke="url(#rm-line-grad-blue)" strokeWidth="2.5" strokeLinecap="round" filter="url(#rm-glow)" className="rm-draw-line-2" />
      <path d="M170 250 Q210 240 250 245 T330 260 Q370 270 400 285" fill="none" stroke="url(#rm-line-grad-blue)" strokeWidth="2" strokeLinecap="round" opacity="0.7" className="rm-draw-line-3" />
      {[{ cx: 420, cy: 240 }, { cx: 230, cy: 290 }, { cx: 490, cy: 130 }].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="6" fill="#FF6B35" opacity="0.4" className="rm-pulse-dot" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${p.cx}px ${p.cy}px` }} />
          <circle cx={p.cx} cy={p.cy} r="3" fill="#FF6B35" />
        </g>
      ))}
    </svg>
  );
}

// ── 道路標識バッジ ────────────────────────────────────────

function RoadSignOnigiri({ num }: { num: string }) {
  return (
    <div className="rm-sign-onigiri w-16 h-16 flex items-end justify-center pb-1 transition-transform hover:-translate-y-1.5 hover:rotate-3" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
      <span className="text-base">{num}</span>
    </div>
  );
}
function RoadSignPref({ num }: { num: string }) {
  return (
    <div className="rm-sign-pref w-16 h-16 flex items-center justify-center text-sm transition-transform hover:-translate-y-1.5 hover:rotate-3" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
      {num}
    </div>
  );
}
function RoadSignExpressway({ num }: { num: string }) {
  return (
    <div className="rm-sign-expressway w-16 h-12 rounded-md flex items-center justify-center text-base transition-transform hover:-translate-y-1.5 hover:rotate-3">
      {num}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="rm-eyebrow mb-3">{children}</p>;
}

// ── メインページ ──────────────────────────────────────────

export default function MichinoriPage() {
  return (
    <div className="font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[#252c42]/60" style={{ background: "rgba(10,14,26,0.8)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-extrabold text-[#0a0e1a] text-sm" style={{ background: "linear-gradient(135deg,#FF6B35,#FBBF24)" }}>
              R
            </div>
            <div>
              <div className="font-mono font-extrabold tracking-[0.18em] text-sm text-white">ROAD MASTER</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] rm-pulse-dot" />
                <span className="text-[10px] text-[#8892a6] tracking-widest">PRE-LAUNCH</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#a4adc1]">
            <a href="#experience" className="hover:text-white transition-colors">体験</a>
            <a href="#stats" className="hover:text-white transition-colors">規模</a>
            <a href="#collection" className="hover:text-white transition-colors">標識</a>
            <a href="#privacy" className="hover:text-white transition-colors">プライバシー</a>
            <a href="#cta" className="rm-btn-primary !py-2 !px-5 !text-xs">事前登録</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0a0e1a" }}>
        <div className="absolute inset-0 rm-grid-bg" />
        <div className="absolute inset-0 rm-radial-glow" />
        <div className="rm-scan-line" style={{ top: "10%" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* テキスト */}
            <div>
              <HeroFade delay={0}>
                <Eyebrow>iOS · Pre-registration</Eyebrow>
              </HeroFade>
              <HeroFade delay={120}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                  日本の道を、<br />
                  <span style={{ background: "linear-gradient(90deg,#FF6B35,#FBBF24,#FF6B35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    全部走れ。
                  </span>
                </h1>
              </HeroFade>
              <HeroFade delay={240}>
                <p className="mt-7 text-base sm:text-lg text-[#a4adc1] leading-relaxed max-w-lg">
                  走った道路がGPSで自動的に地図へ刻まれる。<br className="hidden sm:block" />
                  国道・都道府県道・高速道路、全国<span className="text-white font-bold rm-tabular"> 1,250,000 </span>セグメントを制覇せよ。
                </p>
              </HeroFade>
              <HeroFade delay={360}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#cta" className="rm-btn-primary">
                    <AppleIcon />
                    App Store で事前登録
                  </a>
                  <a href="#experience" className="rm-btn-secondary">
                    デモを見る
                    <ArrowRightIcon />
                  </a>
                </div>
              </HeroFade>
              <HeroFade delay={480}>
                <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                  {[{ k: "OFFLINE DB", v: "178 MB" }, { k: "AUTH", v: "なし" }, { k: "PRICE", v: "¥0" }].map((s) => (
                    <div key={s.k} className="border-l-2 border-[#252c42] pl-3">
                      <div className="rm-eyebrow !text-[9px] !tracking-[0.24em]">{s.k}</div>
                      <div className="font-mono font-bold text-white mt-1 rm-tabular">{s.v}</div>
                    </div>
                  ))}
                </div>
              </HeroFade>
            </div>

            {/* 地図 */}
            <HeroFade delay={300} className="relative">
              <div className="absolute -inset-8 rounded-full" style={{ background: "rgba(255,107,53,0.1)", filter: "blur(48px)" }} />
              <div className="relative rm-card-elevated p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] rm-pulse-dot" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#8892a6]">LIVE / GPS-TRACKING</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#8892a6]">35.6762°N, 139.6503°E</span>
                </div>
                <JapanMapAnimated />
                <div className="mt-4 flex justify-between items-center pt-4 border-t border-[#252c42]">
                  {[
                    { k: "TODAY", v: "247.3", unit: "km", color: "white" },
                    { k: "SEGMENTS", v: "+18", color: "#FF6B35" },
                    { k: "PROGRESS", v: "0.42%", color: "#34D399" },
                  ].map((s) => (
                    <div key={s.k}>
                      <div className="rm-eyebrow !text-[9px]">{s.k}</div>
                      <div className="font-mono font-bold text-xl mt-1 rm-tabular" style={{ color: s.color }}>
                        {s.v}{s.unit && <span className="text-[#8892a6] text-sm ml-1">{s.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </HeroFade>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-24 border-y border-[#252c42]" style={{ background: "#0a0e1a" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeUp><Eyebrow>The Problem</Eyebrow></FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight max-w-3xl mx-auto text-white">
                あなたが今日走った道は、<br className="hidden sm:block" />
                <span className="text-[#5a6478]">誰にも記録されないまま消えていく。</span>
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-[#a4adc1] max-w-2xl mx-auto leading-relaxed">
                GPSログは溜まるだけ、地図アプリは通り過ぎるだけ。<br />
                <span className="text-white font-bold">走った軌跡を、あなた自身の資産に変える。</span>
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="rm-card p-8 relative overflow-hidden h-full">
                <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.3em] text-[#5a6478]">BEFORE</div>
                <div className="rm-grid-bg h-48 rounded-lg flex items-center justify-center opacity-30 mb-6">
                  <span className="text-[#5a6478] text-sm">記録なし</span>
                </div>
                <h3 className="text-lg font-bold text-[#a4adc1]">走り終わったら、何も残らない</h3>
                <p className="text-sm text-[#5a6478] mt-2 leading-relaxed">通過したルートも、通り過ぎた道路名も、明日には忘れている。</p>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="rm-card p-8 relative overflow-hidden h-full" style={{ boxShadow: "0 0 0 1px rgba(255,107,53,0.2), 0 0 40px rgba(255,107,53,0.08)" }}>
                <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.3em] text-[#FF6B35]">WITH ROAD MASTER</div>
                <div className="h-48 rounded-lg mb-6 rm-grid-bg-dense relative overflow-hidden">
                  <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="grad-paint" x1="0" x2="1">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="100%" stopColor="#FBBF24" />
                      </linearGradient>
                    </defs>
                    <path d="M20 150 Q80 120 140 110 T260 90 Q320 80 380 60" fill="none" stroke="url(#grad-paint)" strokeWidth="4" strokeLinecap="round" className="rm-draw-line" />
                    <path d="M40 80 Q100 100 160 95 T280 110 Q340 120 380 130" fill="none" stroke="#4DB8FF" strokeWidth="3" strokeLinecap="round" opacity="0.7" className="rm-draw-line-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">走るたびに、地図が塗られていく</h3>
                <p className="text-sm text-[#a4adc1] mt-2 leading-relaxed">帰宅後にアプリを開けば、今日通った道がカラフルに刻まれている。</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CORE EXPERIENCE */}
      <section id="experience" className="relative py-28" style={{ background: "#0a0e1a" }}>
        <div className="absolute inset-0 rm-radial-glow opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeUp><Eyebrow>The Core Experience</Eyebrow></FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-4xl sm:text-6xl font-black leading-tight text-white">
                走れば、<span className="text-[#FF6B35]">塗られる。</span>
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-5 text-[#a4adc1] max-w-2xl mx-auto">何もしなくていい。普段通りに移動するだけで、地図が日々埋まっていく。</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
            {[
              { step: "01", phase: "BEFORE", title: "走る前 — 白地図", desc: "新規ユーザーの地図は真っ新。47/47 都道府県すべての道路を踏破するのが旅のはじまり。", tagColor: "#5a6478" },
              { step: "02", phase: "DURING", title: "走行中 — リアルタイム描画", desc: "GPSで走った道がポリラインとして地図上に追加されていく。電波がなくてもオフラインで全部記録。", tagColor: "#4DB8FF" },
              { step: "03", phase: "AFTER", title: "走った後 — 地図が完成していく", desc: "通った国道・県道・高速道路がすべて自動でカウント。今日の獲得セグメント数と進捗率を確認。", tagColor: "#FF6B35" },
            ].map((s, i) => (
              <FadeUp key={s.step} delay={i * 120}>
                <div className="rm-card rm-card-glow p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-mono text-5xl font-black text-[#252c42] rm-tabular">{s.step}</div>
                    <div className="font-mono text-[10px] tracking-[0.3em] px-3 py-1 rounded-full border" style={{ color: s.tagColor, borderColor: `${s.tagColor}40`, background: `${s.tagColor}10` }}>
                      {s.phase}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                  <p className="text-sm text-[#a4adc1] leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Eyebrow>Route Detail</Eyebrow>
                <h3 className="text-3xl sm:text-4xl font-black leading-tight text-white">
                  1日のドライブが、<br />
                  <span className="text-[#4DB8FF]">そのまま戦果になる。</span>
                </h3>
                <p className="mt-5 text-[#a4adc1] leading-relaxed">走り終わったあとに開く詳細画面では、当日のルートが色付きで地図に重なる。通過した国道番号・県道番号・走行距離・新たに制覇した区間が一覧で確認できる。</p>
                <ul className="mt-6 space-y-2 text-sm text-[#a4adc1]">
                  {["走行ライン（ポリライン）の色分け表示", "通過した道路名・番号の自動検出", "新規制覇セグメントのハイライト", "Google Maps Timeline / Takeout のJSON取り込み対応"].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="text-[#34D399] mt-0.5">▸</span>{line}
                    </li>
                  ))}
                </ul>
              </div>
              <PhoneMockup label="route-detail-map" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="relative py-24 border-y border-[#252c42]" style={{ background: "#070a14" }}>
        <div className="absolute inset-0 rm-grid-bg-dense opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeUp><Eyebrow>Scale</Eyebrow></FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                データの暴力で、<span className="text-[#FBBF24]">圧倒する。</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: 1250000, suffix: "+", label: "セグメント", sub: "国道・県道・高速の全道路区間", color: "#FF6B35" },
              { value: 47, suffix: "/47", label: "都道府県", sub: "47/47 全国対応", color: "#4DB8FF" },
              { value: 178, suffix: " MB", label: "オフラインDB", sub: "電波圏外でも完全動作", color: "#34D399" },
              { value: 0, prefix: "¥", label: "MVP期間中", sub: "無料・無課金・無広告", color: "#FBBF24" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 80}>
                <div className="rm-card p-6 lg:p-8 hover:border-[#FF6B35]/40 transition-all">
                  <div className="font-mono font-black text-4xl sm:text-5xl lg:text-6xl rm-tabular leading-none" style={{ color: s.color }}>
                    <Counter to={s.value} duration={2200} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <div className="mt-4 font-bold text-white">{s.label}</div>
                  <div className="text-xs text-[#8892a6] mt-1">{s.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="relative py-28" style={{ background: "#0a0e1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeUp><Eyebrow>Collection</Eyebrow></FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-4xl sm:text-6xl font-black leading-tight text-white">
                道を、<span className="text-[#FBBF24]">コレクションする。</span>
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-5 text-[#a4adc1] max-w-2xl mx-auto">通った道路標識がそのままバッジ化。シール帳のように埋めていく快感。</p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="flex flex-wrap items-end justify-center gap-6 mb-16">
              {[
                { num: "1", type: "onigiri" }, { num: "246", type: "onigiri" }, { num: "16", type: "onigiri" },
                { num: "57", type: "pref" }, { num: "11", type: "pref" },
                { num: "E1", type: "expressway" }, { num: "C2", type: "expressway" },
              ].map((s) => (
                <div key={`${s.type}-${s.num}`}>
                  {s.type === "onigiri" && <RoadSignOnigiri num={s.num} />}
                  {s.type === "pref" && <RoadSignPref num={s.num} />}
                  {s.type === "expressway" && <RoadSignExpressway num={s.num} />}
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "国道おにぎり", color: "#4DB8FF", desc: "全国 459 路線の国道。番号別にコレクト。", screenshot: "national-road-collection", count: "459" },
              { title: "高速ナンバリング", color: "#34D399", desc: "E1〜E98 + 環状路線。日本の動脈を制圧。", screenshot: "expressway-collection", count: "98" },
              { title: "都道府県別マップ", color: "#FBBF24", desc: "47都道府県、それぞれの制覇率を可視化。", screenshot: "prefectural-road-map", count: "47" },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 100}>
                <div className="rm-card rm-card-glow-blue overflow-hidden h-full">
                  <div className="p-6 pb-0">
                    <div className="rm-eyebrow" style={{ color: c.color }}>{c.title}</div>
                    <div className="font-mono text-3xl font-black mt-2 rm-tabular" style={{ color: c.color }}>{c.count}</div>
                  </div>
                  <div className="px-6 pt-3 pb-6">
                    <p className="text-sm text-[#a4adc1] leading-relaxed">{c.desc}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <PhoneMockup label={c.screenshot} height="h-[400px]" />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24 border-y border-[#252c42]" style={{ background: "#070a14" }}>
        <div className="absolute inset-0 rm-grid-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeUp><Eyebrow>How it works</Eyebrow></FadeUp>
            <FadeUp delay={100}><h2 className="text-3xl sm:text-5xl font-black text-white">起動して、走るだけ。</h2></FadeUp>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px" style={{ background: "linear-gradient(to right,transparent,#252c42,transparent)" }} />
            {[
              { num: "START", step: "01", title: "起動 + 位置情報を許可", desc: "アプリ起動、Always Allow を選ぶだけ。バックグラウンドで省電力GPS追跡。" },
              { num: "MOVE", step: "02", title: "普段通りに移動する", desc: "車・電車・自転車・徒歩、何でもOK。OSM道路DBで自動マッチング。" },
              { num: "COLLECT", step: "03", title: "帰ったら地図を眺める", desc: "今日の戦果を確認、新規セグメントの解放、進捗率の更新。" },
            ].map((s, i) => (
              <FadeUp key={s.num} delay={i * 100}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto w-24 h-24 rm-card-elevated rounded-full flex flex-col items-center justify-center mb-6 border border-[#252c42]">
                    <div className="font-mono font-black text-xs tracking-[0.2em] text-[#FF6B35]">{s.num}</div>
                    <div className="font-mono font-black rm-tabular text-2xl mt-1 text-white">{s.step}</div>
                  </div>
                  <h3 className="font-bold text-lg text-white">{s.title}</h3>
                  <p className="text-sm text-[#a4adc1] mt-2 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="relative py-28" style={{ background: "#0a0e1a" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <FadeUp><Eyebrow>Privacy First</Eyebrow></FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                あなたの軌跡は、<br className="hidden sm:block" />
                <span className="text-[#34D399]">あなただけのもの。</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp>
            <div className="rm-card p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative aspect-square max-w-sm mx-auto">
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    <defs>
                      <radialGradient id="rm-shield">
                        <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="150" cy="150" r="120" fill="url(#rm-shield)" />
                    <circle cx="150" cy="150" r="120" fill="none" stroke="#34D39940" strokeDasharray="4 6" />
                    <circle cx="150" cy="150" r="90" fill="none" stroke="#34D39920" strokeDasharray="2 4" />
                    <rect x="115" y="105" width="70" height="120" rx="14" fill="#1b2236" stroke="#34D399" strokeWidth="2" />
                    <rect x="125" y="120" width="50" height="80" rx="3" fill="#0a0e1a" />
                    <text x="150" y="165" textAnchor="middle" fill="#34D399" fontFamily="monospace" fontSize="9" fontWeight="bold">GPS LOG</text>
                    <text x="150" y="180" textAnchor="middle" fill="#8892a6" fontFamily="monospace" fontSize="7">LOCAL ONLY</text>
                    <circle cx="150" cy="215" r="2" fill="#8892a6" />
                    <text x="40" y="50" fill="#5a6478" fontFamily="monospace" fontSize="9">× CLOUD</text>
                    <text x="220" y="50" fill="#5a6478" fontFamily="monospace" fontSize="9">× ANALYTICS</text>
                    <text x="30" y="270" fill="#5a6478" fontFamily="monospace" fontSize="9">× THIRD-PARTY</text>
                    <text x="215" y="270" fill="#5a6478" fontFamily="monospace" fontSize="9">× ADS</text>
                    <line x1="185" y1="165" x2="270" y2="120" stroke="#34D39960" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="200" y="115" fill="#34D399" fontFamily="monospace" fontSize="8" fontWeight="bold">flag only →</text>
                  </svg>
                </div>
                <ul className="space-y-5">
                  {[
                    { h: "GPS生ログはローカル保存のみ", d: "デバイス内のSQLiteに暗号化保存。クラウド同期なし。" },
                    { h: "送信は「制覇フラグ」だけ", d: "「この区間を通過した」という事実のみ。経路は端末外に出ない。" },
                    { h: "サードパーティ計測ゼロ", d: "アナリティクス・広告SDKは未搭載。トラッキングしない。" },
                    { h: "アカウント不要", d: "メールアドレスもパスワードも不要。完全にローカルファースト。" },
                  ].map((p) => (
                    <li key={p.h} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5" style={{ border: "1px solid rgba(52,211,153,0.4)", background: "rgba(52,211,153,0.1)" }}>
                        <CheckIcon />
                      </div>
                      <div>
                        <div className="font-bold text-white">{p.h}</div>
                        <div className="text-sm text-[#a4adc1] mt-0.5">{p.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="relative py-28 border-t border-[#252c42] overflow-hidden" style={{ background: "#0a0e1a" }}>
        <div className="absolute inset-0 rm-grid-bg opacity-60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%,rgba(255,107,53,0.18) 0%,transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeUp><Eyebrow>Pre-launch</Eyebrow></FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-4xl sm:text-6xl font-black leading-[1.05] text-white">
              白地図を、<br />
              <span style={{ background: "linear-gradient(90deg,#FF6B35,#FBBF24,#FF6B35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                塗りつぶしにいけ。
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-[#a4adc1] max-w-xl mx-auto leading-relaxed">
              ROAD MASTER は App Store 事前登録を受付中。リリース通知を受け取って、最速で白地図を塗り潰しに行こう。
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#" className="rm-btn-primary !text-base">
                <AppleIcon size={18} />
                App Store で事前登録
              </a>
              <a href="mailto:hello@team-armada.jp?subject=ROAD%20MASTER%20リリース通知希望" className="rm-btn-secondary">
                リリース通知を受け取る
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={400}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-12 border-t border-[#252c42]">
              {[{ k: "REQUIRED", v: "iOS 17.0+" }, { k: "PRICE", v: "Free" }, { k: "SIZE", v: "~200 MB" }, { k: "REGION", v: "Japan" }].map((s) => (
                <div key={s.k}>
                  <div className="rm-eyebrow !text-[10px]">{s.k}</div>
                  <div className="font-mono font-bold text-white mt-1 rm-tabular text-sm">{s.v}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#252c42]" style={{ background: "#070a14" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md flex items-center justify-center font-mono font-extrabold text-[#0a0e1a] text-sm" style={{ background: "linear-gradient(135deg,#FF6B35,#FBBF24)" }}>R</div>
                <div className="font-mono font-extrabold tracking-[0.18em] text-white">ROAD MASTER</div>
              </div>
              <p className="text-xs text-[#5a6478] mt-3 max-w-xs leading-relaxed">
                日本の道路を全部走るための、<br />位置ゲーム型 GPS トラッキングアプリ。
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="rm-eyebrow !text-[9px] mb-3">PRODUCT</div>
                <ul className="space-y-2 text-[#a4adc1]">
                  <li><a href="#experience" className="hover:text-white transition-colors">体験</a></li>
                  <li><a href="#stats" className="hover:text-white transition-colors">規模</a></li>
                  <li><a href="#collection" className="hover:text-white transition-colors">標識</a></li>
                </ul>
              </div>
              <div>
                <div className="rm-eyebrow !text-[9px] mb-3">SUPPORT</div>
                <ul className="space-y-2 text-[#a4adc1]">
                  <li><Link href="/michinori/support" className="hover:text-white transition-colors">サポート</Link></li>
                  <li><Link href="/michinori/privacy" className="hover:text-white transition-colors">プライバシー</Link></li>
                </ul>
              </div>
              <div>
                <div className="rm-eyebrow !text-[9px] mb-3">COMPANY</div>
                <ul className="space-y-2 text-[#a4adc1]">
                  <li><a href="https://team-armada.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Team ARMADA</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rm-divider-h my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#5a6478]">
            <div className="font-mono tracking-wide">© 2026 ROAD MASTER · Powered by Team ARMADA</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] rm-pulse-dot" />
              <span className="font-mono tracking-widest">PRE-LAUNCH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── SVGアイコン ───────────────────────────────────────────

function AppleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M19 12l-7 7m7-7L12 5m7 7H5" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
