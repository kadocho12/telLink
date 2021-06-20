// const tel_pattern = /\d{3}-\d{4}-\d{4}/;

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

  console.log(node);
  console.log(node.textContent);
  console.log(node.innerHTML);

  if (!node.parentNode.closest('a') &&
      !node.parentNode.closest('button') &&
      node.parentNode.tagName !== 'A' &&
      node.parentNode.tagName !== 'OPTION') {
    
    let el = node.parentNode;
    let oldNode = node;
    let newNode = document.createElement('a');
    // node.textContent = node.textContent.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
    //   return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
    // });
    let hoge = node.textContent.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
      return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
    });

    console.log(hoge);
    let newNodeContent = document.createTextNode(hoge);
    newNode.appendChild(newNodeContent);

    el.replaceChild(newNode, oldNode);
  }
}

//     hoge[i].innerHTML =
//       hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
//         return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
//       });