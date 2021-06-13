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
    node.parentElement.innerHTML = node.textContent.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
      return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
    });
    // node.textContent = node.textContent.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
    //   return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
    // });
  }
}