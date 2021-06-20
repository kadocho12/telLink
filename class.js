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


// var fugafuga = $(".telNumberParent").contents().filter(function () {
//   return this.nodeType == 3;
// })[0].nodeValue;
// console.log(fugafuga);

// const hoge = document.querySelectorAll('.telNumberParent');
var hoge = $('.telNumberParent');

console.log('test');
console.log(hoge);
console.log($(hoge[4]).contents());
console.log($(hoge[4]).contents().filter(function () {
  return this.nodeType == 3;
}));
// console.log(hoge.contents());
// console.log(hoge.contents().get());
// console.log(hoge.contents().get()[0]);
// console.log(hoge.contents()[0]);

// console.log(hoge.contents().filter(function() {
//   return this.nodeType == 3;
// }));

// hoge.contents().filter(function () {return this.nodeType == 3;})


$(hoge[4]).contents().filter(function () { return this.nodeType == 3; }).replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
  return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
});

for (let i = 0; i < hoge.length; i++) {

  // hoge.contents().filter(function () {
  //   return this.nodeType == 3;
  // })[i].nodeValue;
}


// for (let i = 0; i < hoge.length; i++) {
//   if (!hoge[i].closest('a') &&
//     !hoge[i].closest('button') &&
//     hoge[i].tagName !== 'OPTION') {
//     hoge[i].innerHTML =
//       hoge[i].innerHTML.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
//         return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
//       });
//   }
// }
