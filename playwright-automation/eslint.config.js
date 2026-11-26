export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-empty': 'error',
      'no-multiple-empty-lines': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];
