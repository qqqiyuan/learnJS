```javascript
// 两层嵌套循环法 ==> 兼容性最好，但速度慢
// const array = [1, 1, 2, 2, 3, 8, 4, 5, 6, 7, 5, 6, 3, 4];
function uniqueArray(arr) {
  var resultArr = [];
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    for(var j = 0, resLength = resultArr.length; j < resultArr.length; j++) {
      if (arr[i] === resultArr[j]) {
        break;
      }
    }
    if (j === resLength) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
```

目标数组和结果数组嵌套遍历，将外层元素与内层元素进行比较，如果相等则跳出内层循环；如果array[i]是唯一的，那么执行完循环，j等于resLength.（内部循环执行完了还没有找到相同的元素，那么这个元素必然是唯一的。）

------------

```javascript
// indexOf 对比法，两层嵌套法简化而来
function uniqueArray(arr) {
 var resultArr = [];
 for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
   if (resultArr.indexOf(arr[i]) === -1) {
    resultArr.push(arr[i]);
   }
 }
 return resultArr;
}
```

使用indexOf方法来判断结果数组中是否含有目标数组中的某个元素，代码更为清晰

------------

```javascript
// 排序后再去重
function uniqueArray(arr) {
  arr = arr.sort();
  var resultArr = [arr[0]];
  for (var i = 1, len = arr.length; i < len; i++) {
    if (arr[i] !== arr[i-1]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
```

排序后数组会按照一定的顺序进行排列，值相同的元素会在响铃位置。因此在数组遍历中，只需将当前元素与前面一位的元素进行是否相等比较就能知道是否为重复元素，如果不相等则意味着此元素不在当前的结果数组中，然后将此元素放到结果数组中。

-------------

```javascript
// 使用空Object对象将数组的存成key-value键值对
function uniqueArray(arr) {
  var tempObj = { };
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    if (!tempObj.hasOwnProperty(typeof temp + temp)) {
      tempObj[(typeof temp + temp)] = arr[i];
    }
  }
  for (var o in tempObj) {
    resultArr.push(tempObj[o]);
  }
  return resultArr;
}
```

利用空的Object对象将数组转成键值对的方式，数组中元素的值作为Object的key值，在遍历数组的过程中，如果在Object中有对应的key值则忽略，否则将该元素的值做成Object的键值存进Object中，最后利用for-in循环，取出Object中包含的所有值。
**注意** typeof temp是为了在Object中存key值时，区分string类型的 '1' 和 number类型的 1。
