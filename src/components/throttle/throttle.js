/*
 * timestamp
 */
// function throttle(func, wait) {
//   var diff = 0;

//   return function() {
//     var context = this;
//     var args = arguments;
//     var now = new Date().getTime();
//     if (now - diff >= wait) {
//       func.apply(context, args);
//       diff = now;
//     }
//   };
// }

/*
 * timer
 */
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


export default throttle;