import throttle from './throttle.js';

var count = 0;
var app = document.getElementById('app');
var button = document.getElementById('button');

function setHtml(e) {
  count++;
  app.innerHTML = count;
}

app.onmousemove = throttle(setHtml, 3000, { leading: true, tailing: true });

button.onclick = function() {
  throttle(setHtml, 3000, { leading: true, tailing: true }).cancel();
}
