const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  {
    acceptNode: function (node) {
      return /\d{3}-\d{4}-\d{4}/.test(node.nodeValue) ?
        NodeFilter.FILTER_ACCEPT :
        NodeFilter.FILTER_REJECT;
    }
  }
);

while ((node = nodeIterator.nextNode())) {
  node.parentNode.classList.add('Klass');
}

const hoge = document.querySelectorAll('.Klass');


const testNumber = 4;

console.log(hoge);
console.log(hoge[testNumber].tagName);


if (!hoge[testNumber].closest('a')) {
  console.log('a-true');
} else {
  console.log('a-false');
}
if (!hoge[testNumber].closest('button')) {
  console.log('button-true');
} else {
  console.log('button-false');
}
if (hoge[testNumber].tagName !== 'OPTION') {
  console.log('option-true');
} else {
  console.log('option-false');
}
if (!hoge[testNumber].closest('a') &&
    !hoge[testNumber].closest('button') &&
    hoge[testNumber].tagName !== 'OPTION') {
  console.log('true');
} else {
  console.log('false');
}

for (let i = 0; i < hoge.length; i++) {
  if (!hoge[i].closest('a') &&
      !hoge[i].closest('button') &&
      hoge[i].tagName !== 'OPTION') {
    hoge[i].innerHTML =
      hoge[i].textContent.replace(/\d{3}-\d{4}-\d{4}/, function (match) {
        return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
      });
  }
}