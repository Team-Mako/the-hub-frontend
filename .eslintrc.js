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
    'stylelint-scss'
  ],
  rules: {
    'react/destructuring-assignment': [2, 'never'],
    'max-len': "off",
    "jsx-a11y/label-has-associated-control": [ 2, {
      "required": {
          "some": [ "nesting", "id" ]
      }
    }],
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
