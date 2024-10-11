import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import path from 'node:path'
import url from 'node:url'
import tsEslint from 'typescript-eslint'
import tanstackQuery from '@tanstack/eslint-plugin-query'

const __dirname =
  'dirname' in import.meta && typeof import.meta.dirname === 'string'
    ? 'import.meta.dirname'
    : path.dirname(url.fileURLToPath(import.meta.url))

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,

  // React
  reactPlugin.configs.flat.recommended,

  // Unicorn
  eslintPluginUnicorn.configs['flat/all'],

  // React Query
  ...tanstackQuery.configs['flat/recommended'],

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  perfectionist.configs['recommended-natural'],

  {
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },

    plugins: {
      // React
      react: reactPlugin,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'unicorn/no-abusive-eslint-disable': 'off',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'Do need to import React default',
            },
          ],
        },
      ],

      'max-params': ['error', 5],

      'max-lines': ['error', { max: 500, skipBlankLines: true }],

      'react/jsx-no-useless-fragment': 'error',

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
      ],

      '@typescript-eslint/no-magic-numbers': [
        'warn',
        { ignore: [-1, 0, 1, 2] },
      ],

      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],

      '@typescript-eslint/no-require-imports': 'off', // We need to use require for dynamic imports and React Native image imports

      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],

      'no-console': 'warn',

      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              components: ['@/components'],
              containers: ['@/screens', '@/containers'],
              modules: ['@/modules'],
              navigation: ['@/navigation'],
              node: ['node:*'],
              react: ['react', 'react-dom', 'react-native'],
            },
            value: {
              components: ['@/components'],
              containers: ['@/screens', '@/containers'],
              modules: ['@/modules'],
              navigation: ['@/navigation'],
              node: ['node:*'],
              react: ['react', 'react-dom', 'react-native'],
            },
          },
          environment: 'node',
          groups: [
            [
              'node',
              'react',
              'builtin',
              'external',
              'builtin-type',
              'external-type',
            ],

            ['navigation'],

            ['containers'],

            ['modules'],

            ['components'],

            ['internal', 'internal-type'],

            ['parent', 'sibling', 'index'],

            ['object'],

            ['style'],

            ['unknown'],
          ],
          ignoreCase: true,
          internalPattern: ['@/**'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],

      'react/react-in-jsx-scope': 'off', // Unnecessary

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/\.(t|j)sx$/i],
        },
      ],

      'unicorn/no-array-reduce': 'off',

      'unicorn/no-null': 'off',

      'unicorn/prefer-module': 'off', // We need to use require for dynamic imports and React Native image imports

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            param: true,
            params: true,
            prop: true,
            Prop: true,
            props: true,
            Props: true,
          },
        },
      ],
    },

    settings: {
      // React
      react: {
        version: 'detect',
      },
    },
  },
)
