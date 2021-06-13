const tel_pattern = /\d{3}-\d{4}-\d{4}/;

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

    let el = node.parentNode;
    let oldNode = node;
    let newNode = document.createElement('a');
    let newNodeContent = document.createTextNode(node.textContent);
    newNode.appendChild(newNodeContent);

    el.replaceChild(newNode, oldNode);
  }
}