/*
 * timestamp 鼠标移入会立即执行，但是移出后不会再执行
 *
  function throttle(func, wait) {
    var diff = 0;

    return function() {
      var context = this;
      var args = arguments;
      var now = new Date().getTime();
      if (now - diff >= wait) {
        func.apply(context, args);
        diff = now;
      }
    };
  }
  */

/*
 * timer 鼠标移入不会立即执行，要延迟wait的时间，但是移出后还会再执行一次
 *
  function throttle(func, wait) {
    var timer;

    return function() {
      var context = this;
      var args = arguments;
      if (!timer) {
        func.apply(context, args);
        timer = setTimeout(function() {
          timer = null;
        }, wait);
      }
    };
  }
  */

/*
 * timer & timestamp 结合timer和timestamp，鼠标移入和移出都会执行
 *
  function throttle(func, wait) {
    var context;
    var args;
    var last = 0;
    var diff;
    var now;
    var timer;

    return function() {
      context = this;
      args = arguments;
      now = new Date().getTime();
      // 距离下一次程序执行的时间
      diff = wait - (now - last);
      // 如果满足设定的时间间隔，则程序开始执行，走timestamp模式，且判断如果定时器存在则清除
      if (diff <= 0) {
        if (timer) {
          timer = null;
          clearTimeout(timer);
        }
        last = now;
        func.apply(context, args);
      } else if (!timer) { // 否则走timer模式，设置延迟执行时间为diff，到时间执行函数并清除timer
        timer = setTimeout(function() {
          timer = null;
          last = new Date().getTime();
          func.apply(context, args);
        }, diff);
      }
    };
  }
  */

/*
 * 添加节流取消功能
 *
  function throttle(func, wait) {
    var context = this;
    var args = arguments;
    var diff;
    var last;
    var now;
    var timer;

    var throttled = function () {
      context = this;
      args = arguments;
      now = new Date().getTime();
      diff = wait - (now - last);
      if (diff <= 0) {
        last = now;
        func.apply(context, args);
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      } else if (!timer) {
        timer = setTimeout(function() {
          timer = null;
          last = new Date().getTime();
          func.apply(context, args);
        }, diff);
      }
    };

    throttled.cancel = function () {
      clearTimeout(timer);
      timer = null;
      last = 0;
    };

    return throttled;
  }
  */

/*
 * 添加头尾配置项
 */

function throttle(func, wait, options) {
  var timer;
  var last = 0;
  var now;
  var leading = options.leading;
  var tailing = options.tailing;
  var context;
  var args;

  var throttled = function() {

    var later = function() {
      last = leading === false ? 0 : new Date().getTime();
      timer = null;
      func.apply(context, args);
    };

    context = this;
    args = arguments;
    now = new Date().getTime();
    // last == 0 且 leading 为false,设置last=now,延迟执行
    if (!last && leading === false) {
      last = now;
    }
    var remaining = wait - (now - last);
    // now - last > wait,间隔时间超过设置时间
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func.apply(context, args);
      last = now;
    } else if(!timer && tailing) {
      // 需要等待remaining时间后才执行
      timer = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timer);
    last = 0;
    timer = null;
  };

  return throttled;

};


export default throttle;