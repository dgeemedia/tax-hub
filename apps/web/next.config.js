/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'database': require('path').resolve(__dirname, '../../packages/database'),
      'tax-engine': require('path').resolve(__dirname, '../../packages/tax-engine/src'),
    }
    return config
  }
}

module.exports = nextConfig