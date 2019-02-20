const config = require('../config/index');
const HtmlPlugin = require('html-webpack-plugin');
const resolve = require('../config/resolve');
module.exports = {
    entry:config.entrypath,
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:resolve('index.html'),
            filename:'index.html'
        })
    ]
}