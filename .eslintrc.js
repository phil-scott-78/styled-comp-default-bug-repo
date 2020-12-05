module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    root: true, // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true, // Enable JSX since we're using React
        },
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        // 'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
    ],

    rules: {
        // prettier
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off',
    },
    globals: {
        React: 'writable',
    },
};
