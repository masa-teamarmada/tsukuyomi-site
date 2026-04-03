import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-navy/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-accent-gold text-xl">☽</span>
              <span className="text-lg font-bold">つくよみ</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              AIが静かに、日本の中小企業を支える。
            </p>
            <p className="text-xs text-muted mt-4">Powered by ARMADA</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-accent-gold">サービス</h3>
            <ul className="space-y-2">
              <li><Link href="/templates" className="text-sm text-muted hover:text-foreground transition-colors">テンプレート</Link></li>
              <li><Link href="/magazine" className="text-sm text-muted hover:text-foreground transition-colors">マガジン</Link></li>
              <li><Link href="/newsletter" className="text-sm text-muted hover:text-foreground transition-colors">ニュースレター</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-accent-gold">ソリューション</h3>
            <ul className="space-y-2">
              <li><Link href="/grants" className="text-sm text-muted hover:text-foreground transition-colors">補助金マッチング</Link></li>
              <li><Link href="/research" className="text-sm text-muted hover:text-foreground transition-colors">市場調査</Link></li>
              <li><Link href="/consulting" className="text-sm text-muted hover:text-foreground transition-colors">AI業務コンサル</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-accent-gold">つくよみについて</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">ブログ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} つくよみ / Team ARMADA Inc.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted hover:text-foreground transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="text-xs text-muted hover:text-foreground transition-colors">利用規約</Link>
            <Link href="/legal" className="text-xs text-muted hover:text-foreground transition-colors">特定商取引法</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
