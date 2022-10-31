'use strict'

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-styled-components',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    'custom-property-pattern': null,
    'value-keyword-case': null,
    'keyframes-name-pattern': null,
    'string-quotes': 'single',
    'color-hex-case': 'upper',
  },
}
