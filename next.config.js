/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "media.istockphoto.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
