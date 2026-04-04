export type Template = {
  id: string;
  title: string;
  description: string;
  priceInYen: number;
  category: string;
  popular: boolean;
};

export const templates: Template[] = [
  {
    id: "invoice-auto",
    title: "請求書自動生成キット",
    description:
      "freee連携で請求書の作成・送付・入金確認を自動化。毎月の経理作業を90%削減。",
    priceInYen: 9800,
    category: "GAS自動化",
    popular: true,
  },
  {
    id: "slack-daily",
    title: "Slack日報→スプシ自動集計",
    description:
      "Slackの日報チャンネルから自動でスプレッドシートに転記・集計。管理者の確認も一目で。",
    priceInYen: 4800,
    category: "Slack連携",
    popular: false,
  },
  {
    id: "notion-sync",
    title: "Notion↔スプシ双方向同期",
    description:
      "Notionデータベースとスプレッドシートをリアルタイム同期。二重管理を解消。",
    priceInYen: 7800,
    category: "Notion",
    popular: true,
  },
  {
    id: "kpi-dashboard",
    title: "KPIダッシュボード テンプレ",
    description:
      "売上・コスト・進捗を一画面で可視化。スプレッドシートだけで動くダッシュボード。",
    priceInYen: 3800,
    category: "スプレッドシート",
    popular: false,
  },
  {
    id: "email-auto",
    title: "メール自動返信＆振り分け",
    description:
      "Gmailの受信メールをAIで分類し、テンプレート返信を自動送信。対応漏れゼロへ。",
    priceInYen: 5800,
    category: "GAS自動化",
    popular: false,
  },
];

export const categories = ["すべて", "GAS自動化", "Notion", "スプレッドシート", "Slack連携"];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}

export function formatPrice(yen: number): string {
  return `¥${yen.toLocaleString()}`;
}
