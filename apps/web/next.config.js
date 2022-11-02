const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
