module.exports = {
    env: {
        jest: true,
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {}
};
