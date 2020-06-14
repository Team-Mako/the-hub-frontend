module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': [2, 'never'],
    'react/destructuring-assignment': [2, 'never'],
    'max-len': "off",
    "jsx-a11y/label-has-associated-control": [ 2, {
      "required": {
          "some": [ "nesting", "id" ]
      }
    }]
  },
};
