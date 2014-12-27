
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
