module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};
