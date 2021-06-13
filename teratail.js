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
    return /\d{3}-\d{4}-\d{4}/g.test(node.nodeValue) ?
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
    const replaceHTML = node.textContent.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
      return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
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