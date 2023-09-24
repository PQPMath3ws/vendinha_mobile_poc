module.exports = {
  root: true,
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: ['@react-native', 'plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
