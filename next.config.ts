// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack(config: any) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });

    return config;
  },
};
