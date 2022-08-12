# install 程序
## package 安裝
1. npm install log4js
2. npm install lodash
3. npm install webpack webpack-cli terser-webpack-plugin --save-dev
---
## launch.json 配置
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Index",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}\\src\\index.js"
    }
  ]
}
```
---
## webpack.config.js 配置
```js
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  target: 'node',
  mode: 'production',
  // mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  // plugins: [

  // ],
}
```
---