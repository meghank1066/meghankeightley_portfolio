/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🔥 CRITICAL DEBUG MODE
  swcMinify: false,

  // disable compression that hides real errors
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;