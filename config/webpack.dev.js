
const webpack = require( 'webpack' );

const path = require( 'path' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {

  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {

    contentBase: path.resolve( __dirname, '../dist' ),
    historyApiFallback: true,
    port: 8000

  },

  plugins: [

    new webpack.DefinePlugin({

      'process.env.NODE_ENV': JSON.stringify( 'development' ),

      'process.env.API_BASE_URL': JSON.stringify( 'http://localhost:3000' ),
      'process.env.SOCKET_API_BASE_URL': JSON.stringify( 'http://localhost:3000' )

    }),

  ]

});
