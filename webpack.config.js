const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { resolve } = require('path')

module.exports = function () {

    const id = 5 //Math.random()

    const rc = {
        mode: 'development',
        entry: {
            app: './src/App.js'
        },
        output: {
           // path: resolve(__dirname, './dist'),
            filename: `[name]/bundle-${id}.js`
        },
        module: {
            rules: [{
                    test: /\.(jsx?)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {},
                    }, ],
                },
                {
                    test: /\.scss$/,
                    use: [{
                            loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                title:'📖 👨‍🎓 tutorial',
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                hash: true,
                showErrors: true,
                xhtml: true,
                //template configuration
                template: require('html-webpack-template'),
                inject: false, //inject assets into the given template  = false (template has own logic, leave it alone)
                appMountId: 'app', // create a <div id="app"></div> for app mounting
                appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
                //appMountIds: ['zip','zap']
            }),
            new CleanWebpackPlugin(['dist'],
            { 
              verbose: true,
              dry: false
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new FaviconsWebpackPlugin({
                logo: './favicon.png',
                prefix: 'icons-[hash]/',
                emitStats: true,
                persistentCache: true,
                inject: true,
                background:'#fff',
                title: '📖 👨‍🎓 tutorial',
                icons:{
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            })
        ]
    }
    return rc
}