const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    //watch: false,
    resolve:{
        extensions: ['.js','.jsx'],    
        alias:{
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
        },
    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/logos"),
                    to: 'assets/logos'
                }
            ]
        }),
    ],
    devServer:{
        static: path.join(__dirname,'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: false,
    },
}

