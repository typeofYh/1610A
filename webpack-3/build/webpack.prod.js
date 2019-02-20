const config = require('../config/index');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const prodConfig = {
    mode:config.production.mode,
    output:{
        filename:'[name]-[hash].js',
        path:config.production.outputDir
    }
}

module.exports = webpackMerge(prodConfig,baseConfig);