module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'i18next'],
  extends: ['./config/eslint/.eslintrc.base.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./config/eslint/.eslintrc.typescript.js']
    },
    {
      files: ['**/shared/ui/components/**/*.[jt]sx?(x)'],
      rules: {
        'no-restricted-imports': 'off',
        'react/button-has-type': 'off'
      }
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    'i18next/no-literal-string': 'warn',
    'max-len': [
      'error',
      {
        ignoreComments: true
      }
    ]
  },
  globals: {
    __IS_DEV__: true
  }
};
