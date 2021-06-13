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
  node.parentNode.classList.add('telNumberParent');
}

const hoge = document.querySelectorAll('.telNumberParent');

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