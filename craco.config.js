
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const smRule = webpackConfig.module.rules.find(
        (r) =>
          r.enforce === 'pre' &&
          r.loader &&
          r.loader.includes('source-map-loader')
      );
      if (smRule) {
        smRule.exclude = /@mediapipe\/tasks-vision/;
      }
      return webpackConfig;
    },
  },
};
