import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

console.log(process.env.BUILD === 'on');

export default {
    input: 'public/js/index.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'iife'
    },
    plugins: [
        (process.env.BUILD === 'on' && uglify()),
        babel({
            exclude: 'node_modules/**'   
        })
    ],
};