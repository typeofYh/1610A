const path = require('path');

const config = {
    mode:'production', //development 开发  production 生产
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                //要匹配的文件类型 regexp
                test:/\.css$/,
                //要执行的loader
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                use:{
                    loader:'file-loader'
                }
            },
            {
                test:/\.(eot|ttf|woff|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10240
                    }
                }
            }
        ]
    }
};

module.exports = config;

