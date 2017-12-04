function flatten(array) {
  var target = [];
  var i = 0;
  for (i; i < array.length; i++) {
    var value = array[i];
    // console.log(Object.prototype.toString.call(value));
    if (Object.prototype.toString.call(value) === '[object Array]') {
      target = target.concat(flatten(value));
    } else {
      target.push(value);
    }
  }
  return target;
}


export default flatten;