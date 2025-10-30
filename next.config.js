/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // Disable CSS optimization to avoid critters dependency
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true
}

module.exports = nextConfig