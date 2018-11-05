import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
    input: 'public/js/index.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'iife'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'   
        }),
        eslint({
            include: './public/js/**',
            // 이 경로 안에 있는 모든 js 파일의 문법을 검사한다.
        })
    ],
};