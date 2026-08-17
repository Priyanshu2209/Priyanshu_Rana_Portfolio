/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
=======
=======
>>>>>>> Stashed changes
  logging: {
    fetches: {
      full: false,
    },
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  },
}

module.exports = nextConfig