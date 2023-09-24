module.exports = {
  root: true,
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: ['@react-native', 'plugin:tailwind/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
