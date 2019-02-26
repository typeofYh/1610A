const path = require('path');
const Vueloader = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.join(__dirname,'src/main.js'),
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loader:['vue-style-loader','css-loader']
            }
        ]
    },
    devServer:{
        port:8080
    },
    plugins:[
        new Vueloader(),
        new HtmlPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions:['.js','.json','.vue']
    }
}