// if (!Element.prototype.matches) {
//   Element.prototype.matches = Element.prototype.msMatchesSelector ||
//     Element.prototype.webkitMatchesSelector;
// }

// if (!Element.prototype.closest) {
//   Element.prototype.closest = function (s) {
//     var el = this;

//     do {
//       if (Element.prototype.matches.call(el, s)) return el;
//       el = el.parentElement || el.parentNode;
//     } while (el !== null && el.nodeType === 1);
//     return null;
//   };
// }

const tel_ptn = /0\d{2,3}-\d{1,4}-\d{4}/g;

// 文字列をNodeListに変換する関数
function convertHtml(text) {
  const div = document.createElement("div");
  div.innerHTML = '<div>'+text+'</div>';
  return div.firstChild.childNodes;
}

const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  function (node) {
    return tel_ptn.test(node.textContent) ?
      NodeFilter.FILTER_ACCEPT :
      NodeFilter.FILTER_REJECT;
  },
  null
);

let node;
while (node = nodeIterator.nextNode()) {

  if (!node.parentNode.closest('a') &&
    !node.parentNode.closest('button') &&
    node.parentNode.tagName !== 'A' &&
    node.parentNode.tagName !== 'OPTION') {

    node.textContent = node.textContent.replace(/</g, '&lt;');
    node.textContent = node.textContent.replace(/>/g, '&gt;');

    // 置き換えるべきHTMLテキスト
    const replaceHTML = node.textContent.replace(tel_ptn, function (match) {
      return '<a href="tel:' + match.replace(/[()-]/g, "") + '">' + match + '</a>';
    });

    // 置き換えるべきDOMオブジェクト
    const replaceNodeLists = convertHtml(replaceHTML);

    // DOMを置換する
    for (let i = 0; i < replaceNodeLists.length; i++) {
      const newNode = replaceNodeLists[i].cloneNode(true);
      node.parentNode.insertBefore(newNode, node);
    }
    node.parentNode.removeChild(node);
  }
}
