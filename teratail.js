// const tel_pattern = /0([0-9]-[0-9]{4}|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9])-[0-9]{4}/g;
const tel_pattern = "0([0-9]-[0-9]{4}|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9])-[0-9]{4}";
// const tel_cell_pattern = /0[789]0-[0-9]{4}-[0-9]{4}/g;
const tel_cell_pattern = "0[789]0-[0-9]{4}-[0-9]{4}";

const kakko_tel_pattern = "\(0([0-9]-[0-9]{4}\)|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9])-[0-9]{4}";

// const tel_ptn = /0[789]0-[0-9]{4}-[0-9]{4}/g;
// const tel_ptn = /0([0-9]-[0-9]{4}|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9])-[0-9]{4}|0[789]0-[0-9]{4}-[0-9]{4}/g;

// 追加するときは「+ "|" + パターン」
// 変数を削除するときは、ここからも「+ "|" + パターン」を削除する
const tel_ptn = new RegExp(tel_pattern + "|" + tel_cell_pattern, "g");
console.log(tel_ptn);

// 文字列をNodeListに変換する関数
function convertHtml(text) {
  const div = document.createElement("div");
  div.innerHTML = `<div>${text}</div>`;
  return div.firstChild.childNodes;
}


const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  function (node) {
    return tel_ptn.test(node.nodeValue) ?
      NodeFilter.FILTER_ACCEPT :
      NodeFilter.FILTER_REJECT;
  }
);

let node;
while (node = nodeIterator.nextNode()) {
  if (!node.parentNode.closest('a') &&
    !node.parentNode.closest('button') &&
    node.parentNode.tagName !== 'A' &&
    node.parentNode.tagName !== 'OPTION') {

    // 置き換えるべきHTMLテキスト
    const replaceHTML = node.textContent.replace(tel_ptn, function (match) {
      return '<a href="tel:' + match.replace(/[()-]/g, "") + '">' + match + '</a>';
    });
    // 置き換えるべきDOMオブジェクト
    const replaceNodeLists = convertHtml(replaceHTML);

    // DOMを置換する
    for (let childNode of replaceNodeLists) {
      const newNode = childNode.cloneNode(true);
      node.parentNode.insertBefore(newNode, node);
    }
    node.parentNode.removeChild(node);
  }
}