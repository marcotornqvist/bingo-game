const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
          grid: "autoplace",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};

module.exports = nextConfig;
