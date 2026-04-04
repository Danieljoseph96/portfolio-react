module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Suppress source map warnings for react-svg-worldmap
      if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
      }
      webpackConfig.ignoreWarnings.push(
        /Failed to parse source map from.*react-svg-worldmap/
      );
      return webpackConfig;
    },
  },
};
