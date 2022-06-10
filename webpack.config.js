const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),

    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', 'ts', 'tsx']
    },

    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },

    devServer: {
        static: path.resolve(__dirname, './public'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}