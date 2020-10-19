module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        tsconfigRootDir: __dirname,
        project: ['.tsconfig.json'],
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
}
