/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
