import babel from 'rollup-plugin-babel';

export default {
    input: 'public/js/index.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'iife'
    },
    puginds: [
        babel({
            exclude: 'node_modules/**'   
        })
    ]
};