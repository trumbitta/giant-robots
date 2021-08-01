module.exports = (config) => {
  return {
    ...config,
    output: { ...config.output, filename: 'giant-robots.js' },
  };
};
