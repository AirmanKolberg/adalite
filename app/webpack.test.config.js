module.exports = {
  entry: `${__dirname}/tests/src/unit/index.js`,
  output: {
    path: `${__dirname}/tests`,
    filename: 'dist/index.bundle.js',
  },
  node: {
    fs: 'empty',
  },
  externals: {
    // to avoid including webpack's 'crypto' if window.crypto is available - reduces bundle size
    crypto: 'crypto',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
