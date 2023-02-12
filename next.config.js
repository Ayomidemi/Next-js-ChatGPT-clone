/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  experimental: {
    appDir: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
}
