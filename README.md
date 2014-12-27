
とりまチュートリアルをやってみる。

http://facebook.github.io/react/docs/getting-started.html

*helloworld.js*

```js
React.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
```

*index.html*

```
<!DOCTYPE html>
<html>
  <head>
    <script src="http://fb.me/react-0.12.2.js"></script>
    <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/jsx" src="helloworld.js"></script>
  </body>
</html>
```

JSX で記述するために `type="text/jsx"` が必要（XML リテラルみたいな部分）。

## Offline Transform

npm で react-tools をインストール。

```
npm install -g react-tools
```

jsx コマンドでソースコードを変換する。

```
jsx --watch src/ build/
```

index.html でビルド済のコードを読み込む。

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://fb.me/react-0.12.2.js"></script>
    <!-- <script src="http://fb.me/JSXTransformer-0.12.2.js"></script> -->
  </head>
  <body>
    <div id="example"></div>
    <!-- <script type="text/jsx" src="helloworld.js"></script> -->
    <script src="build/helloworld.js"></script>
  </body>
</html>
```

----

http://facebook.github.io/react/docs/tutorial.html

コメントの POST はサーバサイドを作るのが面倒なのでやっていない。

- ぱっと見 WebComponents とか ShadowDOM っぽいけどそれとは全く異なる原理
- 普通に使うとグローバルスコープのオブジェクトが React のコンポーネントになるようだ
    - Getting start の最後の方に CommonJS のスタイルにする方法がちょろっと書かれていたような気がする
- JSX の属性で記述した値は js から次のように参照できる
    - `this.props.<attr>`
- JSX の子要素は下記で取得できる
    - `this.props.children`
- 以下の記述で html 文字列を直接突っ込むことができる
    - `<span dangerouslySetInnerHTML={{__html: rawMarkup}} />`

## 動的更新

- `render()` で下記を使う
    - `this.state.<name>`
- `state` の更新時は下記を使う
    - `this.setState({ ... })`
- `state` の初期状態は下記のメソッドで決定される
    - `getInitialState()`

## イベント

- キャメルケースで JSX に記述する
    - `<form className="commentForm" onSubmit={this.handleSubmit}>`
- フォームの子要素を取得するために（というか子コンポーネントを取得するために）refs を使う
    - `<input type="text" placeholder="Your name" ref="author" />`
    - `var author = this.refs.author.getDOMNode().value.trim();`

----

# 差分更新

*index.html*

```html
<html>
  <head>
    <title>Hello React</title>
    <script src="http://fb.me/react-0.12.2.js"></script>
    <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
  </head>
  <body>
    <div id="content"></div>
    <script type="text/jsx" src="src/timer.js"></script>
  </body>
</html>
```

*src/timer.js*

```js
var Timer = React.createClass({
  getInitialState: function() {
    return {date: new Date()};
  },
  componentDidMount: function() {
    setInterval((function(){
      this.setState({date: new Date()});
    }).bind(this), 1000);
  },
  render: function() {
    return (
      <div className="Timer">
        <div>oreore</div>
        <div>{this.state.date.toString()}</div>
        <div>areare</div>
      </div>
    );
  },
});

React.render(
  <Timer />,
  document.getElementById('content')
);
```

FireBug とかで見てみると `are` の箇所だけが更新されていることがわかる。

`are` の箇所は無理やり書き換えてもすぐに元に戻るが、ore の箇所は更新されていないのでそのまま残る。

# marked-react

https://github.com/spicyj/marked-react

```
npm install --save react
npm install --save spicyj/marked-react
```
