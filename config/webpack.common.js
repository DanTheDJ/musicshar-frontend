
const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

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

          {

            loader: 'css-loader',

            options: {

              modules: false,
              sourceMaps: true,

              minimize: {

                safe: true

              }

            }

          },

          {

            loader: 'postcss-loader',
            options: {

              plugins: () => [

                require( 'autoprefixer' )( { browsers: ['last 2 versions'] } )

              ]

            },

          },

          {

            loader: 'sass-loader',
            options: {}

          }

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

    // Uncomment if using moment.js
    // new webpack.IgnorePlugin( /^\.\/locale$/, [/moment$/] )

  ],

  optimization: {

    splitChunks: {

      chunks: 'all',
      minSize: 0

    }

  }

};
