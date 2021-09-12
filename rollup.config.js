import pkg from './package.json';

const entry = 'src/index.js';

export default [
  {
    input: entry,
    output: [
      {
        name: '@keqingrong/globals',
        file: pkg.browser,
        format: 'umd',
      },
      { file: pkg.main, format: 'cjs', exports: 'default' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
