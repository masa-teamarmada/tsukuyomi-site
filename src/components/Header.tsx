"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/templates", label: "テンプレート" },
  { href: "/magazine", label: "マガジン" },
  { href: "/newsletter", label: "ニュースレター" },
  { href: "/grants", label: "補助金" },
  { href: "/research", label: "市場調査" },
  { href: "/consulting", label: "コンサル" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-accent-gold text-xl">☽</span>
            <span className="text-lg font-bold tracking-wide">つくよみ</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/consulting" className="btn-primary text-sm !py-2 !px-5">
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="block text-sm text-muted hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
