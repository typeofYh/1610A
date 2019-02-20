const config = require('../config/index');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const devConfig = {
    mode:config.development.mode,
    devServer:{
        hot:true,
        port:config.development.port
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = webpackMerge(baseConfig,devConfig);


//合并 webpack-merge
