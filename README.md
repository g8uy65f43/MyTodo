## 使い方
１．MyTodoとMyTodoListserverのmodulesをインストール
  npm install
#
２．MongoDBを起動
#
３．  $ npm install react-router-dom --save

      $ MyTodoファイルでnpm start
#
４．MyTodoListserverでnodemon todoList.js

## 詳細
このTodoListでやるべきこと、またはやったことを記録して、やり漏らすのリスクを減らし、これからやることを思い出すための時間コストなども省ける。
実現した機能：
１.新しいデータを作れる
2.ダブルクリックでデータをアップデート
3.チェックボックスでデータ削除
4.データの状態（やったかどうか）のチェンジ
5.データの状態によって、リストのチェンジも可能
## 開発の経緯・ストーリー
GraphQLとApolloの練習のため、作ったものです。
## 使用した技術
フロント・クライアント技術
  -JavaScript,React,GraphQL
サーバーサイド技術
  Node.JS
DB・ミドルウェア技術
  MongoDB
## 使用した技術の選定理由
正直に言いますと、この制作物のデータはそれほど複雑なデータではないので、別にGraphQLを必要がないが、こちらを基づいて、更に複雑なものも作れます。
GraphQLでフロントエンドが自分でAPIから、ほしいデータだけ取れるのは仕事の効率も作動の効率も向上できて、素晴らしい発想です。
また、Reactと組み合わせば、更に簡潔にできて、コーディングも更に楽しくなります。
