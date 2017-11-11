### 防抖

```javascript
var count = 0;
var app = document.getElementById('app');
var button = document.getElementById('button');

function setHtml(e) {
  // console.log(this);
  // console.log(e);
  count++;
  app.innerHTML = count;
}

// app.onmousemove = setHtml; // ==> this指向的是 <div id="app"></div>，e指向MouseEvent

var setDebounce = debounce(setHtml, 5000, true);
app.onmousemove = setDebounce; // ==> this指向的是 Window对象，e则为undefined
button.onclick = setDebounce.cancel;
```
