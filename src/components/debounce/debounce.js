// function debounce(func, wait, immediate) {
//   var timeout, result;
//   var debounced = function() {
//     var context = this;
//     var args = arguments;
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     if (immediate) {
//       var callNow = !timeout;
//       timeout = setTimeout(function() {
//         timeout = null;
//       }, wait);
//       if (callNow) {
//         result = func.apply(context, args);
//       }
//     } else {
//       timeout = setTimeout(function() {
//         func.apply(context, args);
//       }, wait);
//     }
//     return result;
//   };
//   debounced.cancel = function() {
//     clearTimeout(timeout); // ==> clearTimeout后，延迟函数不会执行
//     timeout = null; // ==> timeout设置为null后，延迟函数还会执行
//   };

//   return debounced;
// }

function debounce(func, wait, immediate) {
  var context;
  var args;
  var timer;

  var debounced = function() {
    context = this;
    args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      // 如果已经执行过了timer为true,
      if (!timer) {
        func.apply(context, args);
      }
      timer = setTimeout(function() {
        timer = null; // 如果用clearTimeout(timer),得到的timer值不一定为false，而是一个定时器的id
      }, wait);
    } else {
      timer = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };

  debounced.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };
  return debounced;
}

export default debounce;