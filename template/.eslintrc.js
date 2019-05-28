module.exports = {
    extends: 'kaola/esnext',
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // config.add your custom rules here
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-negated-condition': ['off']
    },
};
