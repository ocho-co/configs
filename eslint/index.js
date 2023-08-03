'use strict'

const MAX_PARAMS = 3

module.exports = {
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
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-redeclare': [1],

    // ESLint
    'arrow-body-style': ['warn', 'as-needed'],
    'max-lines': ['warn', { max: 500, skipBlankLines: true }],
    'max-params': ['warn', MAX_PARAMS],
    'no-unused-expressions': 'error',
    'no-redeclare': 'off',
    'no-else-return': 'warn',
    'no-return-await': 'error',
    'no-unused-vars': 'off',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-magic-numbers': 'warn',
    'prefer-const': 'error',
    'no-implicit-coercion': 'error',
    'no-extra-boolean-cast': 'error',
    'prefer-destructuring': 'warn',
    'require-await': 'error',
    'no-magic-numbers': [
      'warn',
      { ignoreArrayIndexes: true, ignore: [-1, 0, 1] },
    ],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/prop-types': [0],
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandLast: true,
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'warn',

    // Import
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
      typescript: true,
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
