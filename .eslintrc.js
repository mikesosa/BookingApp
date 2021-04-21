module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint-config-prettier/@typescript-eslint',
    'eslint-config-prettier/react',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/jsx-fragments': 'off',
    'react/jsx-curly-newline': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-indent': 'off',
    'function-paren-newline': 'off',
    'no-useless-escape': 'off',
  },
};
