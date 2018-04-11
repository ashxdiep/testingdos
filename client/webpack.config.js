module.exports = {
  entry: [
    './src/index.js'
  ],
  //so can find jsx files as well
  module: {
   loaders: [{
     test: /\.jsx?$/,
     exclude: /node_modules/,
     loader: 'babel'
   }]
 },
 resolve: {
   extensions: ['', '.js', '.jsx']
 },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: './dist'
  }
};
