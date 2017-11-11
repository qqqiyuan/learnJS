// function debounce(func, wait) {
//   var timeout;
//   return function() {
//     // context 为了不影响原函数在执行过程中this的指向
//     var context = this;
//     // args 为了不影响函数在执行过程中event对象的值
//     var args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       func.apply(context, args);
//     }, wait);
//   };
// }

function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function() {
    var context = this;
    var args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
  debounced.cancel = function() {
    clearTimeout(timeout); // ==> clearTimeout后，延迟函数不会执行
    timeout = null; // ==> timeout设置为null后，延迟函数还会执行
  };

  return debounced;
}



export default debounce;