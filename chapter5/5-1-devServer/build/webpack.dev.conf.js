﻿const path = require('path')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const PurifyCss = require('purifycss-webpack')
// const glob = require('glob-all')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const productionConfig = require('./webpack.prod.conf')
// const developmentConfig = require('./webpack.dev.conf')
// const merge = require('webpack-merge')
const proxy = require('./proxy')
const historyFallback = require('./historyFallback')

module.exports = {
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9001,
		// 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
		overlay: true,
		// 热更新
		hot: true,
		// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
		// historyApiFallback: true,
		historyApiFallback: historyFallback,
		// 在同域名下发送 API 请求
		proxy: proxy
	},
	plugins: [
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 路径输出
		new webpack.NamedModulesPlugin()
	]
}
