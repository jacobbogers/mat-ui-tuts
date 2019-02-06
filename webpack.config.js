const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolve } = require("path");

module.exports = function() {
  const id = 5; //Math.random()

  const rc = {
    devtool: "source-map",
    optimization: {
      sideEffects: true, // respect the sideEffects flag in package.json
      flagIncludedChunks: true,
      mergeDuplicateChunks: true,
      removeEmptyChunks: true,
      removeAvailableModules: true,
      // optimization.nodeEnv: '..', uses DefinePlugin to set process.env.NODE_ENV
      chunkIds: "named",
      moduleIds: "hashed",
      namedModules: true, //named modules for better debugging
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      }
    },
    mode: "development",
    entry: {
      app: "./src/App.js"
    },
    output: {
      // path: resolve(__dirname, './dist'),
      filename: `[name]/bundle-${id}.js`
    },
    module: {
      rules: [
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                sourceMap: true
              }
            },
           /* {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },*/
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
      new BundleAnalyzerPlugin({analyzerMode: 'none'}),
      new ManifestPlugin({
        fileName: "manifesto.json"
        // ??publicPath:'pubAssets/' only adjust the values in the manifest nowhere else, how is this usefull?
        // ??basePath: 'someBase' added to theys of the manifest as supposed to the values (see publicPath) used with manifest keys
      }),
      new HtmlWebPackPlugin({
        title: "📖 👨‍🎓 tutorial",
        /* overrided by the template login , look below, when not using 
           webpackHTMLtemplateplgin ->meta: {  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no" },
        */
        hash: true,
        showErrors: true,
        xhtml: true,
        //template configuration
        template: require("html-webpack-template"),
        inject: false, //inject assets into the given template  = false (template has own logic, leave it alone)
        //appMountHtmlSnippet: '<a href="http://www.google.com/hello">hello</a>',
        appMountId: "app", // create a <div id="app"></div> for app mounting
        // appMountIds: ["zip", "zap"],
        // baseHref: 'https://www.jacob-bogers.com' // all rels url go here, favicon, bundle.js etc
        // devServer: 'http://localhost:3000' , will try and load http://localhost:3000/webpack-dev-server.js
        lang: "en-US",
        links: [], // external loadable fonts etc, whatever
        mobile: true,
        meta: [
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }
        ],
        inlineManifestWebpackName: "webpackManifest"
        /*window: {
          env: {
            apiHost: 'http://myapi.com/api/v1'
          }
        }*/
      }),
      //new InlineManifestWebpackPlugin(),
      new CleanWebpackPlugin(["dist"], {
        verbose: true,
        dry: false
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new FaviconsWebpackPlugin({
        logo: "./favicon.png",
        prefix: "icons-[name]/",
        emitStats: true,
        persistentCache: true,
        inject: true,
        background: "#fff",
        title: "📖 👨‍🎓 tutorial",
        icons: {
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
  };
  return rc;
};
