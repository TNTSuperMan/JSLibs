# 仕組み

o(e)

今回のメインのオブジェクト作るやつ  
基本的にこの関数をいじる  
じゃあ早速ライブラリをどどーん
```
function o(e){
    return {
        q: e,
        attr: function(id,ct){this.q.setAttribute(id,ct);return this},
        html: function(ct){this.q.innerHTML=ct;return this},
        text: function(ct){this.q.innerText=ct;return this},
        apde: function(e){this.q.appendChild(e.q);return this},
        f   : function(f){return this}
    };
}
```
Javascriptのオブジェクト表記をフル活用してます。  
oには別関数が生成した要素を変数として入れます。

attr、その他関数は変数に入れてこれで制御します。  
attrを例に見ますと、
```
attr: function(id,ct){this.q.setAttribute(id,ct);return this},
```
中身は、まず要素qの設定(?)をいじる関数の呼び出しをします。  
次に、自分自身thisを返してそこからまた関数を呼び出せます。

分かりやすくすると、
```
o([要素オブジェクト]).attr("unko","yes").text("UnTiTTi!");
↓これを解釈していくと
[oのオブジェクト].attr("unko","yes").text("UnTiTTi!");
↓
[oのオブジェクト].text("UnTiTTi!");
```
returnをいい感じに可視化するとこんな感じに処理されるのが分かります。  
こんな仕組みで関数の連続化が可能となります。

## 実際の利用

別関数でdoc((ryで取得した要素をo関数に当てはめてreturnを  
まあ返すことでなんとかなります。
```
function $(q,nw){
    return nw ? o(document.createElement(q)) :
    o(document.querySelector(q))
}
```
まあこんな感じで要素を当てはめたoオブジェクトを返すように。  
nwが宣言・ifでtrueになる値の場合に新しい要素を作るように。  
Javascriptのあいまいな感じのおかげでnwが宣言されてなくても  
エラーならないw

以上で、簡易的な仕様の紹介を終わります。