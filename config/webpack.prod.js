
const webpack = require( 'webpack' );

const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {

  mode: 'production',

  plugins: [

    new webpack.DefinePlugin({

      'process.env.NODE_ENV': JSON.stringify( 'production' ),

      'process.env.API_BASE_URL': JSON.stringify( 'https://diss-backend.djmanager.co.uk' ),
      'process.env.SOCKET_API_BASE_URL': JSON.stringify( 'https://diss-backend.djmanager.co.uk' )

    })

  ]

});
