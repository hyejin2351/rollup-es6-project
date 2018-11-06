import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

// console.log(process.env.BUILD === 'on');

export default {
    input: 'public/js/index.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'iife',
    },
    plugins: [
        sass({
            output: './public/css/bundle.css',
            processor: css => postcss([autoprefixer])
                .process(css)
                .then(result => result.css)
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        (process.env.BUILD !== 'on' && eslint({
            //BUILD ���°� 'on'�� �ƴ� ���¿����� eslint�� ����
            include: './public/js/**',
            exclude: './public/js/bundle.js',
        })),
        (process.env.BUILD === 'on' && uglify()),
    ],
};
