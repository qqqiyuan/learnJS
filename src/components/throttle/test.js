import throttle from './throttle.js';

var count = 0;
var app = document.getElementById('app');
var button = document.getElementById('button');

function setHtml(e) {
  count++;
  app.innerHTML = count;
}

app.onmousemove = throttle(setHtml, 2000);
