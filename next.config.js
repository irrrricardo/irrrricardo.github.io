/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/irrrricardo.github.io',
  assetPrefix: '/irrrricardo.github.io',
}

module.exports = nextConfig
