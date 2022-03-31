module.exports = {
  env: {
    // 预定的全局变量（浏览器环境）
    browser: true,
    es2021: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: 'babel-eslint',
    // 代码是 ECMAScript 模块
    sourceType: 'module'
  },
  // 扩展风格
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended'
    // 'prettier'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'vue',
    // 'html',
    'prettier'
  ],
  rules: {
    // 要求缩进为2个空格
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    // 使用单引号
    quotes: ['error', 'single'],
    // 要求尾部使用分号
    semi: ['error', 'always'],
    // 文件末尾强制换行
    'eol-last': 2
  }
}
