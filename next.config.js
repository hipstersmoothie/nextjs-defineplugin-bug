module.exports = (nextConfig = {}) => ({
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        SOME_CONSTANT: "'it worked!'",
      })
    );

    // Don't clobber previous plugins' webpack functions
    if (typeof nextConfig.webpack === "function") {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});
