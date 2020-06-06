import test, { hello } from './a';
import testb from './b';

// test();
// hello();
// hi();

require('./a');
require('./b');

console.log(testb.hi());

import(/* webpackChunkName: "cici" */ './c').then((module) => {
  console.log(module);
});
