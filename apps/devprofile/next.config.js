const withTM = require("next-transpile-modules")(["@czstr/ui"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
