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