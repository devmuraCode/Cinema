/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  swcMinify: true,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  async rewrites() {
    return[
      {
        source: '/app/:path*',
        destination: 'http://localhost:4200/api/:path*',
      },
      {
        source: '/upload/:path*',
        destination: 'http://localhost:4200/uploads/:path*',
      }
    ]
  }
}

module.exports = nextConfig
