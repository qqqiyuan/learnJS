// shadow copy
function extend() {
  var args = arguments;
  var target = args[0];
  var i = 1;
  for (i; i < args.length; i++) {
    for (var k in args[i]) {
      target[k] = args[i][k];
    }
  }
  return target;
}

// deep copy

export default extend;