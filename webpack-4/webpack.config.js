const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const VeuLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const config = {
    entry:path.resolve('src/app.js'),
    output:{
        filename:'app.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractText.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                // use:['style-loader','css-loader']
                loader:'file-loader'
            },
            {
                test:/\.(ttf|woff|svg|eot)$/,
                // use:['style-loader','css-loader']
                loader:'url-loader'
            },
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            }
        ]
    },
    //解析文件路径
    resolve:{
        //配置文件别名
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@':path.resolve('src')
        },
        //自动解析的文件后缀名 .js .json .css
        extensions: [".js", ".json",".css",'.vue']
    },
    devServer:{
        port:8088,
        hot:true
    },
    plugins:[
        new Htmlplugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new VeuLoaderPlugin(),
        new ExtractText('style.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = config;