module.exports ={
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect",
        }
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
    },
}