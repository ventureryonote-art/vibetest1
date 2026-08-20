// このファイルが、トップページの中身です。
// Claude Code に「トップページをこう書き換えて」と頼むと、ここが書き換わります。

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">
        このページは、まだ誰のものでもありません。
      </h1>

      <p className="lead">
        ここに入るのは、あなたの事業の説明です。
        <br />
        まず <code>docs/01_customer.md</code> に「誰の、どんな困りごとを解くのか」を書いてください。
        <br />
        そのあと Claude Code に、このページの書き換えを頼みます。
      </p>

      <a className="button" href="https://claude.ai/code" target="_blank" rel="noreferrer">
        Claude Code をひらく
      </a>
    </main>
  );
}
