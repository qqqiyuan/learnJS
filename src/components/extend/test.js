import extend from './extend.js';

var obj1 = {
  a: {
    name: 'miqi',
    age: '25',
  },
  c: {
    name: 'wangcai',
    age: '1.6',
    other: {
      mail: '11.com',
      sex: 'male',
      address: '12121',
    },
  },
};
var obj2 = {
  a: {
    name: 'dada',
    age: '23',
  },
  c: {
    name: 'miqi',
    age: '25',
    other: {
      sex: 'female',
      address: '12121',
    },
  },
};

console.log(extend(true, obj1, obj2));