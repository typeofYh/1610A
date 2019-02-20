const resolve = require('./resolve');

const config = {
    entrypath:resolve('src/index.js'),
    development:{ //开发环境
        port:process.env.PORT || 3000,  //起本地服务 
        mode:'development'
    },
    production:{  //正式环境
        outputDir:resolve('dist'),  //打包时输出的文件目录
        mode:'production'
    }   
}

module.exports = config;