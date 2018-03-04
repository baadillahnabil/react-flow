module.exports = {
  extends: 'fbjs',

  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2]
  }
}
