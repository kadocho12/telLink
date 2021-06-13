// console.log(document.body.innerHTML);
// console.log(document.body.textContent);

// const tel_pattern = /0\d{2,3}-\d{1,4}-\d{4}/g;

// document.body.innerHTML =
//   document.body.textContent.replace(tel_pattern, function(match) {
//     return '<span class="telLinkParent">' + match + '</span>';
//   });

// const hoge = document.querySelectorAll('.telLinkParent');

// for (let i = 0; i < hoge.length; i++) {
//   if (!hoge[i].closest('a') && !hoge[i].closest('button')) {
//     hoge[i].innerHTML =
//       hoge[i].textContent.replace(tel_pattern, function(match) {
//         return '<a href="tel:' + match.replace(/-/g, "") + '">' + match + '</a>';
//       });
//   }
// }