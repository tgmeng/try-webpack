import { nice } from '@try-webpack/shared';

import('remote/index').then((module) => {
  console.log(module);
});

export function hi() {
  return `${nice()}, hi`
}
