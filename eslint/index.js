'use strict'

const MAX_PARAMS = 3

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: 'src/generated/**/*',
  plugins: [
    // General
    '@typescript-eslint',
    // React
    'react-hooks',
    'react',
    // Accessibility
    'jsx-a11y',
    // Sort
    'simple-import-sort',
    // Other
    'sort-keys-fix',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: [
    // General
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // Prettier
    'prettier',

    // React
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // Accessibility
    'plugin:jsx-a11y/strict',
  ],
  rules: {
    /*
      G E N E R A L
    */
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
    'prefer-destructuring': 'warn',
    'require-await': 'error',
    'no-magic-numbers': [
      'warn',
      { ignoreArrayIndexes: true, ignore: [-1, 0, 1] },
    ],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    /*
      T Y P E S C R I P T
    */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    '@typecript-eslint/no-redeclare': [1],

    /*
      R E A C T
    */
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/prop-types': [0],
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandLast: true,
        multiline: 'first',
        ignoreCase: true,
        reservedFirst: true,
        locale: 'auto',
      },
    ],
    'react/jsx-no-useless-fragment': 'warn',

    /*
      I M P O R T S
    */
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `node` or `react` related packages come first.
          ['^node:', '^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],

    /*
      O T H E R
    */
    'sort-keys-fix/sort-keys-fix': [
      'warn',
      'asc',
      { caseSensitive: true, natural: false },
    ],
  },
  settings: {
    react: { version: 'detect' },
  },
}
