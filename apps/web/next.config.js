/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['database', 'tax-engine', 'shared'],
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
}

module.exports = nextConfig