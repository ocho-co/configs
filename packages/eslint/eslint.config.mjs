import eslint from '@eslint/js'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import perfectionist from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

const MAX_PARAMS = 5

export default defineConfig(
  eslint.configs.recommended,

  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  tanstackQuery.configs['flat/recommended'],

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
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      unicorn: eslintPluginUnicorn,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
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

      'max-lines': ['error', { max: 500, skipBlankLines: true }],

      'max-params': ['error', MAX_PARAMS],

      'no-console': 'warn',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              importNames: ['default'],
              message: 'No need to import React default',
              name: 'react',
            },
          ],
        },
      ],
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              components: ['^@/components/.+'],
              containers: ['^@/screens/.+', '^@/containers/.+'],
              modules: ['^@/modules/.+'],
              navigation: ['^@/navigation/.+'],
              node: ['^node:.+', '^node$'],
              react: ['^react$', '^react-dom$', '^react-native$'],
            },
            value: {
              components: ['^@/components/.+'],
              containers: ['^@/screens/.+', '^@/containers/.+'],
              modules: ['^@/modules/.+'],
              navigation: ['^@/navigation/.+'],
              node: ['^node:.+', '^node$'],
              react: ['^react$', '^react-dom$', '^react-native$'],
            },
          },
          environment: 'node',
          groups: [
            ['node', 'react', 'builtin'],

            ['external', 'builtin-type', 'external-type'],

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
          internalPattern: ['^@/.+', '^~/.+'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],

      'perfectionist/sort-jsx-props': [
        'warn',
        {
          customGroups: {
            callbacks: '^on.+',
            keywords: '^key|ref|testID$',
          },
          groups: [
            'keywords',
            'callbacks',
            'multiline-prop',
            'unknown',
            'shorthand-prop',
          ],
        },
      ],

      'react/jsx-no-useless-fragment': 'error',

      'react/react-in-jsx-scope': 'off', // Unnecessary

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/\.(t|j)sx$/i],
        },
      ],

      'unicorn/no-abusive-eslint-disable': 'off',

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
