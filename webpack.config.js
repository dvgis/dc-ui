/**
 * @Author: Caven
 * @Date: 2020-01-18 19:22:23
 */

const path = require('path')
const webpack = require('webpack')
const packageInfo = require('./package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const JavaScriptObfuscator = require('webpack-obfuscator')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

function getTime() {
  let now = new Date()
  let m = now.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = now.getDate()
  d = d < 10 ? '0' + d : d
  let h = now.getHours()
  h = h < 10 ? '0' + h : h
  let min = now.getMinutes()
  min = min < 10 ? '0' + min : min
  let s = now.getSeconds()
  s = s < 10 ? '0' + s : s
  return `${now.getFullYear()}-${m}-${d} ${h}:${min}:${s}`
}

module.exports = env => {
  const IS_PROD = (env && env.production) || false
  const publicPath = IS_PROD ? '/' : '/'
  let plugins = [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packageInfo.version),
      __TIME__: JSON.stringify(getTime())
    })
  ]
  if (IS_PROD) {
    plugins.push(new webpack.NoEmitOnErrorsPlugin())
    plugins.push(
      new JavaScriptObfuscator(
        {
          rotateStringArray: true
        },
        []
      )
    )
  }
  return {
    entry: {
      'dc.ui': ['./src/index.js']
    },
    devtool: IS_PROD ? false : 'cheap-module-eval-source-map',
    output: {
      filename: IS_PROD ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: publicPath,
      library: 'DcUI',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
            compact: false,
            ignore: ['checkTree']
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.css', '.vue'],
      alias: {
        '@': resolve('src')
      }
    },
    plugins
  }
}
