## はじめに
本プロジェクトは
[tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)のfork版です。

Wordpressからの移行に特化されており、URLのrewrite設定も組み込まれているため、
特段別の設定をすることなく、[Wordpress ⇨ .mdxコンバーターサンプルプロジェクト](https://moldspoon.jp/tools/wordpress-to-mdx)を使うだけで
移行が可能です。

## ローカルで起動する

- `.env.example`をコピーし`.env.local`を作成して、`BASE_URL`にあなたの環境のドメインを設定してください。

- プロジェクト直下で `npm install`または`yarn`を実行しライブラリのインストールをしてください。
  Next.jsプロジェクトとなるため、`npm run dev`あるいは`yarn run dev`でローカルでWebサーバを起動できます。
- sitemap.config.jsのurlを設定してください。`yarn run build`でプロジェクトを本番ビルドする際にsitemapを作成するため使用します。

## Vercelで本番稼働する

プロジェクト作成時に、本レポジトリをfork or 引き継いで作成したgitレポジトリを選択してデプロイいただければ稼働します。
Sitemapを適切に作成したいときは、環境変数に`BASE_URL`を設定してください。

## 注意点
コンバーターと本プロジェクトを使って移行する場合はコンバーター利用時に、以下の設定を適用してください。

- フロントマター形式を選択
- rewrite後のURLの先頭につくパスはカラ
- ファイル名のオートリライトをONに
- 文中画像をONに