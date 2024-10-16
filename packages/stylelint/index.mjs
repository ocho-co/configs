/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'hue-degree-notation': 'number',
    'alpha-value-notation': 'number',
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)[-_a-z0-9]+$',
      {
        message: 'Expected custom property name to be special__case--case',
      },
    ],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)[-_a-z0-9]+$',
      {
        message: 'Expected custom property name to be special__case--case',
      },
    ],
  },
}
