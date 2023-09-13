## はじめに
本プロジェクトは
[tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)のfork版です。

Wordpressからの移行に特化されており、URLのrewrite設定も組み込まれているため、
特段別の設定をすることなく、[Wordpress ⇨ .mdxコンバーターサンプルプロジェクト](https://moldspoon.jp/tools/wordpress-to-mdx)を使うだけで
移行が可能です。

## how to start
- プロジェクト直下で `npm install`または`yarn`を実行しライブラリのインストールをしてください。
- Next.jsプロジェクトとなるため、`npm run dev`あるいは`yarn run dev`でローカルでWebサーバを起動できます。
- sitemap.config.jsのurlを設定してください。`yarn run build`でプロジェクトを本番ビルドする際にsitemapを作成するため使用します。

## 注意点
コンバータと本プロジェクトを使って移行する場合はコンバーター利用時に、

- フロントマター形式を選択
- rewrite後のURLの先頭につくパスはカラ
- ファイル名のオートリライトをONに
- 文中画像をONに

してご利用ください。