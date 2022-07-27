// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || '',
    GRAPHCMS_API_TOKEN: process.env.GRAPHCMS_API_TOKEN || '',
  },
  images: {
    domains: ['images.prismic.io', 'media.graphassets.com'],
  },
  eslint: {
    dirs: ['src'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'webpack-graphql-loader',
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

module.exports = nextConfig
