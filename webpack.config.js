const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/ts/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
        alias: {
            '^': path.resolve(__dirname, './src/ts')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/js'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({title: "Customer service page", template: "src/index.html", filename: "../index.html"})
    ]
}