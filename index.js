var vm = require('./component');
var i = 1e3;
var div = document.getElementById('answer');

div.style.fontSize = i + 'px';
document.body.style.backgroundColor = div.style.backgroundColor;

while (div.offsetWidth > window.innerWidth || div.offsetHeight > window.innerHeight) {
div.style.fontSize = (i -= i * 0.05) + 'px';
if (i < 0) {
  break;
}
div.style.marginTop = ((window.innerHeight - div.offsetHeight) / 2) + 'px';}
div.style.position='relative';