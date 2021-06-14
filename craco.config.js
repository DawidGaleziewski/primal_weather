/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Redux': path.resolve(__dirname, 'src/redux'),
      '@Router': path.resolve(__dirname, 'src/router'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Views': path.resolve(__dirname, 'src/views'),
    }
  },
};