// shadow copy
// function extend() {
//   var args = arguments;
//   var target = args[0];
//   var i = 1;
//   for (i; i < args.length; i++) {
//     for (var k in args[i]) {
//       target[k] = args[i][k];
//     }
//   }
//   return target;
// }

// deep copy
function extend() {
  var args = arguments;
  var deep = typeof args[0] === 'boolean' ? args[0] : false;
  var target = deep ? args[1] : args[0];
  var i = deep ? 1 : 0;
  for (i; i < args.length; i++) {
    var options = args[i];
    if (options != null) {
      for (var name in options) {
        if (deep && target[name] && typeof options[name] === 'object') {
          extend(deep, target[name], options[name]);
        } else {
          target[name] = options[name];
        }
      }
    }
  }
  return target;
}

export default extend;