// このファイルが、トップページの中身です。
// Claude Code に「トップページをこう書き換えて」と頼むと、ここが書き換わります。

export default function Home() {
  return (
    <main className="container">
      <span className="eyebrow">個別指導塾の教室長へ</span>

      <h1 className="title">
        今日返信すべき人が、
        <br />
        一目で分かる。
      </h1>

      <p className="lead">
        LINE・電話・ホームページ。バラバラに届く体験授業の問い合わせを、1つの画面にまとめます。
        <br />
        朝スマホを開くと、まだ返していない人だけが並んでいます。
      </p>

      <a className="button" href="#contact">
        1教室で試してみる
      </a>

      {/* ▼ いま起きていること */}
      <section className="section">
        <h2 className="section-title">こんなことが起きていませんか</h2>

        <ul className="channel-list">
          <li className="channel">
            <span className="channel-name">LINE</span>
            <span className="channel-desc">授業中に届いて、未読のまま流れていく</span>
          </li>
          <li className="channel">
            <span className="channel-name">電話</span>
            <span className="channel-desc">手元のメモ用紙に走り書きして、そのまま</span>
          </li>
          <li className="channel">
            <span className="channel-name">ホームページ</span>
            <span className="channel-desc">メールの受信箱で、他の連絡に埋もれる</span>
          </li>
        </ul>

        <p className="body-text">
          置き場所が3つに分かれていると、「まだ返していない人」は記憶の中にしかありません。
          夜になって思い出せた人には返信でき、思い出せなかった人には返信できない。
          <strong>返信が1日遅れた家庭は、その間に別の塾を見に行きます。</strong>
        </p>
      </section>

      {/* ▼ 朝に開く画面 */}
      <section className="section">
        <h2 className="section-title">朝、開くとこうなります</h2>

        <div className="screen">
          <div className="screen-head">
            <span className="screen-title">今日返す人</span>
            <span className="screen-count">3件</span>
          </div>

          <ul className="screen-list">
            <li className="screen-row">
              <span className="screen-person">
                Aさま
                <span className="screen-meta">中2・数学</span>
              </span>
              <span className="screen-right">
                <span className="tag">LINE</span>
                <span className="screen-elapsed">昨日 19:42</span>
              </span>
            </li>
            <li className="screen-row">
              <span className="screen-person">
                Bさま
                <span className="screen-meta">小5・体験希望</span>
              </span>
              <span className="screen-right">
                <span className="tag">電話</span>
                <span className="screen-elapsed">昨日 17:10</span>
              </span>
            </li>
            <li className="screen-row">
              <span className="screen-person">
                Cさま
                <span className="screen-meta">中3・冬期講習</span>
              </span>
              <span className="screen-right">
                <span className="tag">HP</span>
                <span className="screen-elapsed">2日前 21:05</span>
              </span>
            </li>
          </ul>

          <p className="screen-foot">返信したら1タップで消えます。消えたら、今日の分は終わりです。</p>
        </div>

        <p className="note">※ 画面は表示例です。実際の問い合わせではありません。</p>
      </section>

      {/* ▼ やらないこと */}
      <section className="section">
        <h2 className="section-title">やらないこと</h2>

        <p className="body-text">
          機能を増やすと、毎朝開かなくなります。この3つは作りません。
        </p>

        <ul className="dont-list">
          <li>
            <strong>月謝の集金・決済</strong>
            <span className="dont-reason">今の口座振替を置き換えません</span>
          </li>
          <li>
            <strong>保護者向けのアプリ・マイページ</strong>
            <span className="dont-reason">保護者に新しいアプリを入れてもらいません</span>
          </li>
          <li>
            <strong>複数教室の一括管理・本部レポート</strong>
            <span className="dont-reason">まず1教室で成り立たせます</span>
          </li>
        </ul>
      </section>

      {/* ▼ CTA
          リンク先は、あなたのLINEか問い合わせフォームのURLに差し替えてください。
          例: href="https://line.me/R/ti/p/@xxxxxxx" */}
      <section className="section" id="contact">
        <div className="card">
          <h2>まず、1教室で試させてください</h2>
          <p className="body-text">
            いま届いている問い合わせを、どこにどう置いているか。
            15分だけ聞かせていただけたら、その置き方に合わせて作ります。
          </p>
          <a className="button" href="#">
            LINEで話を聞いてもらう
          </a>
        </div>
      </section>
    </main>
  );
}
