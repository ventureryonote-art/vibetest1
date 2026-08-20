import type { Metadata } from "next";
import "./globals.css";

// ▼ サイトのタイトル・説明。Claude Code に「タイトルを◯◯に変えて」と頼めば書き換わる。
export const metadata: Metadata = {
  title: "今日返信すべき人が、一目で分かる",
  description: "LINE・電話・ホームページにバラバラに届く体験授業の問い合わせを、1つの画面にまとめます。個別指導塾の教室長向け。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
