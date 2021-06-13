const tel_pattern = /\d{3}-\d{4}-\d{4}/;

const nodeIterator = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  function (node) {
    return /\d{3}-\d{4}-\d{4}/g.test(node.nodeValue) ?
      NodeFilter.FILTER_ACCEPT :
      NodeFilter.FILTER_REJECT;
  }
);

let node;
// let node_args = [];

while (node = nodeIterator.nextNode()) {
  node.parentNode.classList.add('telNumberParent');
  // node_args.push(node.nodeValue);
  // console.log(node_args);
  // console.log(node.parentNode);
  // console.log(node.nodeValue);
  // console.log(node.parentNode.tagName);
  // console.log(node.parentNode.innerHTML);
  // if (!node.parentNode.closest('a') &&
  //   !node.parentNode.closest('button') &&
  //   node.parentNode.tagName !== 'OPTION') {
  //   node.parentNode.innerHTML =
  //     node.parentNode.innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
  //       return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
  //     });
  // }
}



const hoge = document.querySelectorAll('.telNumberParent');
// console.log(hoge);

for (let i = 0; i < hoge.length; i++) {
// const i = 5;
// console.log(hoge[i].innerHTML);
// console.log(!hoge[i].childElementCount > 0);
if (!hoge[i].closest('a') &&
    !hoge[i].closest('button') &&
    hoge[i].tagName !== 'OPTION' &&
    !hoge[i].childElementCount > 0) {
  hoge[i].innerHTML =
    hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
      return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
    });
}

console.log(hoge[i]);
console.log(hoge[i].innerHTML);
console.log(hoge[i].textContent);

if (!hoge[i].closest('a') &&
    !hoge[i].closest('button') &&
    hoge[i].tagName !== 'OPTION' &&
    !hoge[i].childElementCount == 0) {

  // var result = "";
  // for (elem of hoge[i].childNodes) {
  //   console.log(elem);
  //   console.log(elem.nodeValue);
  //   if (elem.nodeName == "#text") {
  //     console.log(elem.nodeValue);
  //     result += elem.nodeValue;
  //   }
  // }
  // console.log(result);
  // console.log(result.innerHTML);
  // result = result.innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
  //   return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
  // });

  // console.log(hoge[i].childNodes[0]);
  // console.log(hoge[i].nodeValue);
  // console.log(hoge[i].children);
  // console.log(hoge[i].children.innerHTML);
  // console.log(hoge[i].childNodes[0].nodeValue);

  // hoge[i].childNodes[0].nodeValue =
  //   hoge[i].childNodes[0].nodeValue.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
  //     return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
  //   });

      hoge[i].innerHTML =
      hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
        return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
      });
}
}



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
