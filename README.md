﻿# webpack

## 2-5 学习准备 - webpack 核心概念

- entry: 某段代码入口, 打包入口
- output: 输出
- loaders: 文件转化为模块
- plugins: 参与打包过程
- chunk: 代码块
- bundle: 打包生成的文件
- module: 模块

## 3-1 由浅入深 webpack - 使用 webpack

```console
webpack -h
webpack -v
webpack <entry> <output>
```

- webpack-cli: 交互式初始化项目, 迁移 v1->v2

```console
npm install webpack-cli -g
webpack-cli -h
webpack-cli init webpack-addons-demo
```

## 3-2 由浅入深 webpack - 打包 JS

```console
webpack
<!-- 自定义 webpack 打包 -->
webpack --config webpack-config.js
```

## 3-3 由浅入深 webpack - 编译 ES6

- babel-core: babel 编译库的核心包
- babel-loader: 帮你来使用 babel
- babel-preset: 规范的总结, 指定浏览器环境(应用开发需要), env 包含所有规范, es2015, es2016, es2017
- babel-preset-env: 代码编译成什么样子, 可以根据配置的目标浏览器或者运行环境来自动将 ES2015+ 的代码转换为 es5, .babelrc 文件配置特定的目标浏览器
- babel-polyfill: 全局垫片污染全局, 能写 es7/8 新方法, 对编译的代码中新的 API 进行处理, 适合在业务项目(开发应用)使用, 在 main.js 中引用 `import babel-polyfill`
- babel-runtime-transform: 局部垫片不会污染全局, 能写 es7/8 新方法, 对编译的代码中新的 API 进行处理, 适合在组件类库项目中使用, 在 .babelrc 文件中配置

```console
npm install babel-loader@8.0.0-beta.0 @babel/core
<!-- 选上 -->
npm i babel-loader babel-core -D

npm i @babel/preset-env -D
<!-- 选上 -->
npm i babel-preset-env -D

<!-- import 'babel-polyfill' -->
npm i babel-polyfill -S

npm i @babel/plugin-transform-runtime -D
<!-- 选上 -->
npm i babel-plugin-transform-runtime -D

npm i @babel/runtime -S
<!-- 选上 -->
npm i babel-runtime -S
```

## 3-4 由浅入深 webpack - 编译 typescript

- js 超集
- lodash: 封装了诸多对字符串、数组、对象等常见数据类型的处理函数

```console
npm i webpack typescript ts-loader awesome-typescript-loader -D

<!-- 说明文件, 编译出问题能抛出问题 -->
npm i @types/lodash -S
<!-- 选上 -->
npm i loadash -S

<!-- 类型文件管理 -->
npm i typings -g
typings i lodash -S
```

## 3-5, 3-6 由浅入深 webpack - 打包公共代码

- 适用于多 entry 情况
- 分割 Chunk, 减少代码冗余, 加快速度
- lodash: 封装了诸多对字符串、数组、对象等常见数据类型的处理函数
- webpack4 删除了 webpack.optimize.CommonsChunkPlugin

```console
npm i webpack -D
npm i lodash -S
```

## 3-7, 3-8: 由浅入深 webpack - 代码分割和懒加载

- **src/pageA**
- require.ensure: 动态加载模块, callback 才执行
- require.include: 引入模块(提取引入公共模块)

## 3-9, 3-10, 3-11, 3-12 由浅入深 webpack - 处理 CSS - style-loader

- style-loader: Adds CSS to the DOM by injecting a `<style> tag`
- css-loader: interprets @import and url() like import/require() and will resolve them.

```console
npm i style-loader css-loader file-loader -D
npm i less-loader less -D
npm i sass-loader node-sass -D
```

## 3-13 由浅入深 webpack - 处理 CSS - 提取 CSS

- [extract-text-webpack-plugin 版本没有跟上 webpack4 导致问题](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701)

```console
npm install extract-text-webpack-plugin webpack -D
npm i extract-text-webpack-plugin@next -D
```

## 3-14 由浅入深 webpack - PostCSS-in-webpack

- postcss(用 js 处理 css, 打包时期)
- autoprefixer(css 前缀)
- cssnano(压缩优化 css, css-loader 借助了 cssnano 的功能)
- postcss-cssnext(使用未来的 css 语法)

```console
npm i postcss postcss-loader autoprefixer cssnano postcss-cssnext -D

npm install babel-loader@8.0.0-beta.0 @babel/core
<!-- 选上 -->
npm i babel-loader babel-core -D

npm i @babel/preset-env -D
<!-- 选上 -->
npm i babel-preset-env -D
```

- .babelrc 配置 env, 替换下面方法
- browserslist(浏览器限制) **package.json**

```json
"browserslist": [
  ">= 1%",
  "last 2 versions"
]
```

## 3-15, 3-16 由浅入深 webpack - Tree-shaking - JS CSS Tree-shaking

- Tree-shaking(没使用到的代码删除掉)
- [webpack.optimize.UglifyJsPlugin 版本没有跟上 webpack4 导致问题](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

```console
npm i lodash-es -S

<!-- js 压缩 -->
npm i uglifyjs-webpack-plugin -D

<!-- glob-all: 加载多路径 -->
npm i glob-all -D
<!-- css 压缩 -->
npm i purifycss-webpack -D

<!-- babel .babelrc 参考 3-3 -->
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env babel-plugin-lodash -D
<!-- 选上 -->
npm i babel-loader babel-core babel-preset-env babel-plugin-lodash -D
```

## 4-1, 4-2, 4-3 文件处理（2）- 图片处理 - 压缩图片、自动合成雪碧图 Base64 编码 sprite、retina 处理 处理字体文件

```console
npm i file-loader url-loader img-loader postcss-sprites -D
```

- 1@2x.png retina 屏幕上用的图片
- 样式表 1px = retina 2px

## 4-4 文件处理（4）- 处理第三方 JS 库（providePlugin、imports-loader）

```console
npm i jquery -S
npm i imports-loader -D
```

## 4-5 html in webpack（1） - 处理 HTML

```console
npm i html-webpack-plugin -S
```

## 4-6 html in webpack（2） - HTML 中引入图片

```console
npm i html-loader -S
```

## 4-7 html in webpack（3） - 配合优化

- 提前载入 webpack 加载代码

```console
<!-- webpack 生成的文件插入到 html 中, 潜在 bug -->
npm i inline-mainifest-webpack-plugin -D
<!-- 选择各种 chunk 插入 html 中 -->
npm i html-webpack-inline-chunk-plugin -D
```

## 5-1 开发环境 - Webpack Watch Mode

```console
npm install clean-webpack-plugin -D
```

```console
webpack --watch
webpack -w --progress --color --display-reasons
```

## 5-2 开发环境 - Webpack Dev Server - 本地 rewrite 规则-

```console
npm install webpack-dev-server -D
```
