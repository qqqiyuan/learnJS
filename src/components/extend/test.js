import extend from './extend.js';

var obj1 = {
  a: {
    name: 'miqi',
    age: '25',
  },
  c: {
    name: 'wangcai',
    age: '1.6',
  },
};
var obj2 = {
  a: {
    name: 'dada',
    age: '23',
  },
  b: {
    name: 'miqi',
    age: '25',
  },
};

console.log(extend(obj1, obj2));