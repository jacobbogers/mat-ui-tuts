const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { resolve } = require('path')

module.exports = function () {

    const id = Math.random()

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
                title:'📖 👨‍🎓 tutorial'
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
            new FaviconsWebpackPlugin('./favicon.png')
        ]
    }
    return rc
}