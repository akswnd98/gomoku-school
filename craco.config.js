const path = require('path');
const fs = require('fs');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const manifest = require('./manifest.json');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@assets/*': path.resolve(__dirname, 'src/assets'),
      '@src/*': path.resolve(__dirname, 'src'),
      '@models/*': path.resolve(__dirname, 'models'),
    },
    plugins: [
      new WebpackPwaManifest(manifest),
      new InjectManifest({
        swSrc: path.resolve(process.cwd(), 'src/sw.js'),
        swDest: 'sw.js',
        maximumFileSizeToCacheInBytes: 500 * 1024 * 1024,
      }),
      new CopyPlugin({
        patterns: [
          { from: 'models', to: 'models' },
        ],
      }),
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    https: {
      key: fs.readFileSync(path.resolve(process.cwd(), 'certificates/server.key')),
      cert: fs.readFileSync(path.resolve(process.cwd(), 'certificates/server.crt')),
      ca: fs.readFileSync(path.resolve(process.cwd(), 'certificates/rootCA.crt')),
    },
  },
};
