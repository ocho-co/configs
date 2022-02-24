const MAX_PARAMS = 3

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y', 'import', 'react-hooks', 'react'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  ignorePatterns: 'src/generated/**/*',
  extends: [
    // Recommended general
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // Prettier-compatible
    'prettier',

    // React rules
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // Accessibility
    'plugin:jsx-a11y/strict',

    // Imports
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'max-lines': ['warn', { max: 500, skipBlankLines: true }],
    'max-params': ['warn', MAX_PARAMS],
    'no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    'no-useless-return': 'error',
    'no-magic-numbers': 'warn',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'require-await': 'error',

    'react/react-in-jsx-scope': 'off',

    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/exports-last': 'warn',
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
