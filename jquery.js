// // var tel_ptn = /0\d{2,3}-\d{1,4}-\d{4}/g;



// // console.log($(".wrapper").contents());

// // console.log($(".wrapper").contents().filter(function () {
// //   return this.nodeType == 3;
// // }));

console.log($('body').text());
console.log($('body').text().match(/0\d{2,3}-\d{1,4}-\d{4}/g));

var mowmow = $('body').text().match(/0\d{2,3}-\d{1,4}-\d{4}/g)
  .filter(function(value, index, array) {
    return array.indexOf(value) === index;
  });

console.log(mowmow);

var hogehoge = $('body').text().match(/0\d{2,3}-\d{1,4}-\d{4}/g)
  .filter(function(value, index, array) {
    return array.indexOf(value) === index;
  })
  .forEach(function(value, index) {
    
    let tel_number = value;

    $('body').find(':contains("'+tel_number+'")').filter(function() {
      // console.log($(this));
      // console.log($(this).find(':contains("' + tel_number + '")'));
      // console.log($(this).find(':contains("' + tel_number + '")').length);
      return !$(this).find(':contains("'+tel_number+'")').length;
    })

    // console.log($('body').find(':contains("' + tel_number +'")'));

    .each(function() {
      if (!this.closest("a") && !this.closest("button")) {
        console.log(this);
        console.log(this.innerHTML);
        this.innerHTML =
        this.innerHTML.replace(tel_number, function(match) {
          console.log(match);
          return '<a href="tel:' + match.replace(/-/g, '') + '">' + match + '</a>';
        });
      }
    });
  });
