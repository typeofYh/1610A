const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
module.exports = {
    entry:{
        app:path.join(__dirname,'src/app.js')
    },
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader',
            //     options:{
            //         'presets':[
            //             "@babel/preset-stage-2"
            //         ],
            //         'plugins':[
            //              ["@babel/plugin-proposal-decorators", { "legacy": true }],
            //              "@babel/plugin-proposal-function-sent",
            //              "@babel/plugin-proposal-export-namespace-from",
            //              "@babel/plugin-proposal-numeric-separator",
            //              "@babel/plugin-proposal-throw-expressions"
            //         ]
            //     }
            // },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    devServer:{
        port:8080,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpack({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}