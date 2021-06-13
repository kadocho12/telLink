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
  // node.parentNode.classList.add('telNumberParent');
  console.log(node);
  console.log(node.parentNode);
  console.log(node.parentNode.parentElement.closest('a'));
  console.log(node.parentNode.tagName);
  console.log(node.parentNode.innerHTML);

  if (!node.parentNode.closest('a') &&
      node.parentNode.tagName !== 'A') {
    // let fragment = document.createDocumentFragment();
    // let child1 = document.createElement('a');
    // child1.append(document.createTextNode(node));
    // fragment.append(child1);
    // console.log(fragment);
    
    let el = node.parentNode;
    let oldNode = node;
    let newNode = document.createElement('a');
    let newNodeContent = document.createTextNode(node);
    newNode.appendChild(newNodeContent);

    el.replaceChild(newNode, oldNode);
  }
}

// const hoge = document.querySelectorAll('.telNumberParent');

// for (let i = 0; i < hoge.length; i++) {
//   if (!hoge[i].closest('a') &&
//       !hoge[i].closest('button') &&
//       hoge[i].tagName !== 'OPTION') {
//     hoge[i].innerHTML =
//       hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
//         return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
//       });
//   }
// }