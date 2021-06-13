// 変数nodeIteratorにnodeIteratorオブジェクトを代入
const nodeIterator = document.createNodeIterator( // documentのcreateNodeIteratorというメソッドを使う
  document.body, // body全体から探す
  NodeFilter.SHOW_TEXT, // テキストノードだけ探す
  {
    acceptNode: function (node) { // 条件を設定する関数
      return /\d{3}-\d{4}-\d{4}/.test(node.nodeValue) ? // テキストノードに電話番号が含まれているか？
        NodeFilter.FILTER_ACCEPT : // 含まれているなら「そのノードは条件を満たすよ！」を返す
        NodeFilter.FILTER_REJECT; // 含まれていないなら「そのノードは条件を見たさず、その子孫も条件を満たさないよ！」を返す
    }
  }
);

let node; // letとかで宣言は必要ない？
// tureの間繰り返す
while (node = nodeIterator.nextNode()) { // 次の対象ノードに移動して、そのノードをnodeに代入
  node.parentNode.classList.add('Klass'); // テキストノードの親ノード（囲んでいるタグ）のクラスにKlassを追加
}

const hoge = document.querySelectorAll('.Klass');

for (let i = 0; i < hoge.length; i++) {
  if (!hoge[i].closest('a') &&
      !hoge[i].closest('button') &&
      hoge[i].tagName !== 'OPTION') {
    hoge[i].innerHTML =
      hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
        return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
      });
  }
}

// フィルタ関数の箇所は、名前なしでいきなりfunction...と書き始める記事が多そうですが、acceptNode: としたのは、名前があったほうがわかりやすいからという理由でしょうか？
// TreeWalkerの記事を見ながら読み解いたのですが、そのままNodeIteratorで読み変えるとまずい部分はありますか？