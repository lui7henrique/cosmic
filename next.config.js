/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'apod.nasa.gov',
      },
    ],
  },
  compiler: {
    reactRemoveProperties: true,
  },
}

module.exports = nextConfig
