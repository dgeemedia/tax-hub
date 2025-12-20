/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      database: path.resolve(__dirname, '../../packages/database'),
      'tax-engine': path.resolve(__dirname, '../../packages/tax-engine/src'),
    }
    return config
  },
}

module.exports = nextConfig
