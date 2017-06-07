webpake 升级到2.0以后webpack.config.js配置变化，本项目使用的是webpack 2.6.1<br>
<strong>webpack 报错 No PostCSS Config found 解决方案</strong><br>
1)安装 npm install postcss-import autoprefixer cssnano style-loader postcss-loader --save-dev<br>
2）webpack.config.js配置 
<p>
 module: {
        loaders: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有import 进来的文件也进行处理
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]
                        }
                    }
                ]
            }
        ]
    },
</p>
