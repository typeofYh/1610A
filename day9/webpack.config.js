const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        app:path.resolve('src/app.js')
    },
    output:{
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    devServer:{
        port:8080,
        hot:true,
        proxy:{
            '/api':'http://localhost:3000'
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ],
    resolve:{
        alias:{
            'vue$':"vue/dist/vue.esm.js"
        }
    }
}