# 要素編集を、一行に。

aLineElementとは、一行に、要素編集を詰め込めるようにするJavascriptライブラリです。

## 例
```
q("p").text("Hello,World!").attr("style","color:red");
```
それぞれの関数が、自分自身(this)を返すことで、関数を連続させ、行数短縮となります。

クラスで作ろうと思いましたが、上手くいかなかったので、関数がオブジェクトを返す仕組みにしました。
## 不具合に関して
head要素にaLineElementを用いたスクリプト入れると上手くいきません。

body要素の最後に入れる方法にしてください。ライブラリの読み込みはheadでもOKです。

簡易的な仕様はこちら[/aLineElement/docs/index.md](/aLineElement/docs/index.md)