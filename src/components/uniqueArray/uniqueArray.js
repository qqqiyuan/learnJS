// 两层嵌套循环法
// function uniqueArray(arr) {
//  var resultArr = [];
//  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
//    for(var j = 0, resLength = resultArr.length; j < resultArr.length; j++) {
//      if (arr[i] === resultArr[j]) {
//        break;
//      }
//    }
//    if (j === resLength) {
//     resultArr.push(arr[i]);
//    }
//  }
//  return resultArr;
// }

// indexOf 对比，两层嵌套的简化版
// function uniqueArray(arr) {
//  var resultArr = [];
//  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
//    if (resultArr.indexOf(arr[i]) === -1) {
//     resultArr.push(arr[i]);
//    }
//  }
//  return resultArr;
// }

// 排序后再去重
// function uniqueArray(arr) {
//   arr = arr.sort();
//   var resultArr = [arr[0]];
//   for (var i = 1, len = arr.length; i < len; i++) {
//     if (arr[i] !== arr[i-1]) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr;
// }

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


export default uniqueArray;