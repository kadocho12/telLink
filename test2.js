var bodyText = document.body.innerHTML;
var addedClass = "myClass";//付与するclass

var reg = new RegExp(/<(.+)>(.*)(\d{3}-\d{4}-\d{4})(.+)?>/, "g");
bodyText = bodyText.replace(reg, `<$1 class=${addedClass}>$2$3$4>`);
document.body.innerHTML = bodyText;