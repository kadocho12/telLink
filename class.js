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
console.log($(hoge[4]).contents().filter(function () {
  return this.nodeType == 3;
})[0].nodeValue);

var testtest = $(hoge[4]).contents().filter(function () {
  return this.nodeType == 3;
});

console.log(testtest);


console.log(testtest.filter(function() {
  return this.nodeValue.match(/\d{3}-\d{4}-\d{4}/g);
})[0]);

for (let i = 0; i < testtest.length; i++) {

  console.log(testtest[i].nodeValue);

  console.log(testtest[i].parentNode);

  var tettele =
  testtest[i].nodeValue.replace(/\d{3}-\d{4}-\d{4}/g, function (match) {

    // var pikapika = $('<a>').attr({
    //   href: 'tel:' + match.replace(/-/g, ""),
    //   // text: match
    // }).text(match);

    // console.log(pikapika);

    // pikapika.insertBefore(testtest[i]);

    return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
  });

  console.log(tettele);
  // console.log(tettele.html);

  var nodes = jQuery.parseHTML(tettele);
  console.log(nodes[0]);

  nodes[0].parentNode.insertBefore(nodes[0], testtest[4]);

  console.log(testtest);

  // $(nodes).insertBefore(testtest[i]);

  // for(let aaa = 0; aaa < nodes.length; aaa++) {
  //   nodes[i].insertBefore(testtest);
  // }

  // // 文字列をNodeListに変換する関数
  // function convertHtml(text) {
  //   const div = document.createElement("div");
  //   div.innerHTML = '<div>'+text+'</div>';
  //   return div.firstChild.childNodes;
  // }

  // const replaceNodeLists = convertHtml(tettele);
  // console.log(replaceNodeLists);

  // // tettele.insertBefore(testtest[i])
  // const newNode = replaceNodeLists[i].cloneNode(true);
  // testtest[i].parentNode.insertBefore(newNode, testtest[i]);
}

// console.log(hoge.contents());
// console.log(hoge.contents().get());
// console.log(hoge.contents().get()[0]);
// console.log(hoge.contents()[0]);

// console.log(hoge.contents().filter(function() {
//   return this.nodeType == 3;
// }));

// hoge.contents().filter(function () {return this.nodeType == 3;})


// $(hoge[4]).contents().filter(function () { return this.nodeType == 3; }).replace(/\d{3}-\d{4}-\d{4}/g, function (match) {
//   return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
// });

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
