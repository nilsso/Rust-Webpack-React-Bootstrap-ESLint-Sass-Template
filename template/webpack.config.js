const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const src = path.join(__dirname, 'js');
const dist = path.resolve(__dirname, 'dist');

module.exports = (_, { mode }) => ({
    context: src,
    entry: {
        index: './index.js',
    },
    watchOptions: {
        poll: 1000,
    },
    output: {
        path: dist,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [
                    mode === 'production'
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader', 'glslify-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        contentBase: dist,
    },
    plugins: [
        new CopyPlugin([path.resolve(__dirname, 'static')]),

        new WasmPackPlugin({
            crateDirectory: __dirname,
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

        new ESLintPlugin({
            extensions: ['ts', 'tsx']
        }),
    ],
});
