
const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const CopyWebpackPlugin = require('copy-webpack-plugin');

const WorkboxPlugin = require('workbox-webpack-plugin');

const packageJson = require( '../package.json' );

const SRC_PATH = path.resolve( __dirname, '../src' );
const DIST_PATH = path.resolve( __dirname, '../dist' );

module.exports = {

  entry: {

    main: path.resolve( __dirname, `${SRC_PATH}/index.js` )

  },

  output: {

    filename: '[name].js',
    path: DIST_PATH,
    publicPath: '/'

  },

  module: {

    rules: [
      
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },

      {

        test: /\.jsx?$/,
        include: SRC_PATH,
        enforce: 'pre',

        use: [

          {

            loader: 'babel-loader',
            options: {}

          },

          {

            loader: 'eslint-loader',
            options: {

              configFile: '.eslintrc',
              failOnError: true

            }

          }

        ]

      },

      {

        test: /\.(scss|css)$/,

        use: [

          MiniCssExtractPlugin.loader,

          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",

        ]

      }

    ]

  },

  plugins: [

    // new CleanWebpackPlugin( ['dist'] ),

    new HtmlWebpackPlugin({

      title: `${packageJson.name} | ${packageJson.description}`,
      template: path.join( SRC_PATH, 'index.html' ),
      hash: true

    }),

    new MiniCssExtractPlugin({

      filename: '[name].css',
      chunkFilename: '[id].css'

    }),

    new CopyWebpackPlugin([
        {from:'src/img',to:'img'},
        {from:'src/robots.txt',to:'robots.txt'},
        {from:'src/manifest.json',to:'manifest.json'},
    ]),

    new WorkboxPlugin.GenerateSW()

  ],

  optimization: {

    splitChunks: {

      chunks: 'all',
      minSize: 0

    }

  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src/',), path.resolve('./node_modules')]
  }

};
