import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAD MASTER — 日本の道を、全部走れ。",
  description:
    "GPSで走った道が地図に自動で刻まれる。国道・都道府県道・高速道路、全国125万セグメントをオフライン搭載。日本の道路制覇に特化したiOSアプリ。",
  openGraph: {
    title: "ROAD MASTER — 日本の道を、全部走れ。",
    description:
      "GPSで走った道が地図に自動で刻まれる。日本の道路制覇に特化したiOSアプリ。",
    siteName: "ROAD MASTER",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAD MASTER — 日本の道を、全部走れ。",
    description:
      "GPSで走った道が地図に自動で刻まれる。125万セグメントをオフライン搭載。",
  },
};

export default function MichinoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="rm-root relative z-10 min-h-screen">{children}</div>;
}
