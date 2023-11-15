# 仕組み

q(q)

今回のメインのオブジェクト作るやつ

基本的にこの関数をいじる

じゃあ早速ライブラリをどどーん
```
function q(q){
    return {
        q: document.querySelector(q),
        attr: function(id,ct){this.q.setAttribute(id,ct);return this},
        html: function(ct){this.q.innerHTML=ct;return this},
        text: function(ct){this.q.innerText=ct;return this},
        apde: function(e){this.q.appendChild(e);return this},
        f   : function(f){return this}
    };
}
```
Javascriptのオブジェクト表記をフル活用してます。

qにはdocument.qu((ry で取得した要素を変数として入れます。

attr、その他関数は変数に入れてこれで制御します。

attrを例に見ますと、
```
attr: function(id,ct){this.q.setAttribute(id,ct);return this},
```
中身は、まず要素qの設定(?)をいじる関数の呼び出しをします。

次に、自分自身thisを返してそこからまた関数を呼び出せます。

分かりやすくすると、
```
q("p").attr("unko","yes").text("UnTiTTi!");
↓これを解釈していくと
[qのオブジェクト].attr("unko","yes").text("UnTiTTi!");
↓
[qのオブジェクト].text("UnTiTTi!");
```
returnをいい感じに可視化するとこんな感じに処理されるのが分かります。

こんな仕組みで関数の連続化が可能となります。

以上で、簡易的な仕様の紹介を終わります。