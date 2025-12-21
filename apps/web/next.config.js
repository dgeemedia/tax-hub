/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@taxhub/database', 'tax-engine'],
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
}

module.exports = nextConfig