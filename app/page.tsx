// このファイルが、トップページの中身です。
// Claude Code に「トップページをこう書き換えて」と頼むと、ここが書き換わります。

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">
        今日返信すべき人が、一目で分かる。
      </h1>

      <p className="lead">
        LINE・電話・ホームページ。バラバラに届く体験授業の問い合わせを、1つの画面にまとめます。
        <br />
        朝スマホを開くと、今日返す人だけが並んでいます。
        <br />
        新しく集客するより、すでに届いている問い合わせを取りこぼさないほうが早いはずです。
      </p>

      {/* ▼ リンク先は、教室の公式LINEか問い合わせフォームのURLに差し替えてください。 */}
      <a className="button" href="#">
        まずは1教室で試す
      </a>
    </main>
  );
}
