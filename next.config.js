/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true // Disable default image optimization
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5
  },
  assetPrefix: isProd ? "/sarathvad1811.github.io/" : "",
  basePath: isProd ? "/sarathvad1811.github.io" : ""
};

export default nextConfig;
