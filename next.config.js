/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = withImages({
  assetPrefix: NODE_ENV === 'production' ? 'https://resume.yeonhyuk.me' : ''
});
// withCSS({
// webpack: config => {
//   config.resolve.alias['@'] = __dirname;
//   return config;
// }
// }),
