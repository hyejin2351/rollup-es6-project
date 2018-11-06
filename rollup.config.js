import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

// console.log(process.env.BUILD === 'on');

export default {
  input: 'public/js/index.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife',
  },
  plugins: [
    (process.env.BUILD === 'on' && uglify()),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.BUILD !== 'on' && eslint({
      //BUILD 상태가 'on'이 아닌 상태에서만 eslint를 실행
      include: './public/js/**',
      exclude: './public/js/bundle.js',
    })),
  ],
};
