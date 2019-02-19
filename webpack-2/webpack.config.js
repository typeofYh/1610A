const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const bodyParse = require('body-parser');
const resolve = function(filename){
    return path.join(__dirname,filename)
}

module.exports = {
    mode:'development',
    entry:{
        a:resolve('src/app.js'),
        b:resolve('src/index.js'),
    },
    output:{ //[name]
        filename:'[name]-[hash].js',
        path:resolve('build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
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
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    //开发中 
    //webpack-dev-server
    devServer:{
        port:8081,
        open:true,
        hot:true,
        after(app){
            app.use(bodyParse.json());
            app.use(bodyParse.urlencoded({extended:false}));
            app.post('/api/list',(req,res,next)=>{
                console.log(req.body);
                res.send({name:'1610A'});
            })
        }
    },
    //插件
    //进一步操作模块文件
    plugins:[
        //html-webpack-plugin 快速构建html
        //1.下载插件
        //2. 引入插件
        //3. 调用插件
        new HtmlPlugin({
            template:'./index.html', //模板文件
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}


