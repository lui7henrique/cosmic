/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'apod.nasa.gov',
      },
    ],
  },
}

module.exports = nextConfig
