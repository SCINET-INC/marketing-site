const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/your-github-repo-name/" : "",
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
