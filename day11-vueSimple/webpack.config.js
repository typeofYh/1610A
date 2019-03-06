var path = require('path')
var webpack = require('webpack')
var Mock = require('mockjs');
const bodyParser = require('body-parser');
const {
  readFileSync,
  existsSync
} = require('fs');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    after(app) {
	  app.use(bodyParser.json())
	  app.use(bodyParser.urlencoded({extended:false}))
      app.get('/api/home', (req, res) => {
        res.send(readFileSync(path.resolve('src/mock/index/home.json')))
      });
      app.get('/api/bookshelf', (req, res) => {
        res.send(readFileSync(path.resolve('src/mock/index/recommend1.json')))
      })
      app.get('/api/detail', (req, res) => {
        let {
          bookid
        } = req.query;
        let filename = path.resolve('src/mock/detail/' + bookid + '.json');
        if (existsSync(filename)) {
          res.send(readFileSync(filename))
        } else {
          res.send({
            code: 0,
            mas: '暂无该书的数据'
          })
        }
	  });
	  app.post('/api/login',(req,res)=>{
		  let {user,pwd} = req.body;
		  if(user==='zs'&&pwd==='1234'){
			  res.send({
				  code:1,
				  mes:'success',
				  user
			  })
		  }else{
			res.send({
				code:0,
				mes:'用户名或密码输入有误'
			})
		  }
	  })
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
